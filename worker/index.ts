/**
 * Serves the static Astro build and handles POST /api/enquiry,
 * which emails each quote request to the business with Reply-To set to the customer.
 * Mail goes out over SMTP through the domain's existing mailbox (MXroute), using Workers TCP sockets.
 */

import { WorkerMailer } from 'worker-mailer';

interface Enquiry {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  location: string;
  guests: string;
  interests: string[];
  theme: string;
  dietary: string;
  message: string;
  source: string;
}

const INTEREST_LABELS: Record<string, string> = {
  fruit: 'Fruit boards',
  grazing: 'Grazing & cheese boards',
  'signature-board': '1.4m Signature Board',
  desserts: 'Dessert cups & towers',
  chocolates: 'Personalised chocolate bars',
  drinks: 'Mocktail bar',
  styling: 'Styling & hire',
  'full-setup': 'Full event setup',
  unsure: 'Not sure, help me choose',
};

const LIMITS = { short: 200, long: 4000 };

export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url);

    if (url.hostname.startsWith('www.')) {
      url.hostname = url.hostname.slice(4);
      return Response.redirect(url.href, 301);
    }

    if (url.pathname === '/api/enquiry') {
      if (request.method !== 'POST') {
        return new Response('Method not allowed', { status: 405, headers: { Allow: 'POST' } });
      }
      return handleEnquiry(request, env);
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;

async function handleEnquiry(request: Request, env: Env): Promise<Response> {
  const wantsJson = (request.headers.get('Accept') ?? '').includes('application/json');

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return reply(wantsJson, 400, 'We couldn’t read your enquiry.');
  }

  // Honeypot: real people never see this field. Pretend it worked so bots move on.
  if (text(form, 'company')) return reply(wantsJson, 200);

  if (env.TURNSTILE_SECRET) {
    const passed = await verifyTurnstile(
      text(form, 'cf-turnstile-response'),
      env.TURNSTILE_SECRET,
      request.headers.get('CF-Connecting-IP'),
    );
    if (!passed) return reply(wantsJson, 400, 'Please complete the spam check.');
  }

  const enquiry: Enquiry = {
    name: text(form, 'name'),
    email: text(form, 'email'),
    phone: text(form, 'phone'),
    eventType: text(form, 'eventType'),
    eventDate: text(form, 'eventDate'),
    location: text(form, 'location'),
    guests: text(form, 'guests'),
    interests: form
      .getAll('interests')
      .map((v) => INTEREST_LABELS[String(v)])
      .filter(Boolean),
    theme: text(form, 'theme'),
    dietary: text(form, 'dietary'),
    message: text(form, 'message', LIMITS.long),
    source: text(form, 'source'),
  };

  const problem = validate(enquiry);
  if (problem) return reply(wantsJson, 400, problem);

  const email = {
    from: { name: 'Nazari Events website', email: env.SMTP_USER },
    to: env.ENQUIRY_TO,
    reply: { name: enquiry.name, email: enquiry.email },
    subject: `New enquiry: ${enquiry.eventType}, ${formatDate(enquiry.eventDate)} (${enquiry.name})`,
    html: renderHtml(enquiry),
    text: renderText(enquiry),
  };

  if (!env.SMTP_PASSWORD) {
    // Local development without credentials: show what would have been sent instead of failing.
    if (['localhost', '127.0.0.1'].includes(new URL(request.url).hostname)) {
      console.log(`[dry run] Would email ${email.to}:\n${email.subject}\n\n${email.text}`);
      return reply(wantsJson, 200);
    }
    console.error('SMTP_PASSWORD is not set; enquiry not sent.');
    return reply(wantsJson, 503, 'Our enquiry form is temporarily unavailable.');
  }

  try {
    await WorkerMailer.send(
      {
        host: env.SMTP_HOST,
        port: Number(env.SMTP_PORT),
        secure: true,
        credentials: { username: env.SMTP_USER, password: env.SMTP_PASSWORD },
        authType: ['plain', 'login'],
      },
      email,
    );
  } catch (err) {
    console.error('Enquiry email failed', err);
    return reply(wantsJson, 502, 'We couldn’t send your enquiry just now.');
  }

  return reply(wantsJson, 200);
}

function text(form: FormData, key: string, max = LIMITS.short): string {
  const value = form.get(key);
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function validate(e: Enquiry): string | null {
  const missing = (
    [
      ['name', 'your name'],
      ['email', 'your email'],
      ['phone', 'your phone number'],
      ['eventType', 'the type of event'],
      ['eventDate', 'the event date'],
      ['location', 'the suburb or venue'],
      ['guests', 'the number of guests'],
    ] as const
  ).find(([key]) => !e[key]);
  if (missing) return `Please add ${missing[1]}.`;

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)) return 'Please check your email address.';
  if (!/^\d{4}-\d{2}-\d{2}$/.test(e.eventDate) || Number.isNaN(Date.parse(e.eventDate))) {
    return 'Please check the event date.';
  }
  return null;
}

async function verifyTurnstile(token: string, secret: string, ip: string | null): Promise<boolean> {
  if (!token) return false;
  const body = new FormData();
  body.append('secret', secret);
  body.append('response', token);
  if (ip) body.append('remoteip', ip);
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body });
  const data = (await res.json()) as { success?: boolean };
  return data.success === true;
}

function reply(wantsJson: boolean, status: number, error?: string): Response {
  if (wantsJson) {
    return Response.json(error ? { ok: false, error } : { ok: true }, { status });
  }
  // Without JavaScript the browser posts the form directly, so send people somewhere sensible.
  if (!error) return new Response(null, { status: 303, headers: { Location: '/thanks' } });
  return new Response(`${error} Please go back and try again, or call 0430 350 000.`, {
    status,
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}

function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-AU', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

function rows(e: Enquiry): [string, string][] {
  return [
    ['Name', e.name],
    ['Email', e.email],
    ['Phone', e.phone],
    ['Event', e.eventType],
    ['Date', formatDate(e.eventDate)],
    ['Suburb / venue', e.location],
    ['Guests', e.guests],
    ['Interested in', e.interests.join(', ') || '—'],
    ['Theme / colours', e.theme || '—'],
    ['Dietary', e.dietary || '—'],
    ['Heard about us', e.source || '—'],
  ];
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
}

function renderText(e: Enquiry): string {
  const lines = rows(e).map(([k, v]) => `${k}: ${v}`);
  return [
    'New quote request from nazarievents.com',
    '',
    ...lines,
    '',
    'Message:',
    e.message || '—',
    '',
    'Reply to this email to respond directly to the customer.',
  ].join('\n');
}

function renderHtml(e: Enquiry): string {
  const tableRows = rows(e)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 16px 8px 0;color:#72665b;font-size:14px;vertical-align:top;white-space:nowrap">${escapeHtml(k)}</td>` +
        `<td style="padding:8px 0;font-size:15px;color:#1e1916">${escapeHtml(v)}</td></tr>`,
    )
    .join('');
  const message = e.message ? escapeHtml(e.message).replace(/\n/g, '<br>') : '—';
  const tel = e.phone.replace(/[^\d+]/g, '');

  return `<!doctype html>
<html><body style="margin:0;background:#fbf8f3;font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif">
  <div style="max-width:560px;margin:0 auto;padding:32px 24px">
    <p style="margin:0 0 4px;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#6b2437">New quote request</p>
    <h1 style="margin:0 0 24px;font-family:Georgia,serif;font-weight:400;font-size:26px;color:#1e1916">${escapeHtml(e.name)}, ${escapeHtml(e.eventType)}</h1>
    <table style="border-collapse:collapse;width:100%">${tableRows}</table>
    <h2 style="margin:28px 0 8px;font-family:Georgia,serif;font-weight:400;font-size:18px;color:#1e1916">Message</h2>
    <p style="margin:0;font-size:15px;line-height:1.6;color:#4b423b">${message}</p>
    <p style="margin:32px 0 0">
      <a href="mailto:${escapeHtml(e.email)}" style="display:inline-block;padding:12px 20px;border-radius:999px;background:#6b2437;color:#fbf8f3;text-decoration:none;font-size:14px">Reply to ${escapeHtml(e.name.split(' ')[0])}</a>
      <a href="tel:${escapeHtml(tel)}" style="display:inline-block;margin-left:8px;padding:12px 20px;border-radius:999px;border:1px solid #e2d7c7;color:#1e1916;text-decoration:none;font-size:14px">Call ${escapeHtml(e.phone)}</a>
    </p>
  </div>
</body></html>`;
}

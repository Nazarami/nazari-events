# Operations notes

How to keep nazarievents.com running and up to date.

## Updating content

| What | Where |
|---|---|
| Phone, email, socials, ABN, services, packages, FAQs, testimonials, clients, venues | `src/data/site.ts` |
| Photos, their alt text, categories and gallery order | `src/data/photos.ts` (files in `src/assets/photos/`) |
| Page layout and copy | `src/pages/*.astro` |
| Colours and type | `src/styles/global.css` |

**Adding a photo:** resize to at most 2400px on the long edge, put it in `src/assets/photos/`, import it in `src/data/photos.ts` with alt text and categories, and add it to `gallery` if it should appear on /gallery.

## Deploying

```bash
npx wrangler login     # once; approve access to the account that owns nazarievents.com
npm run deploy         # builds the site and deploys the Worker
```

The Worker is `nazari-events` in the Cloudflare account that owns the `nazarievents.com` zone. Both `nazarievents.com` and `www.nazarievents.com` are custom domains on it (www redirects to the main domain).

## Enquiry email

Quote requests are sent over SMTP through the domain's MXroute mailbox and delivered to `ENQUIRY_TO`.
`enquiries@nazarievents.com` is an MXroute forwarder to the business owner's Gmail, so it works both as the site's public contact address and as the delivery address. Manage forwarders and mailboxes at [management.mxroute.com](https://management.mxroute.com) → Open control panel.

| Setting | Where | Value |
|---|---|---|
| `ENQUIRY_TO` | `wrangler.jsonc` vars | Inbox that receives enquiries |
| `SMTP_HOST` / `SMTP_PORT` | `wrangler.jsonc` vars | `witcher.mxrouting.net` / `465` (TLS) |
| `SMTP_USER` | `wrangler.jsonc` vars | `smtp@nazarievents.com` (also the From address) |
| `SMTP_PASSWORD` | Worker secret | Set with `npx wrangler secret put SMTP_PASSWORD` |

If you change the mailbox password in MXroute, update the secret too, otherwise the form returns "We couldn't send your enquiry just now".

To debug a failing send, watch the logs while submitting a test:

```bash
npx wrangler tail nazari-events
```

Don't add Cloudflare Email Routing to this domain: it would replace the MXroute MX records and break the mailboxes.

## Optional: Turnstile spam check

1. Create a Turnstile widget for `nazarievents.com` in the Cloudflare dashboard.
2. `npx wrangler secret put TURNSTILE_SECRET` with the secret key.
3. Build with `PUBLIC_TURNSTILE_SITE_KEY=<site key> npm run deploy`.

Note: a `TURNSTILE_SECRET_KEY` secret already exists on the Worker from before this project. The code reads `TURNSTILE_SECRET`, so it's unused.

## Still to do

- [x] Fix the MXroute mailbox password and update `SMTP_PASSWORD`, then send a test enquiry (done 7 Oct 2026).
- [ ] Add `nazarievents.com` to the Instagram, TikTok and Facebook bios.
- [ ] Redirect `nazaridesserts.com.au` to the new site, and retire the Wix site.
- [ ] Swap in original (uncompressed) photos from her phone, especially for the hero shots.
- [ ] Collect more reviews, ideally from weddings, and add them to `testimonials` in `src/data/site.ts`.

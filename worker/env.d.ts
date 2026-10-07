// Secrets aren't in wrangler.jsonc, so `wrangler types` can't see them.
interface Env {
  /** Password for SMTP_USER. Set with `npx wrangler secret put SMTP_PASSWORD`. */
  SMTP_PASSWORD?: string;
  /** Optional. Set with `npx wrangler secret put TURNSTILE_SECRET` to enable the spam check. */
  TURNSTILE_SECRET?: string;
}

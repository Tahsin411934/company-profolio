# Verification session configuration

Set SESSION_SECRET to a private random value of at least 32 characters in every deployment environment. Use the same value across all instances. Generate one with node -e "console.log(require('node:crypto').randomBytes(32).toString('hex'))". Never use a NEXT_PUBLIC_ prefix or commit the secret.

The session uses an authenticated AES-256-GCM encrypted HttpOnly cookie, not a server-side session database. It expires after one hour and is Secure in production with SameSite=Lax. Only the email, expiry and resend cooldown are stored; no passwords or authentication tokens. Registration checks configuration before creating an account. Resend requests read the email server-side and retain the original session expiry. Backend rate limiting remains authoritative across concurrent requests.

The existing /email-verified page remains the destination of the backend email verification flow. This session records pending instructions only and never grants account verification or dashboard access.

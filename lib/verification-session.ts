import "server-only";
import { createCipheriv, createDecipheriv, createHash, randomBytes } from "node:crypto";
import { cookies } from "next/headers";

const COOKIE = "aft-email-verification";
const MAX_AGE = 60 * 60;
type VerificationSession = { email: string; expiresAt: number; resendAfter: number };

export function verificationSessionKey() {
  const secret = process.env.SESSION_SECRET?.trim();
  if (!secret || secret.length < 32) throw new Error("SESSION_SECRET must contain at least 32 characters.");
  return createHash("sha256").update(secret).digest();
}

export async function saveVerificationSession(session: VerificationSession) {
  const iv = randomBytes(12);
  const cipher = createCipheriv("aes-256-gcm", verificationSessionKey(), iv);
  const encrypted = Buffer.concat([cipher.update(JSON.stringify(session), "utf8"), cipher.final()]);
  const value = Buffer.concat([iv, cipher.getAuthTag(), encrypted]).toString("base64url");
  (await cookies()).set(COOKIE, value, {
    httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax",
    path: "/", maxAge: Math.max(0, Math.floor((session.expiresAt - Date.now()) / 1000)),
  });
}

export async function startVerificationSession(email: string) {
  await saveVerificationSession({ email, expiresAt: Date.now() + MAX_AGE * 1000, resendAfter: Date.now() + 60_000 });
}

export async function readVerificationSession(): Promise<VerificationSession | null> {
  try {
    const value = (await cookies()).get(COOKIE)?.value;
    if (!value) return null;
    const payload = Buffer.from(value, "base64url");
    const decipher = createDecipheriv("aes-256-gcm", verificationSessionKey(), payload.subarray(0, 12));
    decipher.setAuthTag(payload.subarray(12, 28));
    const session = JSON.parse(Buffer.concat([decipher.update(payload.subarray(28)), decipher.final()]).toString("utf8"));
    if (typeof session.email !== "string" || typeof session.expiresAt !== "number" || typeof session.resendAfter !== "number" || session.expiresAt <= Date.now()) return null;
    return session;
  } catch { return null; }
}

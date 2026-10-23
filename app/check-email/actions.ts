"use server";
import { readVerificationSession, saveVerificationSession } from "../../lib/verification-session";

export async function resendVerificationEmail() {
  const session = await readVerificationSession();
  if (!session) return { message: "Your session has expired. Please go to login to request another verification email.", success: false };
  if (session.resendAfter > Date.now()) return { message: "Please wait a minute before requesting another email.", success: false };
  await saveVerificationSession({ ...session, resendAfter: Date.now() + 60_000 });
  try {
    const response = await fetch("https://admin.onehaatbd.com/api/v1/email/verification-notification", {
      method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ email: session.email }), cache: "no-store", signal: AbortSignal.timeout(15000),
    });
    if (!response.ok) return { message: response.status === 429 ? "Too many requests. Please wait before trying again." : "Could not resend the email. Please try again in a minute.", success: false };
    return { message: "Verification email requested. Please check your inbox and spam folder.", success: true };
  } catch { return { message: "Could not resend the email. Please try again in a minute.", success: false }; }
}

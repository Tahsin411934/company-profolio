import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Clock3 } from "lucide-react";
import { readVerificationSession } from "../../lib/verification-session";
import ResendButton from "./ResendButton";

export const metadata: Metadata = { title: "Check your email", robots: { index: false, follow: false } };

export default async function CheckEmailPage() {
  const session = await readVerificationSession();
  return <main className="flex min-h-screen items-center justify-center bg-[#F4F6F5] px-4 pb-10 pt-28">
    <section aria-labelledby="verify-email-heading" className="w-full max-w-lg rounded-3xl border border-[#DFE6E2] bg-white p-6 text-center shadow-xl shadow-slate-200/40 sm:p-10">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EDF4EA] text-[#234E3B]">{session ? <Mail className="h-8 w-8" strokeWidth={1.5} /> : <Clock3 className="h-8 w-8" strokeWidth={1.5} />}</div>
      <h1 id="verify-email-heading" className="mt-6 text-2xl font-extrabold tracking-tight text-[#183B2E] sm:text-3xl">{session ? "Check your email to continue" : "Your verification session has expired"}</h1>
      {session ? <>
        <p className="mt-3 text-sm leading-6 text-slate-500">Store created successfully. Please check your email to verify your account.</p>
        <p className="mt-5 text-sm leading-7 text-slate-600">We sent a verification link to <strong className="break-all text-[#234E3B]">{session.email}</strong>. Verify your email before logging in to the admin dashboard.</p>
        <ResendButton />
      </> : <>
        <p className="mt-4 text-sm leading-7 text-slate-600">You can still use the verification link in your email. To request a new link, continue to login with your existing account.</p>
        <Link href="https://onehaatbd.com/login" className="mt-6 inline-flex min-h-11 items-center rounded-lg bg-[#234E3B] px-6 text-sm font-semibold text-white">Continue to login</Link>
      </>}
    </section>
  </main>;
}

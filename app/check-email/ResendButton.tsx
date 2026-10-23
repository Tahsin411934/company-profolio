"use client";
import { useActionState } from "react";
import { Loader2 } from "lucide-react";
import { resendVerificationEmail } from "./actions";

export default function ResendButton() {
  const [state, action, pending] = useActionState(resendVerificationEmail, null);
  return <form action={action} className="mt-6">
    <button disabled={pending} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#D8E3DA] px-5 text-sm font-semibold text-[#234E3B] transition hover:bg-[#F3F7F1] disabled:opacity-60">
      {pending && <Loader2 className="h-4 w-4 animate-spin" />}{pending ? "Sending..." : "Resend verification email"}
    </button>
    <p role="status" aria-live="polite" className="mt-3 text-xs leading-5 text-slate-500">{state?.message}</p>
  </form>;
}

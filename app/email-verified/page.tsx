"use client";

import { CheckCircle2, ExternalLink, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function VerifiedContent() {
  const params = useSearchParams();
  const storeUrl = params.get("store_url");
  const adminUrl = params.get("admin_url") || "https://admin.aftsoftandlimited.com";
  const welcomeSent = params.get("welcome_sent") !== "0";

  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,#F7FBFF_0%,#FFFFFF_50%,#F3FFFB_100%)] px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <Link href="/" className="mb-10 block text-center">
          <img src="/aft-navbar-logo-clean.png" alt="AFT SOFT" className="mx-auto h-10 w-auto" />
        </Link>
        <section className="rounded-3xl border border-[#0DB89B]/20 bg-white p-6 text-center shadow-xl shadow-slate-200/40 sm:p-10">
          <CheckCircle2 className="mx-auto h-16 w-16 text-[#0DB89B]" />
          <p className="mt-6 text-xs font-bold uppercase tracking-[1.8px] text-[#0A987F]">Email verified</p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[#10245A] sm:text-4xl">Your store is ready</h1>
          <p className="mx-auto mt-4 max-w-lg leading-7 text-slate-600">
            Your email has been verified successfully. We sent your store details to your registered email address.
          </p>
          {!welcomeSent && <p className="mt-3 rounded-lg bg-amber-50 p-3 text-sm text-amber-700">Your account is verified, but the welcome email could not be sent. You can still continue using the links below.</p>}
          <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
            <a href={storeUrl || "#"} target="_blank" rel="noreferrer" className="rounded-xl border border-slate-200 p-5 transition hover:border-[#0DB89B] hover:shadow-md">
              <ExternalLink className="h-5 w-5 text-[#0DB89B]" />
              <p className="mt-3 text-xs font-bold uppercase tracking-wider text-slate-400">Your storefront</p>
              <p className="mt-1 break-all text-sm font-semibold text-[#0A987F]">{storeUrl || "Available in your email"}</p>
            </a>
            <a href={`${adminUrl}/login`} className="rounded-xl border border-[#0DB89B]/30 bg-[#EDFFFA] p-5 transition hover:shadow-md">
              <LayoutDashboard className="h-5 w-5 text-[#0DB89B]" />
              <p className="mt-3 text-xs font-bold uppercase tracking-wider text-slate-400">Admin dashboard</p>
              <p className="mt-1 break-all text-sm font-semibold text-[#0A987F]">{adminUrl}</p>
            </a>
          </div>
          <div className="mt-8 border-t border-slate-100 pt-6 text-left">
            <p className="text-sm font-bold text-[#10245A]">Recommended next steps</p>
            <ol className="mt-3 grid gap-2 text-sm text-slate-600 sm:grid-cols-3">
              <li>1. Open your dashboard</li><li>2. Add your first product</li><li>3. Customize your storefront</li>
            </ol>
          </div>
          <a href={`${adminUrl}/login`} className="mt-8 inline-flex h-12 items-center justify-center rounded-lg bg-[#0DB89B] px-7 font-bold text-white transition hover:bg-[#0AA98E]">Go to admin dashboard</a>
        </section>
      </div>
    </main>
  );
}

export default function EmailVerifiedPage() {
  return <Suspense fallback={null}><VerifiedContent /></Suspense>;
}

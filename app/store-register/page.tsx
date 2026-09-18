"use client";

import { ArrowRight, CheckCircle2, Loader2, ShieldCheck, Store } from "lucide-react";
import { useFormState, useFormStatus } from "react-dom";
import Link from "next/link";
import { registerStoreOwner } from "./actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#0DB89B] px-6 text-base font-bold text-white transition-all duration-200 hover:bg-[#0AA98E] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0DB89B] focus-visible:ring-offset-4 disabled:opacity-50 disabled:pointer-events-none"
    >
      {pending ? (
        <>
          <Loader2 className="h-5 w-5 animate-spin" />
          Registering...
        </>
      ) : (
        <>
          Create My Store
          <ArrowRight className="h-4 w-4" />
        </>
      )}
    </button>
  );
}

function SuccessView({ data, message }: { data: any; message: string }) {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#F7FBFF_0%,#FFFFFF_50%,#F3FFFB_100%)] pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
        <div className="relative z-10 mx-auto max-w-7xl px-[18px] sm:px-6">
          <span className="inline-flex h-8 items-center rounded-full px-4 text-sm font-bold uppercase tracking-[1.8px] bg-[#DDF9F1] text-[#0A987F]">
            E-COMMERCE
          </span>
          <h1 className="mt-6 max-w-2xl text-[34px] font-extrabold leading-[1.08] tracking-[-1px] text-[#10245A] sm:text-[44px] lg:text-[54px]">
            Registration Complete!
          </h1>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-2xl px-[18px] sm:px-6">
          <div className="rounded-[22px] border border-[#0DB89B]/20 bg-[#EDFFFA] p-8 sm:p-10 text-center">
            <CheckCircle2 className="mx-auto h-14 w-14 text-[#0DB89B]" />
            <h2 className="mt-6 text-[28px] font-extrabold tracking-[-0.8px] text-[#10245A]">
              Your Store Is Ready
            </h2>
            <p className="mt-3 text-base leading-[1.7] text-[#687991]">
              {message || "Your store has been created. Please login to continue."}
            </p>
            <div className="mt-6 rounded-xl bg-white border border-[#0DB89B]/20 p-4 text-left">
              <p className="text-xs font-bold uppercase tracking-wider text-[#0A987F] mb-2">Store URL</p>
              <a
                href={data?.store_url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold text-[#0DB89B] hover:underline break-all"
              >
                {data?.store_url || "N/A"}
              </a>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/login"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#0DB89B] px-6 text-base font-semibold text-white transition-colors hover:bg-[#0AA98E]"
              >
                Login Now
              </a>
              <button
                onClick={() => window.location.reload()}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50"
              >
                Register Another Store
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function StoreRegisterPage() {
  const [state, formAction] = useFormState(registerStoreOwner, null);

  if (state?.success) {
    return <SuccessView data={state.data} message={state.message} />;
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#F7FBFF_0%,#FFFFFF_50%,#F3FFFB_100%)] pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
        <div
          className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#0DB89B]/10 blur-[120px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#2783F3]/10 blur-[120px]"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-[18px] sm:px-6 lg:grid-cols-2 lg:gap-12">
          <div>
            <span className="inline-flex h-8 items-center rounded-full px-4 text-sm font-bold uppercase tracking-[1.8px] bg-[#DDF9F1] text-[#0A987F]">
              E-COMMERCE
            </span>
            <h1 className="mt-6 max-w-2xl text-[34px] font-extrabold leading-[1.08] tracking-[-1px] text-[#10245A] sm:text-[44px] lg:text-[54px]">
              Start Your E-commerce Store Today
            </h1>
            <p className="mt-5 max-w-xl text-base leading-[1.7] text-[#687991]">
              Launch, manage, and grow your online business from one
              powerful and easy-to-use platform. Register now and get
              your free subdomain instantly.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#0A987F]">
                <Store className="h-5 w-5" />
                Free subdomain included
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-[#0A987F]">
                <ShieldCheck className="h-5 w-5" />
                SSL secured
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative h-[400px] w-full rounded-[22px] bg-[linear-gradient(135deg,#EDFFFA_0%,#F7FFFC_100%)] p-8 flex items-center justify-center">
              <Store className="h-32 w-32 text-[#0DB89B]/30" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-2xl px-[18px] sm:px-6">
          <div className="text-center mb-10">
            <p className="eyebrow">Get Started</p>
            <h2 className="section-title mt-4">Create Your Store</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate-600">
              Fill in the details below to register your new e-commerce store.
            </p>
          </div>

          <form action={formAction} className="rounded-[22px] border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
            <div className="mb-8">
              <h3 className="text-lg font-bold text-[#10245A] flex items-center gap-2">
                <Store className="h-5 w-5 text-[#0DB89B]" />
                Owner Information
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="first_name" className="block text-sm font-semibold text-slate-700 mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="first_name" name="first_name" type="text" required
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#0DB89B] focus:ring-2 focus:ring-[#0DB89B]/30"
                    placeholder="Rahim"
                  />
                  {state?.errors?.first_name && (
                    <p className="mt-1 text-xs text-red-500">{state.errors.first_name[0]}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="last_name" className="block text-sm font-semibold text-slate-700 mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="last_name" name="last_name" type="text" required
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#0DB89B] focus:ring-2 focus:ring-[#0DB89B]/30"
                    placeholder="Uddin"
                  />
                  {state?.errors?.last_name && (
                    <p className="mt-1 text-xs text-red-500">{state.errors.last_name[0]}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-bold text-[#10245A]">Contact</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email" name="email" type="email" required
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#0DB89B] focus:ring-2 focus:ring-[#0DB89B]/30"
                    placeholder="you@example.com"
                  />
                  {state?.errors?.email && (
                    <p className="mt-1 text-xs text-red-500">{state.errors.email[0]}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1">Phone</label>
                  <input
                    id="phone" name="phone" type="tel"
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#0DB89B] focus:ring-2 focus:ring-[#0DB89B]/30"
                    placeholder="01711223344"
                  />
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-bold text-[#10245A]">Password</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="password" className="block text-sm font-semibold text-slate-700 mb-1">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="password" name="password" type="password" required
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#0DB89B] focus:ring-2 focus:ring-[#0DB89B]/30"
                    placeholder="Min 8 characters"
                  />
                  {state?.errors?.password && (
                    <p className="mt-1 text-xs text-red-500">{state.errors.password[0]}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="password_confirmation" className="block text-sm font-semibold text-slate-700 mb-1">
                    Confirm Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="password_confirmation" name="password_confirmation" type="password" required
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#0DB89B] focus:ring-2 focus:ring-[#0DB89B]/30"
                    placeholder="Repeat password"
                  />
                  {state?.errors?.password_confirmation && (
                    <p className="mt-1 text-xs text-red-500">{state.errors.password_confirmation[0]}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-bold text-[#10245A]">Store Details</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="store_name" className="block text-sm font-semibold text-slate-700 mb-1">
                    Store Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="store_name" name="store_name" type="text" required
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#0DB89B] focus:ring-2 focus:ring-[#0DB89B]/30"
                    placeholder="Rahim Electronics"
                  />
                  {state?.errors?.store_name && (
                    <p className="mt-1 text-xs text-red-500">{state.errors.store_name[0]}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="store_slug" className="block text-sm font-semibold text-slate-700 mb-1">Store Slug</label>
                  <input
                    id="store_slug" name="store_slug" type="text"
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#0DB89B] focus:ring-2 focus:ring-[#0DB89B]/30"
                    placeholder="rahim-electronics (optional)"
                  />
                  <p className="mt-1 text-xs text-slate-400">
                    Your store URL:{" "}
                    <code className="text-[#0DB89B]">
                      {state?.data?.store?.slug || "your-slug"}.aftsoftandlimited.com
                    </code>
                  </p>
                  {state?.errors?.store_slug && (
                    <p className="mt-1 text-xs text-red-500">{state.errors.store_slug[0]}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="currency_code" className="block text-sm font-semibold text-slate-700 mb-1">Currency</label>
                  <select
                    id="currency_code" name="currency_code" defaultValue="BDT"
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#0DB89B] focus:ring-2 focus:ring-[#0DB89B]/30"
                  >
                    <option value="BDT">BDT - Bangladeshi Taka</option>
                    <option value="USD">USD - US Dollar</option>
                    <option value="EUR">EUR - Euro</option>
                    <option value="GBP">GBP - British Pound</option>
                    <option value="INR">INR - Indian Rupee</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="timezone" className="block text-sm font-semibold text-slate-700 mb-1">Timezone</label>
                  <select
                    id="timezone" name="timezone" defaultValue="Asia/Dhaka"
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#0DB89B] focus:ring-2 focus:ring-[#0DB89B]/30"
                  >
                    <option value="Asia/Dhaka">Asia/Dhaka</option>
                    <option value="Asia/Kolkata">Asia/Kolkata</option>
                    <option value="UTC">UTC</option>
                    <option value="Asia/Shanghai">Asia/Shanghai</option>
                    <option value="Asia/Tokyo">Asia/Tokyo</option>
                    <option value="America/New_York">America/New_York</option>
                    <option value="Europe/London">Europe/London</option>
                  </select>
                </div>
              </div>
            </div>

            <SubmitButton />

            {state?.message && !state?.success && (
              <p className="mt-3 text-center text-sm text-red-500">{state.message}</p>
            )}

            <p className="mt-4 text-center text-xs text-slate-400">
              Already have an account?{" "}
              <Link href="/login" className="font-semibold text-[#0DB89B] hover:underline">Log in</Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

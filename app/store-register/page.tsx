"use client";

import { ArrowRight, CheckCircle2, CircleCheck, Loader2, ShieldCheck, Store } from "lucide-react";
import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useState } from "react";
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
  const store = data?.store || {};
  const user = data?.user || {};
  const ownerName = [user.first_name, user.last_name].filter(Boolean).join(" ") || "Store owner";

  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-slate-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-[18px] sm:px-6">
          <Link href="/" aria-label="AFT SOFT home">
            <img src="/aft-navbar-logo-clean.png" alt="AFT SOFT" className="h-8 w-auto" />
          </Link>
          <Link href="/login" className="text-sm font-semibold text-slate-600 hover:text-[#0DB89B]">
            Already have an account? <span className="text-[#0DB89B]">Log in</span>
          </Link>
        </div>
      </header>
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
              {message || "Your free store has been created successfully."}
            </p>
            <div className="mt-6 grid gap-3 text-left sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Store</p>
                <p className="mt-1 truncate text-base font-bold text-[#10245A]">{store.name || "Your store"}</p>
                <p className="mt-1 text-xs text-emerald-600">Active · Free plan</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Owner account</p>
                <p className="mt-1 truncate text-base font-bold text-[#10245A]">{ownerName}</p>
                <p className="mt-1 truncate text-xs text-slate-500">{user.email || "Email used during signup"}</p>
              </div>
            </div>
            <div className="mt-3 rounded-xl border border-[#0DB89B]/20 bg-white p-4 text-left">
              <p className="text-xs font-bold uppercase tracking-wider text-[#0A987F]">Your free storefront URL</p>
              <a href={data?.store_url || "#"} target="_blank" rel="noopener noreferrer" className="mt-1 block break-all text-base font-semibold text-[#0DB89B] hover:underline">
                {data?.store_url || "Not available"}
              </a>
            </div>
            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5 text-left">
              <p className="text-sm font-bold text-[#10245A]">Next steps</p>
              <div className="mt-3 grid gap-2 text-sm text-slate-600 sm:grid-cols-3">
                <span>1. Log in to your dashboard</span>
                <span>2. Add your first product</span>
                <span>3. Connect a custom domain later</span>
              </div>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://onehaatbd.com/login"
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
  const [storeName, setStoreName] = useState("");
  const [storeSlug, setStoreSlug] = useState("");
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);
  const [slugStatus, setSlugStatus] = useState<"idle" | "checking" | "available" | "taken" | "invalid" | "reserved">("idle");

  const previewSlug = storeSlug || storeName
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "your-store";
  const normalizeSlug = (value: string) => value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  const errors = state?.errors || {};
  const fieldError = (name: string) => errors[name]?.[0];
  const inputClass = (name: string, base: string) =>
    `${base} ${fieldError(name) ? "border-red-400 bg-red-50/30 focus:border-red-500 focus:ring-red-500/20" : ""}`;

  useEffect(() => {
    const slug = storeSlug || previewSlug;
    if (!slug || slug === "your-store") {
      setSlugStatus("idle");
      return;
    }
    setSlugStatus("checking");
    const timer = setTimeout(async () => {
      try {
        const response = await fetch(`https://admin.onehaatbd.com/api/v1/register/store-slug-availability?slug=${encodeURIComponent(slug)}`, { headers: { Accept: "application/json" } });
        const body = await response.json();
        setSlugStatus(body?.data?.available ? "available" : body?.data?.reason === "invalid" ? "invalid" : body?.data?.reason === "reserved" ? "reserved" : "taken");
      } catch {
        setSlugStatus("idle");
      }
    }, 350);
    return () => clearTimeout(timer);
  }, [storeSlug, previewSlug]);

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      document.querySelector<HTMLElement>("[aria-invalid='true']")?.focus();
    }
  }, [state]);

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
              Launch, manage, and grow your online business from one powerful,
              easy-to-use platform. Create your store free and get a
              storefront URL instantly.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#0A987F]">
                <Store className="h-5 w-5" />
                Free store URL included
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-[#0A987F]">
                <ShieldCheck className="h-5 w-5" />
                Secure by default
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
            <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-[#DDF9F1] px-4 py-2 text-xs font-bold uppercase tracking-[1.5px] text-[#0A987F]"><CircleCheck className="h-4 w-4" /> Free forever to get started</div>
            <h2 className="section-title mt-4">Create Your Store</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate-600">
              Set up your owner account and choose your free storefront address.
            </p>
          </div>

          <div className="mb-6 grid gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 sm:grid-cols-3">
            <div className="flex items-center gap-2"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0DB89B] text-xs font-bold text-white">1</span> Owner account</div>
            <div className="flex items-center gap-2"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0DB89B] text-xs font-bold text-white">2</span> Store details</div>
            <div className="flex items-center gap-2"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0DB89B] text-xs font-bold text-white">3</span> Launch instantly</div>
          </div>

          <form action={formAction} className="rounded-[22px] border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
            {state?.message && Object.keys(errors).length > 0 && (
              <div role="alert" className="mb-8 rounded-xl border border-red-200 bg-red-50 p-4 text-left">
                <p className="text-sm font-bold text-red-700">Please review the highlighted fields.</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-red-600">
                  {Object.entries(errors).map(([name, messages]) => (
                    <li key={name}>{(messages as string[])[0]}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-[#10245A] flex items-center gap-2">
                <Store className="h-5 w-5 text-[#0DB89B]" />
                Owner account
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="first_name" className="block text-sm font-semibold text-slate-700 mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="first_name" name="first_name" type="text" required
                    className={inputClass("first_name", "w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#0DB89B] focus:ring-2 focus:ring-[#0DB89B]/30")}
                    aria-invalid={fieldError("first_name") ? "true" : "false"}
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
                    className={inputClass("last_name", "w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#0DB89B] focus:ring-2 focus:ring-[#0DB89B]/30")}
                    aria-invalid={fieldError("last_name") ? "true" : "false"}
                    placeholder="Uddin"
                  />
                  {state?.errors?.last_name && (
                    <p className="mt-1 text-xs text-red-500">{state.errors.last_name[0]}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-bold text-[#10245A]">Contact details</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email" name="email" type="email" required
                    className={inputClass("email", "w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#0DB89B] focus:ring-2 focus:ring-[#0DB89B]/30")}
                    aria-invalid={fieldError("email") ? "true" : "false"}
                    placeholder="you@example.com"
                  />
                  {state?.errors?.email && (
                    <p className="mt-1 text-xs font-medium text-red-600">{fieldError("email")}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1">Phone <span className="text-red-500">*</span></label>
                  <input
                    id="phone" name="phone" type="tel" required
                    className={inputClass("phone", "w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#0DB89B] focus:ring-2 focus:ring-[#0DB89B]/30")}
                    aria-invalid={fieldError("phone") ? "true" : "false"}
                    placeholder="01711223344"
                  />
                  {fieldError("phone") && <p className="mt-1 text-xs font-medium text-red-600">{fieldError("phone")}</p>}
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-bold text-[#10245A]">Secure your account</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="password" className="block text-sm font-semibold text-slate-700 mb-1">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="password" name="password" type="password" required
                    className={inputClass("password", "w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#0DB89B] focus:ring-2 focus:ring-[#0DB89B]/30")}
                    aria-invalid={fieldError("password") ? "true" : "false"}
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
                    className={inputClass("password_confirmation", "w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#0DB89B] focus:ring-2 focus:ring-[#0DB89B]/30")}
                    aria-invalid={fieldError("password_confirmation") ? "true" : "false"}
                    placeholder="Repeat password"
                  />
                  {state?.errors?.password_confirmation && (
                    <p className="mt-1 text-xs text-red-500">{state.errors.password_confirmation[0]}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-bold text-[#10245A]">Store details</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="store_name" className="block text-sm font-semibold text-slate-700 mb-1">
                    Store Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="store_name" name="store_name" type="text" required
                    value={storeName}
                    onChange={(event) => {
                      const value = event.target.value;
                      setStoreName(value);
                      if (!slugManuallyEdited) setStoreSlug(normalizeSlug(value));
                    }}
                    className={inputClass("store_name", "w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#0DB89B] focus:ring-2 focus:ring-[#0DB89B]/30")}
                    aria-invalid={fieldError("store_name") ? "true" : "false"}
                    placeholder="Rahim Electronics"
                  />
                  {state?.errors?.store_name && (
                    <p className="mt-1 text-xs text-red-500">{state.errors.store_name[0]}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="store_slug" className="block text-sm font-semibold text-slate-700 mb-1">Choose your free store URL <span className="text-red-500">*</span></label>
                  <input
                    id="store_slug" name="store_slug" type="text" required
                    value={storeSlug}
                    onChange={(event) => {
                      setSlugManuallyEdited(true);
                      setStoreSlug(normalizeSlug(event.target.value));
                    }}
                    className={inputClass("store_slug", "w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#0DB89B] focus:ring-2 focus:ring-[#0DB89B]/30")}
                    aria-invalid={fieldError("store_slug") ? "true" : "false"}
                    placeholder="rahim-electronics"
                  />
                  <p className="mt-1 text-xs text-slate-400">
                    Your free URL:{" "}
                    <code className="text-[#0DB89B]">
                      {state?.data?.store?.slug || previewSlug}.aftsoftandlimited.com
                    </code>
                  </p>
                  {slugStatus !== "idle" && (
                    <p className={`mt-1 text-xs ${slugStatus === "available" ? "text-emerald-600" : slugStatus === "taken" || slugStatus === "reserved" ? "text-red-500" : "text-slate-400"}`}>
                      {slugStatus === "checking" ? "Checking availability..." : slugStatus === "available" ? "This store URL is available." : slugStatus === "taken" ? "This store URL is already taken." : slugStatus === "reserved" ? "This URL is reserved. Choose another." : "Enter a valid store URL."}
                    </p>
                  )}
                  {state?.errors?.store_slug && (
                    <p className="mt-1 text-xs text-red-500">{state.errors.store_slug[0]}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="currency_code" className="block text-sm font-semibold text-slate-700 mb-1">Currency</label>
                  <select
                    id="currency_code" name="currency_code" defaultValue="BDT"
                    className={inputClass("currency_code", "w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#0DB89B] focus:ring-2 focus:ring-[#0DB89B]/30")}
                    aria-invalid={fieldError("currency_code") ? "true" : "false"}
                  >
                    <option value="BDT">BDT - Bangladeshi Taka</option>
                    <option value="USD">USD - US Dollar</option>
                    <option value="EUR">EUR - Euro</option>
                    <option value="GBP">GBP - British Pound</option>
                    <option value="INR">INR - Indian Rupee</option>
                  </select>
                  {fieldError("currency_code") && <p className="mt-1 text-xs font-medium text-red-600">{fieldError("currency_code")}</p>}
                </div>
                <div>
                  <label htmlFor="timezone" className="block text-sm font-semibold text-slate-700 mb-1">Timezone</label>
                  <select
                    id="timezone" name="timezone" defaultValue="Asia/Dhaka"
                    className={inputClass("timezone", "w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#0DB89B] focus:ring-2 focus:ring-[#0DB89B]/30")}
                    aria-invalid={fieldError("timezone") ? "true" : "false"}
                  >
                    <option value="Asia/Dhaka">Asia/Dhaka</option>
                    <option value="Asia/Kolkata">Asia/Kolkata</option>
                    <option value="UTC">UTC</option>
                    <option value="Asia/Shanghai">Asia/Shanghai</option>
                    <option value="Asia/Tokyo">Asia/Tokyo</option>
                    <option value="America/New_York">America/New_York</option>
                    <option value="Europe/London">Europe/London</option>
                  </select>
                  {fieldError("timezone") && <p className="mt-1 text-xs font-medium text-red-600">{fieldError("timezone")}</p>}
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

"use client";

import { ArrowRight, CheckCircle2, Loader2, ShieldCheck, Store, Check, Mail, Eye, EyeOff, Globe2, ShoppingBag, Package, ArrowUpRight } from "lucide-react";
import { useFormStatus } from "react-dom";
import { useActionState, useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./registration.module.css";
import { registerStoreOwner } from "./actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={styles.primary}
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
  const verificationPending = Boolean(data?.email_verification_required);
  const [resendState, setResendState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const resendVerification = async () => {
    if (!user.email || resendState === "sending") return;
    setResendState("sending");
    try {
      const response = await fetch("https://admin.onehaatbd.com/api/v1/email/verification-notification", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email: user.email }),
      });
      if (!response.ok) throw new Error("Resend failed");
      setResendState("sent");
    } catch {
      setResendState("error");
    }
  };

  if (verificationPending) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F4F6F5] px-4 pb-10 pt-28">
        <section aria-labelledby="verify-email-heading" className="w-full max-w-lg rounded-3xl border border-[#DFE6E2] bg-white p-6 text-center shadow-xl shadow-slate-200/40 sm:p-10">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EDF4EA] text-[#234E3B]"><Mail className="h-8 w-8" strokeWidth={1.5} /></div>
          <h1 id="verify-email-heading" className="mt-6 text-2xl font-extrabold tracking-tight text-[#183B2E] sm:text-3xl">Check your email to continue</h1>
          <p className="mt-3 text-sm leading-6 text-slate-500">Store created successfully. Please check your email to verify your account.</p>
          <p className="mt-5 text-sm leading-7 text-slate-600">We sent a verification link to <strong className="break-all text-[#234E3B]">{user.email || "your registered email address"}</strong>. Verify your email before logging in to the admin dashboard.</p>
          <button type="button" onClick={resendVerification} disabled={resendState === "sending" || resendState === "sent"} className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#D8E3DA] px-5 text-sm font-semibold text-[#234E3B] transition hover:bg-[#F3F7F1] disabled:opacity-60">
            {resendState === "sending" && <Loader2 className="h-4 w-4 animate-spin" />}
            {resendState === "sent" ? "Verification email requested" : resendState === "sending" ? "Sending..." : "Resend verification email"}
          </button>
          <p role="status" aria-live="polite" className="mt-3 text-xs text-slate-500">{resendState === "sent" ? "Please check your inbox and spam folder." : resendState === "error" ? "Could not resend the email. Please try again." : ""}</p>
        </section>
      </main>
    );
  }

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
              {verificationPending ? "Check your email to continue" : "Your Store Is Ready"}
            </h2>
            <p className="mt-3 text-base leading-[1.7] text-[#687991]">
              {message || "Your free store has been created successfully."}
            </p>
            {verificationPending && (
              <div className="mt-5 rounded-xl border border-blue-200 bg-blue-50 p-4 text-left text-sm text-blue-800">
                We sent a verification link to <strong>{user.email || "your registered email address"}</strong>. Verify your email before logging in to the admin dashboard.
                <button type="button" onClick={resendVerification} disabled={resendState !== "idle"} className="mt-3 block font-semibold text-blue-700 underline disabled:opacity-60">
                  {resendState === "sent" ? "Verification email requested" : resendState === "sending" ? "Sending..." : "Resend verification email"}
                </button>
              </div>
            )}
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
              {!verificationPending && <a
                href="https://onehaatbd.com/login"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#0DB89B] px-6 text-base font-semibold text-white transition-colors hover:bg-[#0AA98E]"
              >
                Login Now
              </a>}
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
  const [state, formAction] = useActionState(registerStoreOwner, null);
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [storeName, setStoreName] = useState("");
  const [storeSlug, setStoreSlug] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [currency, setCurrency] = useState("BDT");
  const [timezone, setTimezone] = useState("Asia/Dhaka");
  const [plans, setPlans] = useState<any[]>([]);
  const [plansLoading, setPlansLoading] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState("free-trial");
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);
  const [slugStatus, setSlugStatus] = useState<"idle" | "checking" | "available" | "taken" | "invalid" | "reserved">("idle");

  useEffect(() => {
    let mounted = true;
    fetch("https://admin.onehaatbd.com/api/v1/plans", { headers: { Accept: "application/json" } })
      .then((response) => response.json())
      .then((body) => { if (mounted) { setPlans(body?.data || []); if (body?.data?.length && !body.data.some((plan: any) => plan.slug === selectedPlan)) setSelectedPlan(body.data[0].slug); } })
      .catch(() => { if (mounted) setPlans([]); })
      .finally(() => { if (mounted) setPlansLoading(false); });
    return () => { mounted = false; };
  }, []);

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
    if (!state || state.success) return;
    const ownerFields = ["first_name", "last_name", "email", "phone", "password", "password_confirmation"];
    const firstError = Object.keys(state.errors || {})[0];
    if (firstError) {
      setStep(ownerFields.includes(firstError) ? 1 : 2);
      requestAnimationFrame(() => document.getElementById(firstError)?.focus());
    }
  }, [state]);
  const validateStep = (target: number) => {
    const fields = formRef.current?.querySelectorAll<HTMLInputElement>(`[data-step="${target}"] input, [data-step="${target}"] select`);
    const password = formRef.current?.querySelector<HTMLInputElement>("#password");
    const confirmation = formRef.current?.querySelector<HTMLInputElement>("#password_confirmation");
    confirmation?.setCustomValidity(password?.value !== confirmation.value ? "Passwords must match." : "");
    if (!fields) return false;
    for (const field of fields) {
      if (!field.checkValidity()) {
        setStep(target);
        requestAnimationFrame(() => field.reportValidity());
        return false;
      }
    }
    return true;
  };

  if (state?.success) {
    return <SuccessView data={state.data} message={state.message} />;
  }

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <aside className={styles.brand}>
          <div className={styles.brandTop}><span className={styles.brandIcon}><ShoppingBag size={20} /></span><span>AFT <span className={styles.brandLight}>COMMERCE</span></span><span className={styles.brandTag}>YOUR NEXT CHAPTER</span></div>
          <div className={styles.brandIntro}><span className={styles.eyebrow}>SMALL BEGINNINGS. BIG POSSIBILITIES.</span><h1>Built for your<br />next <span>big idea.</span></h1><p>Turn what you love into a business.<br />We?ll take care of the storefront.</p></div>
          <div className={styles.preview} aria-label="Illustration of your future storefront">
            <div className={styles.browser}><span /><span /><span /><div><Globe2 size={11} /> {previewSlug}.aftsoftandlimited.com</div></div>
            <div className={styles.shopHeader}><span>{storeName || "Your next big thing"}</span><ShoppingBag size={15} /></div>
            <div className={styles.shopHero}><span>THE EVERYDAY COLLECTION</span><strong>A little something.<br />Entirely yours.</strong><span className={styles.shopLink}>Explore the collection <ArrowUpRight size={12} /></span><div className={styles.heroBag}><ShoppingBag strokeWidth={1} /></div></div>
            <div className={styles.products}>{["Everyday essentials", "Made for you", "Something special"].map((name,i)=><div key={name}><div className={styles.productArt} data-tone={i}><Package strokeWidth={1} /></div><p>{name}</p><span>Discover more</span></div>)}</div>
            <div className={styles.previewNote}><span className={styles.liveDot} /> A preview of what?s possible</div>
          </div>
          <div className={styles.brandFoot}><div><CheckCircle2 size={15} /> Your own store URL</div><div><ShieldCheck size={15} /> Secure from day one</div></div>
        </aside>
        <div className={styles.formPanel}>
          <div className={styles.topline}><Link href="/" className={styles.mobileBrand}>AFT COMMERCE</Link><span>Already have an account? <Link href="/login">Log in <ArrowUpRight size={12} /></Link></span></div>
          <div className={styles.steps} aria-label={`Step ${step} of 2`}>
            {["Your details", "Store setup"].map((label, index) => <div key={label} className={styles.step} style={{ borderColor: step >= index + 1 ? "#0DB89B" : "#E2E8F0", color: step >= index + 1 ? "#098672" : "#94A3B8" }} aria-current={step === index + 1 ? "step" : undefined}><span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100">{step > index + 1 ? <Check className="h-3 w-3" /> : index + 1}</span>{label}</div>)}
          </div>
          <p className={styles.kicker}>LET?S BUILD SOMETHING GREAT</p>
          <h2 id="registration-heading" tabIndex={-1} className={styles.title}>{step === 1 ? "Create your account" : "Make your store yours"}</h2>
          <p className={styles.subtitle}>{step === 1 ? "A few details to get your business started." : "Choose your address and a plan to get started."}</p>
          <form className={styles.form} ref={formRef} action={formAction} noValidate onSubmit={(event) => {
            if (step === 1) {
              event.preventDefault();
              if (validateStep(1)) { setStep(2); requestAnimationFrame(() => document.getElementById("registration-heading")?.focus()); }
              return;
            }
            if (!validateStep(1) || !validateStep(2)) event.preventDefault();
          }}>
            <input type="hidden" name="plan_slug" value={selectedPlan} />
            {state?.message && Object.keys(errors).length > 0 && (
              <div role="alert" className="mb-4 rounded-xl border border-red-200 bg-red-50 p-4 text-left">
                <p className="text-sm font-bold text-red-700">Please review the highlighted fields.</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-red-600">
                  {Object.entries(errors).map(([name, messages]) => (
                    <li key={name}>{(messages as string[])[0]}</li>
                  ))}
                </ul>
              </div>
            )}
<fieldset data-step="1" hidden={step !== 1}>
  <legend className="sr-only">Owner account</legend>
            <div className="mb-4">
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="first_name" className="block text-sm font-semibold text-slate-700 mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    autoComplete="given-name" id="first_name" name="first_name" type="text" required
                    value={firstName} onChange={(event) => setFirstName(event.target.value)}
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
                    autoComplete="family-name" id="last_name" name="last_name" type="text" required
                    value={lastName} onChange={(event) => setLastName(event.target.value)}
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

            <div className="mb-4">

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    autoComplete="email" id="email" name="email" type="email" required
                    value={email} onChange={(event) => setEmail(event.target.value)}
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
                    autoComplete="tel" id="phone" name="phone" type="tel" required
                    value={phone} onChange={(event) => setPhone(event.target.value)}
                    className={inputClass("phone", "w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#0DB89B] focus:ring-2 focus:ring-[#0DB89B]/30")}
                    aria-invalid={fieldError("phone") ? "true" : "false"}
                    placeholder="01711223344"
                  />
                  {fieldError("phone") && <p className="mt-1 text-xs font-medium text-red-600">{fieldError("phone")}</p>}
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className={styles.passwordHeading}><span>Account security</span><button type="button" onClick={() => setShowPassword(!showPassword)} aria-pressed={showPassword}>{showPassword ? <EyeOff size={14} /> : <Eye size={14} />}{showPassword ? "Hide passwords" : "Show passwords"}</button></div>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="password" className="block text-sm font-semibold text-slate-700 mb-1">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="password" name="password" type={showPassword ? "text" : "password"} required minLength={8} autoComplete="new-password"
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
                    id="password_confirmation" name="password_confirmation" type={showPassword ? "text" : "password"} required minLength={8} autoComplete="new-password"
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

</fieldset>
<fieldset data-step="2" hidden={step !== 2}>
  <legend className="sr-only">Store details</legend>
            <div className="mb-4">
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="store_name" className="block text-sm font-semibold text-slate-700 mb-1">
                    Store Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    autoComplete="organization" id="store_name" name="store_name" type="text" required
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
                    id="currency_code" name="currency_code" value={currency} onChange={(event) => setCurrency(event.target.value)}
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
                    id="timezone" name="timezone" value={timezone} onChange={(event) => setTimezone(event.target.value)}
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

            <div className="mb-4">
              <div className="flex items-end justify-between gap-4">
                <div><h3 className="text-lg font-bold text-[#10245A]">Choose your plan</h3><p className="mt-1 text-sm text-slate-500">Start with the plan that fits your business. You can upgrade later.</p></div>
                <span className="hidden rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 sm:inline-flex">No payment required today</span>
              </div>
              {plansLoading ? <div className="mt-4 grid gap-3 sm:grid-cols-3">{[1,2,3].map((item) => <div key={item} className="h-14 animate-pulse rounded-xl bg-slate-100" />)}</div> : plans.length ? <div className="mt-3 grid gap-2">{plans.map((plan: any) => { const selected = selectedPlan === plan.slug; return <button type="button" key={plan.id} onClick={() => setSelectedPlan(plan.slug)} className={`relative grid grid-cols-[1fr_auto] items-center gap-x-3 rounded-xl border py-2.5 pl-3 pr-9 text-left transition-all ${selected ? "border-[#0DB89B] bg-[#F1FFFB] shadow-md" : "border-slate-200 bg-white hover:border-[#0DB89B]/50"}`} aria-pressed={selected}><span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full border">{selected && <Check className="h-3 w-3" />}</span><p className="text-sm font-bold text-[#10245A]">{plan.name}</p><p className="row-span-2 text-right text-sm font-extrabold text-[#0A987F]">{plan.is_free ? "Free" : `${Number(plan.price).toLocaleString()} ${plan.currency}`}<span className="text-xs font-medium text-slate-500">{plan.duration_days ? ` / ${plan.duration_days} days` : ""}</span></p><p className="mt-0.5 text-xs text-slate-500">{plan.product_limit ? `Up to ${plan.product_limit} products` : "Unlimited products"}</p></button>; })}</div> : <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">Plans are temporarily unavailable. Please try again in a moment.</div>}
              {fieldError("plan_slug") && <p className="mt-2 text-xs font-medium text-red-600">{fieldError("plan_slug")}</p>}
            </div>

</fieldset>

            {step === 1 ? <button type="submit" className={styles.primary}>Continue to store setup <ArrowRight className="h-4 w-4" /></button> : <div className="flex items-center gap-3"><button type="button" onClick={() => setStep(1)} className="h-12 rounded-lg border border-slate-200 px-5 text-sm font-semibold text-slate-600 hover:bg-slate-50">Back</button><div className="flex-1"><SubmitButton /></div></div>}
            {state?.message && !state.success && <p role="alert" className="mt-3 text-sm text-red-600">{state.message}</p>}
            <p className={styles.security}><ShieldCheck className="h-3.5 w-3.5" /> Your information is kept secure.</p>
          </form>
        </div>
      </div>
    </main>
  );
}

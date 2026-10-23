"use client";

import { ArrowRight, CheckCircle2, Loader2, ShieldCheck, Store, Check, Eye, EyeOff, Globe2, ShoppingBag, Package, ArrowUpRight } from "lucide-react";
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

export default function StoreRegisterPage() {
  const [state, formAction] = useActionState(registerStoreOwner, null);
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
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
          <div className={styles.topline}><Link href="/" className={styles.mobileBrand}>AFT COMMERCE</Link><span>Already have an account? <Link href="https://admin.aftsoftandlimited.com">Log in <ArrowUpRight size={12} /></Link></span></div>
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
              <div className={styles.passwordHeading}><span>Account security</span></div>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="password" className="block text-sm font-semibold text-slate-700 mb-1">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className={styles.passwordField}>
                  <input
                    id="password" name="password" type={showPassword ? "text" : "password"} required minLength={8} autoComplete="new-password"
                    className={inputClass("password", "w-full rounded-lg border border-slate-200 pl-4 pr-12 py-2.5 text-sm outline-none transition-colors focus:border-[#0DB89B] focus:ring-2 focus:ring-[#0DB89B]/30")}
                    aria-invalid={fieldError("password") ? "true" : "false"}
                    placeholder="Min 8 characters"
                  />
                    <button type="button" className={styles.passwordToggle} onClick={() => setShowPassword(visible => !visible)} aria-label={showPassword ? "Hide password" : "Show password"} aria-controls="password" aria-pressed={showPassword}>
                      {showPassword ? <EyeOff size={17} aria-hidden="true" /> : <Eye size={17} aria-hidden="true" />}
                    </button>
                  </div>
                  {state?.errors?.password && (
                    <p className="mt-1 text-xs text-red-500">{state.errors.password[0]}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="password_confirmation" className="block text-sm font-semibold text-slate-700 mb-1">
                    Confirm Password <span className="text-red-500">*</span>
                  </label>
                  <div className={styles.passwordField}>
                  <input
                    id="password_confirmation" name="password_confirmation" type={showConfirmation ? "text" : "password"} required minLength={8} autoComplete="new-password"
                    className={inputClass("password_confirmation", "w-full rounded-lg border border-slate-200 pl-4 pr-12 py-2.5 text-sm outline-none transition-colors focus:border-[#0DB89B] focus:ring-2 focus:ring-[#0DB89B]/30")}
                    aria-invalid={fieldError("password_confirmation") ? "true" : "false"}
                    placeholder="Repeat password"
                  />
                    <button type="button" className={styles.passwordToggle} onClick={() => setShowConfirmation(visible => !visible)} aria-label={showConfirmation ? "Hide confirm password" : "Show confirm password"} aria-controls="password_confirmation" aria-pressed={showConfirmation}>
                      {showConfirmation ? <EyeOff size={17} aria-hidden="true" /> : <Eye size={17} aria-hidden="true" />}
                    </button>
                  </div>
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
                      {previewSlug}.aftsoftandlimited.com
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

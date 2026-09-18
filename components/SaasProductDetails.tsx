import {
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle2,
  ExternalLink,
  Layers3,
  LifeBuoy,
  Lightbulb,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { type SaasProduct } from "../lib/saas-products";

import { cn } from "../lib/utils";

import { CheckPrinterPreview } from "./CheckPrinterPreview";

const featureIcons = [
  Layers3,
  MonitorSmartphone,
  Zap,
  BarChart3,
  ShieldCheck,
  Lightbulb,
  Sparkles,
  LifeBuoy,
];

function ProductImage({
  product,
  className = "",
}: {
  product: SaasProduct;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[22px] px-5 sm:p-7",
        product.imageAreaClass,
        className,
      )}
    >
      <div className="relative h-[250px] w-full sm:h-[340px] lg:h-[420px]">
        {product.heroImage ? (
          <Image
            className="object-contain"
            src={product.heroImage}
            alt={product.imageAlt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 560px"
          />
        ) : (
          <CheckPrinterPreview />
        )}
      </div>
    </div>
  );
}

function ProductButtons({
  product,
  dark = false,
}: {
  product: SaasProduct;
  dark?: boolean;
}) {
  return (
    <div className="flex flex-col gap-3 min-[520px]:flex-row">
      <Button className="w-full px-6 min-[520px]:w-auto" href={product.registerUrl ?? "#contact"}>
        Get Started <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Button>
      {product.demoUrl ? (
        <Button
          variant="outline"
          className={cn(
            "w-full px-6 min-[520px]:w-auto",
            dark &&
              "border-white/40 from-white/10 to-blue-300/15 bg-transparent text-white hover:border-white/70 hover:from-white/20 hover:to-blue-300/25",
          )}
          href={product.demoUrl}
        >
          Live Demo <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </Button>
      ) : null}
    </div>
  );
}

export function SaasProductDetails({ product }: { product: SaasProduct }) {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#F7FBFF_0%,#FFFFFF_50%,#F3FFFB_100%)] pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-20 lg:pt-36">
        <div
          className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#18C9A3]/10 blur-[120px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#2783F3]/10 blur-[120px]"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-[18px] sm:px-6 lg:grid-cols-2 lg:gap-12">
          <div>
            <span
              className={cn(
                "inline-flex h-8 items-center rounded-full px-4 text-sm font-bold uppercase tracking-[1.8px]",
                product.badgeClass,
              )}
            >
              {product.category}
            </span>
            <h1 className="mt-6 max-w-2xl text-[34px] font-extrabold leading-[1.08] tracking-[-1px] text-[#10245A] sm:text-[44px] lg:text-[54px]">
              {product.shortTitle}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-[1.7] text-[#687991]">
              {product.description}
            </p>
            <div className="mt-8">
              <ProductButtons product={product} />
            </div>
          </div>

          <ProductImage product={product} />
        </div>
      </section>

      <section className="border-y border-[#10245A]/[0.06] bg-white py-6">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 px-[18px] sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {product.quickBenefits.map((item) => (
            <div
              className="flex items-start gap-3 rounded-2xl bg-[#F8FBFF] p-4"
              key={item.title}
            >
              <span
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white"
                style={{ backgroundColor: product.accent }}
              >
                <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-base font-bold text-[#10245A]">
                  {item.title}
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-[#687991]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-[18px] sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p
              className="text-[11px] font-bold uppercase tracking-[4px]"
              style={{ color: product.accent }}
            >
              Why Choose
            </p>
            <h2 className="mt-4 text-[30px] font-extrabold leading-tight tracking-[-0.8px] text-[#10245A] sm:text-[40px]">
              Why Choose {product.name}?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-[1.7] text-[#687991]">
              {product.highlightText}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {product.whyChoose.map((item) => (
                <div
                  className="rounded-2xl border border-[#10245A]/[0.07] bg-white p-5 shadow-[0_6px_20px_rgba(16,36,90,0.035)]"
                  key={item.title}
                >
                  <h3 className="text-base font-bold text-[#10245A]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-[#687991]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-[22px] p-8 text-white shadow-[0_20px_45px_rgba(16,36,90,0.12)]"
            style={{
              background: `linear-gradient(135deg, #10245A 0%, ${product.accent} 120%)`,
            }}
          >
            <Sparkles className="h-10 w-10 text-white/85" aria-hidden="true" />
            <h3 className="mt-8 text-[32px] font-extrabold leading-tight tracking-[-0.8px]">
              {product.highlightTitle}
            </h3>
            <p className="mt-4 text-base leading-[1.7] text-white/80">
              {product.highlightText}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7FBFF] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-[18px] sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p
              className="text-[11px] font-bold uppercase tracking-[4px]"
              style={{ color: product.accent }}
            >
              Powerful Features
            </p>
            <h2 className="mt-4 text-[30px] font-extrabold leading-tight tracking-[-0.8px] text-[#10245A] sm:text-[40px]">
              Everything You Need to Work Faster
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {product.features.map((feature, index) => {
              const Icon = featureIcons[index % featureIcons.length];
              return (
                <div
                  className="rounded-2xl border border-[#10245A]/[0.07] bg-white p-5 shadow-[0_6px_20px_rgba(16,36,90,0.035)] transition-transform duration-300 hover:-translate-y-0.5"
                  key={feature}
                >
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-white"
                    style={{ backgroundColor: product.accent }}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-[#10245A]">
                    {feature}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-[#687991]">
                    Designed to keep your daily work clear, organized, and
                    easier to manage.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-[18px] sm:px-6 lg:grid-cols-2 lg:items-center">
          <ProductImage
            product={product}
            className="shadow-[0_18px_45px_rgba(16,36,90,0.08)]"
          />
          <div>
            <p
              className="text-[11px] font-bold uppercase tracking-[4px]"
              style={{ color: product.accent }}
            >
              Product Showcase
            </p>
            <h2 className="mt-4 text-[30px] font-extrabold leading-tight tracking-[-0.8px] text-[#10245A] sm:text-[40px]">
              {product.showcaseTitle}
            </h2>
            <p className="mt-4 text-base leading-[1.7] text-[#687991]">
              {product.showcaseText}
            </p>
            <ul className="mt-7 space-y-3">
              {product.showcaseChecks.map((item) => (
                <li
                  className="flex items-center gap-3 text-base font-medium text-[#53657D]"
                  key={item}
                >
                  <span
                    className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white"
                    style={{ backgroundColor: product.accent }}
                  >
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#FBFDFF] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-[18px] sm:px-6">
          <div className="max-w-3xl">
            <p
              className="text-[11px] font-bold uppercase tracking-[4px]"
              style={{ color: product.accent }}
            >
              Benefits
            </p>
            <h2 className="mt-4 text-[30px] font-extrabold leading-tight tracking-[-0.8px] text-[#10245A] sm:text-[40px]">
              Built for Real Business Needs
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {product.useCases.map((item) => (
              <div
                className="rounded-2xl border border-[#10245A]/[0.07] bg-white p-6 shadow-[0_6px_20px_rgba(16,36,90,0.035)]"
                key={item.title}
              >
                <h3 className="text-lg font-bold text-[#10245A]">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#687991]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-[18px] sm:px-6">
          <div className="rounded-[22px] border border-[#10245A]/[0.07] bg-[#F7FBFF] p-6 sm:p-8 lg:p-10">
            <p
              className="text-[11px] font-bold uppercase tracking-[4px]"
              style={{ color: product.accent }}
            >
              {product.workflowTitle}
            </p>
            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {product.workflowItems.map((item, index) => (
                <div
                  className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-[0_6px_20px_rgba(16,36,90,0.035)]"
                  key={item}
                >
                  <span
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-base font-bold text-white"
                    style={{ backgroundColor: product.accent }}
                  >
                    {index + 1}
                  </span>
                  <span className="text-base font-bold text-[#10245A]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-[18px] sm:px-6">
          <div className="rounded-[22px] bg-[linear-gradient(135deg,#0E2455,#102F69)] p-8 text-white sm:p-12 lg:p-14">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-[30px] font-extrabold leading-tight tracking-[-0.8px] sm:text-[40px]">
                  Ready to Get Started with {product.name}?
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-[1.7] text-white/75 sm:text-base">
                  Talk with AFT SOFT AND LIMITED about your workflow, goals, and
                  the right product setup for your business.
                </p>
              </div>
              <ProductButtons product={product} dark />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

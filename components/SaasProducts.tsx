import {
  ArrowRight,
  Check,
  ExternalLink,
  Headphones,
  RefreshCw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { SectionHeader } from "./SectionHeader";
import { CheckPrinterPreview } from "./CheckPrinterPreview";
import { saasProductList, type SaasProduct } from "../lib/saas-products";
import { cn } from "../lib/utils";

const trustItems = [
  { label: "Trusted by Businesses", Icon: Sparkles },
  { label: "Secure & Reliable", Icon: ShieldCheck },
  { label: "Regular Updates", Icon: RefreshCw },
  { label: "Dedicated Support", Icon: Headphones },
];

function ProductCard({ product }: { product: SaasProduct }) {
  return (
    <article className="surface-card group flex overflow-hidden">
      <div className="flex min-h-full w-full flex-col">
        <div className="border-b border-slate-100 bg-slate-50 px-4 pt-4">
          <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden">
            {product.heroImage ? (
              <Image
                className="object-contain transition-transform duration-300 ease-out group-hover:scale-[1.015]"
                src={product.heroImage}
                alt={product.imageAlt}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1280px) 50vw, 584px"
              />
            ) : (
              <CheckPrinterPreview />
            )}
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6 lg:px-6 lg:pb-6 lg:pt-6 xl:px-7">
          <span
            className={cn(
              "inline-flex h-[26px] w-fit items-center rounded-full px-3 text-[10px] font-bold uppercase tracking-[0.8px] sm:text-[11px]",
              product.badgeClass,
            )}
          >
            {product.category}
          </span>

          <h3 className="mt-4 text-2xl font-bold leading-[1.15] tracking-[-0.5px] text-[#10245A] sm:text-[26px] lg:text-[25px] xl:text-[27px]">
            {product.name}
          </h3>
          <p className="mt-1.5 text-sm font-semibold text-[#203764] sm:text-[15px]">
            {product.subtitle}
          </p>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            {product.description}
          </p>

          <ul className="mt-5 space-y-2">
            {product.homepageFeatures.map((feature) => (
              <li
                className="flex items-center gap-[9px] text-[13px] text-[#53657D] sm:text-[13.5px]"
                key={feature}
              >
                <span
                  className="inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full text-white sm:h-[19px] sm:w-[19px]"
                  style={{ backgroundColor: "#047857" }}
                >
                  <Check className="h-3 w-3" aria-hidden="true" />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
            <Button href={product.productUrl}>
              View Details <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" href={product.demoUrl ?? "#contact"}>
              Live Demo <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}

export function SaasProducts() {
  return (
    <section
      id="products"
      className="section-space bg-slate-50"
      aria-labelledby="saas-products-title"
    >
      <div className="site-container">
        <SectionHeader
          id="saas-products-title"
          label="Our SaaS Products"
          title={
            <>
              Software Built for{" "}
              <span className="text-emerald-700">Real Business Growth</span>
            </>
          }
        >
          Powerful and easy-to-use software products designed to simplify
          operations, automate workflows, and help businesses grow faster.
        </SectionHeader>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {saasProductList.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <div className="mx-auto mt-[45px] grid max-w-4xl grid-cols-2 gap-3 rounded-2xl border border-[#10245A]/[0.06] bg-white/60 p-4 text-[#203764] shadow-[0_8px_24px_rgba(16,36,90,0.035)] backdrop-blur-sm md:grid-cols-4 md:gap-0 md:divide-x md:divide-[#10245A]/10">
          {trustItems.map(({ label, Icon }) => (
            <div
              className="flex items-center justify-center gap-2 px-2 py-2 text-center text-xs font-semibold"
              key={label}
            >
              <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

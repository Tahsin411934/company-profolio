import { ArrowRight, Check, ExternalLink, Headphones, RefreshCw, ShieldCheck, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { type CSSProperties } from "react";
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
    <article className="group flex overflow-hidden rounded-[18px] border border-[rgba(15,36,88,0.08)] bg-white shadow-[0_8px_30px_rgba(16,36,90,0.055)] transition-all duration-300 ease-out hover:-translate-y-[5px] hover:border-[rgba(15,36,88,0.14)] hover:shadow-[0_20px_45px_rgba(16,36,90,0.10)] sm:rounded-[22px]">
      <div className="flex min-h-full w-full flex-col">
        <div className={cn("px-4 pt-4 sm:px-6 sm:pt-6", product.imageAreaClass)}>
          <div className="relative h-[205px] w-full overflow-hidden sm:h-[255px] lg:h-[250px] xl:h-[270px]">
            {product.heroImage ? (
              <Image
                className="object-contain transition-transform duration-300 ease-out group-hover:scale-[1.015]"
                src={product.heroImage}
                alt={product.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 410px"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center rounded-2xl border border-dashed border-[#F38A17]/30 bg-white/35 text-center text-sm font-semibold text-[#CC6E0B]">
                Preview image coming soon
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6 lg:px-6 lg:pb-6 lg:pt-6 xl:px-7">
          <span className={cn("inline-flex h-[26px] w-fit items-center rounded-full px-3 text-[10px] font-bold uppercase tracking-[0.8px] sm:text-[11px]", product.badgeClass)}>
            {product.category}
          </span>

          <h3 className="mt-4 text-2xl font-bold leading-[1.15] tracking-[-0.5px] text-[#10245A] sm:text-[26px] lg:text-[25px] xl:text-[27px]">
            {product.name}
          </h3>
          <p className="mt-1.5 text-sm font-semibold text-[#203764] sm:text-[15px]">
            {product.subtitle}
          </p>
          <p className="mt-3 text-[13.5px] leading-[1.55] text-[#687991] sm:text-[15px] sm:leading-[1.6]">
            {product.description}
          </p>

          <ul className="mt-5 space-y-2">
            {product.homepageFeatures.map((feature) => (
              <li className="flex items-center gap-[9px] text-[13px] text-[#53657D] sm:text-[13.5px]" key={feature}>
                <span
                  className="inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full text-white sm:h-[19px] sm:w-[19px]"
                  style={{ backgroundColor: product.accent }}
                >
                  <Check className="h-3 w-3" aria-hidden="true" />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-col gap-[9px] pt-[26px] min-[520px]:flex-row min-[520px]:gap-3">
            <Link
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-[10px] px-4 text-sm font-bold text-white transition-colors duration-300 hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:h-[46px] lg:px-3 xl:px-5"
              href={product.productUrl}
              style={{
                backgroundColor: product.accent,
                "--tw-ring-color": product.accent,
              } as CSSProperties}
            >
              View Details
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
            <Link
              className={cn("inline-flex h-11 w-full items-center justify-center gap-2 rounded-[10px] border px-4 text-sm font-bold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:h-[46px] lg:px-3 xl:px-5", product.outlineClass)}
              href={product.demoUrl ?? "#contact"}
            >
              Live Demo
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </Link>
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
      className="relative overflow-hidden bg-[linear-gradient(180deg,#F7FBFF_0%,#FBFDFF_50%,#F7FAFC_100%)] py-[65px] sm:py-20 lg:pb-[110px] lg:pt-[100px]"
      aria-labelledby="saas-products-title"
    >
      <div className="pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-[#18C9A3]/[0.08] blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-16 bottom-20 h-72 w-72 rounded-full bg-[#2783F3]/[0.08] blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none absolute right-8 top-24 grid grid-cols-6 gap-2 opacity-25 sm:right-16" aria-hidden="true">
        {Array.from({ length: 30 }).map((_, index) => (
          <span className="h-1 w-1 rounded-full bg-[#62AFFF]" key={index} />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mx-auto mb-4 block h-0.5 w-10 rounded-full bg-[#18C9A3]" />
          <p className="text-[11px] font-bold uppercase tracking-[4px] text-[#16BFA5]">
            Our SaaS Products
          </p>
          <h2
            id="saas-products-title"
            className="mx-auto mt-4 max-w-[760px] text-[32px] font-extrabold leading-[1.15] tracking-[-1px] text-[#10245A] sm:text-[40px] lg:text-[46px] lg:leading-[1.08] lg:tracking-[-1.5px]"
          >
            Software Built for{" "}
            <span className="text-[#14BFA4]">Real Business Growth</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[720px] text-[15px] leading-[1.7] text-[#687991] sm:text-base">
            Powerful and easy-to-use software products designed to simplify
            operations, automate workflows, and help businesses grow faster.
          </p>
        </div>

        <div className="mt-[55px] grid grid-cols-1 gap-[18px] md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-5 xl:gap-6">
          {saasProductList.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <div className="mx-auto mt-[45px] grid max-w-4xl grid-cols-2 gap-3 rounded-2xl border border-[#10245A]/[0.06] bg-white/60 p-4 text-[#203764] shadow-[0_8px_24px_rgba(16,36,90,0.035)] backdrop-blur-sm md:grid-cols-4 md:gap-0 md:divide-x md:divide-[#10245A]/10">
          {trustItems.map(({ label, Icon }) => (
            <div className="flex items-center justify-center gap-2 px-2 py-2 text-center text-xs font-semibold" key={label}>
              <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

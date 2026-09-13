import { ArrowRight, Check, ExternalLink, Headphones, RefreshCw, ShieldCheck, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "../lib/utils";

type Product = {
  id: string;
  category: string;
  name: string;
  subtitle: string;
  description: string;
  image: string | null;
  imageAlt: string;
  features: string[];
  accent: string;
  imageAreaClass: string;
  badgeClass: string;
  buttonClass: string;
  outlineClass: string;
  productUrl: string;
  demoUrl: string | null;
};

const products: Product[] = [
  {
    id: "ecommerce",
    category: "E-COMMERCE",
    name: "E-commerce Solution",
    subtitle: "All-in-One E-commerce Platform",
    description:
      "Launch, manage, and grow your online business from one powerful and easy-to-use platform.",
    image: "/porducts/ecommerce.png",
    imageAlt: "E-commerce Solution software preview",
    features: [
      "Product & Inventory Management",
      "Order & Customer Management",
      "Payment Integration",
      "Modern Responsive Storefront",
    ],
    accent: "#0DB89B",
    imageAreaClass: "bg-[linear-gradient(135deg,#EDFFFA_0%,#F7FFFC_100%)]",
    badgeClass: "bg-[#DDF9F1] text-[#0A987F]",
    buttonClass: "bg-[#0DB89B] hover:bg-[#0AA98E] focus-visible:ring-[#0DB89B]",
    outlineClass: "border-[#0DB89B] text-[#0DB89B] hover:bg-[#E9FFFA]",
    productUrl: "#contact",
    demoUrl: null,
  },
  {
    id: "hrm",
    category: "HR & PAYROLL",
    name: "AFT HRM",
    subtitle: "Complete Human Resource Management Solution",
    description:
      "Manage employees, attendance, leave, payroll, performance and HR operations from one centralized platform.",
    image: "/porducts/hrm.png",
    imageAlt: "AFT HRM dashboard software preview",
    features: [
      "Employee Management",
      "Attendance & Leave",
      "Payroll & Salary Management",
      "KPI & Performance Tracking",
    ],
    accent: "#2783F3",
    imageAreaClass: "bg-[linear-gradient(135deg,#EEF7FF_0%,#F8FBFF_100%)]",
    badgeClass: "bg-[#E2F0FF] text-[#1D6ED2]",
    buttonClass: "bg-[#2783F3] hover:bg-[#1E73DE] focus-visible:ring-[#2783F3]",
    outlineClass: "border-[#2783F3] text-[#2783F3] hover:bg-[#EEF7FF]",
    productUrl: "#contact",
    demoUrl: null,
  },
  {
    id: "social-media-manager",
    category: "SOCIAL MEDIA",
    name: "Social Media Manager",
    subtitle: "All-in-One Social Media Management Platform",
    description:
      "Plan, schedule, publish and manage your social media presence from one powerful dashboard.",
    image: "/porducts/social-media-manager.png",
    imageAlt: "Social Media Manager software preview",
    features: [
      "Multi-Platform Management",
      "Post Scheduling",
      "Analytics & Reports",
      "Team Collaboration",
    ],
    accent: "#B42CC4",
    imageAreaClass: "bg-[linear-gradient(135deg,#FFF1FC_0%,#FAF5FF_100%)]",
    badgeClass: "bg-[#F8E5FB] text-[#9825A6]",
    buttonClass: "bg-[#B42CC4] hover:bg-[#9F23AF] focus-visible:ring-[#B42CC4]",
    outlineClass: "border-[#B42CC4] text-[#B42CC4] hover:bg-[#FFF1FC]",
    productUrl: "#contact",
    demoUrl: null,
  },
  {
    id: "bank-check-printer",
    category: "FINANCE & UTILITIES",
    name: "Bank Check Printer",
    subtitle: "Business Check Printing Software",
    description:
      "A streamlined business utility for preparing and printing checks using configurable templates and printer-friendly layouts.",
    image: null,
    imageAlt: "Bank Check Printer software preview",
    features: [
      "Multiple Template Support",
      "Custom Print Layouts",
      "Batch Printing",
      "Easy-to-Use Interface",
    ],
    accent: "#F38A17",
    imageAreaClass: "bg-[linear-gradient(135deg,#FFF7EC_0%,#FFFCF7_100%)]",
    badgeClass: "bg-[#FFF0DA] text-[#CC6E0B]",
    buttonClass: "bg-[#F38A17] hover:bg-[#DA780F] focus-visible:ring-[#F38A17]",
    outlineClass: "border-[#F38A17] text-[#F38A17] hover:bg-[#FFF7EC]",
    productUrl: "#contact",
    demoUrl: null,
  },
];

const trustItems = [
  { label: "Trusted by Businesses", Icon: Sparkles },
  { label: "Secure & Reliable", Icon: ShieldCheck },
  { label: "Regular Updates", Icon: RefreshCw },
  { label: "Dedicated Support", Icon: Headphones },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex overflow-hidden rounded-[18px] border border-[rgba(15,36,88,0.08)] bg-white shadow-[0_8px_30px_rgba(16,36,90,0.055)] transition-all duration-300 ease-out hover:-translate-y-[5px] hover:border-[rgba(15,36,88,0.14)] hover:shadow-[0_20px_45px_rgba(16,36,90,0.10)] sm:rounded-[22px]">
      <div className="flex min-h-full w-full flex-col">
        <div className={cn("px-4 pt-4 sm:px-6 sm:pt-6", product.imageAreaClass)}>
          <div className="relative h-[205px] w-full overflow-hidden sm:h-[255px] lg:h-[310px]">
            {product.image ? (
              <Image
                className="object-contain transition-transform duration-300 ease-out group-hover:scale-[1.015]"
                src={product.image}
                alt={product.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center rounded-2xl border border-dashed border-[#F38A17]/30 bg-white/35 text-center text-sm font-semibold text-[#CC6E0B]">
                Preview image coming soon
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6 lg:px-[30px] lg:pb-[30px] lg:pt-7">
          <span className={cn("inline-flex h-[26px] w-fit items-center rounded-full px-3 text-[10px] font-bold uppercase tracking-[0.8px] sm:text-[11px]", product.badgeClass)}>
            {product.category}
          </span>

          <h3 className="mt-4 text-2xl font-bold leading-[1.15] tracking-[-0.5px] text-[#10245A] sm:text-[26px] lg:text-[28px]">
            {product.name}
          </h3>
          <p className="mt-1.5 text-sm font-semibold text-[#203764] sm:text-[15px]">
            {product.subtitle}
          </p>
          <p className="mt-3 text-[13.5px] leading-[1.55] text-[#687991] sm:text-[15px] sm:leading-[1.6]">
            {product.description}
          </p>

          <ul className="mt-5 space-y-2">
            {product.features.map((feature) => (
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
              className={cn("inline-flex h-11 w-full items-center justify-center gap-2 rounded-[10px] px-5 text-sm font-bold text-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:h-[46px]", product.buttonClass)}
              href={product.productUrl}
            >
              View Product
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
            {product.demoUrl ? (
              <Link
                className={cn("inline-flex h-11 w-full items-center justify-center gap-2 rounded-[10px] border px-5 text-sm font-bold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:h-[46px]", product.outlineClass)}
                href={product.demoUrl}
              >
                Live Demo
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

export function SaasProducts() {
  return (
    <section
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

        <div className="mt-[55px] grid grid-cols-1 gap-[18px] md:grid-cols-2 md:gap-5 lg:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
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

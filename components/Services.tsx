import {
  ArrowRight,
  Check,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "../lib/utils";

type Service = {
  number: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  imageScale: number;
  imageOffsetX?: number;
  imageOffsetY?: number;
  cardClass: string;
  borderClass: string;
  hoverBorderClass: string;
  accentClass: string;
  badgeClass: string;
  arrowClass: string;
};

const services: Service[] = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Build fast, secure, scalable, and high-performance websites tailored to your business goals.",
    features: [
      "Custom Website Development",
      "E-commerce Solutions",
      "CMS Development",
      "Ongoing Support & Maintenance",
    ],
    image: "/services/web-development.png",
    imageScale: 1,
    cardClass: "bg-[linear-gradient(135deg,#F3FFFB_0%,#FBFFFD_100%)]",
    borderClass: "border-[#C9EFE4]",
    hoverBorderClass: "hover:border-[#18C99A]",
    accentClass: "bg-[#18C99A]",
    badgeClass: "bg-[#DDF9F0] text-[#10A977]",
    arrowClass: "bg-[#DFF9F0] text-[#10AF78] group-hover:bg-[#18C99A]",
  },
  {
    number: "02",
    title: "Mobile App Development",
    description:
      "Create modern and user-friendly mobile applications that deliver seamless experiences across Android and iOS.",
    features: [
      "Android & iOS Development",
      "Cross-Platform Solutions",
      "UI/UX Focused Design",
      "App Maintenance & Support",
    ],
    image: "/services/mobile-development.png",
    imageScale: 0.94,
    cardClass: "bg-[linear-gradient(135deg,#F2FAFF_0%,#FBFDFF_100%)]",
    borderClass: "border-[#C9E6F8]",
    hoverBorderClass: "hover:border-[#3188F4]",
    accentClass: "bg-[#3188F4]",
    badgeClass: "bg-[#E0F1FF] text-[#2676DD]",
    arrowClass: "bg-[#E2F1FF] text-[#247BE8] group-hover:bg-[#3188F4]",
  },
  {
    number: "03",
    title: "Custom Software Solutions",
    description:
      "Develop tailored software solutions that automate workflows, improve efficiency, and solve complex business challenges.",
    features: [
      "Business Process Automation",
      "Enterprise Software",
      "API Integration",
      "Scalable & Secure Solutions",
    ],
    image: "/services/custom-software.png",
    imageScale: 1,
    cardClass: "bg-[linear-gradient(135deg,#F7F5FF_0%,#FCFBFF_100%)]",
    borderClass: "border-[#DDD8FF]",
    hoverBorderClass: "hover:border-[#6265F3]",
    accentClass: "bg-[#6265F3]",
    badgeClass: "bg-[#ECEAFF] text-[#5455E7]",
    arrowClass: "bg-[#ECEAFF] text-[#5455E7] group-hover:bg-[#6265F3]",
  },
  {
    number: "04",
    title: "UI/UX Design",
    description:
      "Design clean, intuitive, and engaging digital experiences focused on both user needs and business goals.",
    features: [
      "User Research & Strategy",
      "Wireframing & Prototyping",
      "Modern UI Design",
      "Usability Testing",
    ],
    image: "/services/ui-ux-design.png",
    imageScale: 0.98,
    cardClass: "bg-[linear-gradient(135deg,#FFF8EE_0%,#FFFCF8_100%)]",
    borderClass: "border-[#F4DFC0]",
    hoverBorderClass: "hover:border-[#F3941E]",
    accentClass: "bg-[#F3941E]",
    badgeClass: "bg-[#FFF0D9] text-[#E47D00]",
    arrowClass: "bg-[#FFF0D9] text-[#E47D00] group-hover:bg-[#F3941E]",
  },
  {
    number: "05",
    title: "Digital Marketing",
    description:
      "Grow your digital presence with data-driven strategies designed to reach the right audience and generate measurable results.",
    features: [
      "SEO (Search Engine Optimization)",
      "Social Media Marketing",
      "Paid Advertising (Google & Meta Ads)",
      "Content Strategy & Branding",
    ],
    image: "/services/digital-marketing.png",
    imageScale: 1,
    cardClass: "bg-[linear-gradient(135deg,#F1FFF7_0%,#FBFFFC_100%)]",
    borderClass: "border-[#CAEFDA]",
    hoverBorderClass: "hover:border-[#13C57D]",
    accentClass: "bg-[#13C57D]",
    badgeClass: "bg-[#DDF9EA] text-[#0EAB6B]",
    arrowClass: "bg-[#DDF9EA] text-[#0EAB6B] group-hover:bg-[#13C57D]",
  },
  {
    number: "06",
    title: "IT Consultation",
    description:
      "Get practical technology guidance to choose the right architecture, tools, platforms, and digital strategy for your business.",
    features: [
      "Technology Advisory",
      "Infrastructure Planning",
      "Cloud Solutions",
      "Security & Performance Optimization",
    ],
    image: "/services/it-consultation.png",
    imageScale: 0.95,
    cardClass: "bg-[linear-gradient(135deg,#F2FAFF_0%,#FAFDFF_100%)]",
    borderClass: "border-[#C9E5F8]",
    hoverBorderClass: "hover:border-[#2E80EF]",
    accentClass: "bg-[#2E80EF]",
    badgeClass: "bg-[#E1F1FF] text-[#2677DF]",
    arrowClass: "bg-[#E1F1FF] text-[#2677DF] group-hover:bg-[#2E80EF]",
  },
];

function ServiceVisual({ service }: { service: Service }) {
  return (
    <div className="absolute right-3 top-3 z-[1] flex h-16 w-[70px] items-center justify-center bg-transparent transition-transform duration-300 ease-out group-hover:-translate-y-[3px] group-hover:scale-[1.02] min-[480px]:right-4 min-[480px]:top-4 min-[480px]:h-[98px] min-[480px]:w-[105px] sm:right-[18px] sm:top-[18px] sm:h-28 sm:w-[120px] lg:h-[125px] lg:w-[135px]">
      <Image
        className="h-full w-full object-contain"
        src={service.image}
        alt={`${service.title} illustration`}
        width={270}
        height={250}
        sizes="(max-width: 480px) 70px, (max-width: 640px) 105px, (max-width: 1024px) 120px, 135px"
        style={{
          transform: `translate(${service.imageOffsetX ?? 0}px, ${
            service.imageOffsetY ?? 0
          }px) scale(${service.imageScale})`,
        }}
      />
    </div>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <article
      className={cn(
        "group relative flex min-h-0 flex-col overflow-hidden rounded-2xl border p-3 shadow-[0_6px_22px_rgba(16,36,90,0.035)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(16,36,90,0.08)] min-[480px]:p-[22px] sm:min-h-[450px] sm:rounded-[18px] sm:px-7 sm:pb-6 sm:pt-7 lg:min-h-[450px]",
        service.cardClass,
        service.borderClass,
        service.hoverBorderClass,
      )}
    >
      <span
        className={cn(
          "inline-flex h-8 w-8 items-center justify-center rounded-[9px] text-xs font-bold min-[480px]:h-10 min-[480px]:w-10 min-[480px]:text-[15px]",
          service.badgeClass,
        )}
      >
        {service.number}
      </span>
      <ServiceVisual service={service} />

      <h3 className="mt-8 max-w-[7.5rem] text-[15px] font-bold leading-[1.18] tracking-[-0.3px] text-[#10245A] min-[480px]:mt-10 min-[480px]:max-w-[12rem] min-[480px]:text-xl sm:mt-11">
        {service.title}
      </h3>

      <p className="mt-3 text-xs leading-[1.5] text-[#687991] min-[480px]:mt-3.5 min-[480px]:text-sm min-[480px]:leading-[1.55]">
        {service.description}
      </p>

      <ul className="mt-4 space-y-2 min-[480px]:mt-5">
        {service.features.map((feature) => (
          <li className="flex items-center gap-2 text-[11px] font-normal leading-snug text-[#66758B] min-[480px]:gap-2.5 min-[480px]:text-[13px]" key={feature}>
            <span
              className={cn(
                "inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-white min-[480px]:h-5 min-[480px]:w-5",
                service.accentClass,
              )}
            >
              <Check className="h-3 w-3 min-[480px]:h-3.5 min-[480px]:w-3.5" aria-hidden="true" />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center justify-between gap-3 pt-5 min-[480px]:gap-4 min-[480px]:pt-7">
        <Link
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#10245A] transition-colors duration-300 hover:text-[#14BFA4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400 min-[480px]:gap-2 min-[480px]:text-sm"
          href="#contact"
        >
          Learn More
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 min-[480px]:h-4 min-[480px]:w-4" aria-hidden="true" />
        </Link>
        <Link
          className={cn(
            "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400 min-[480px]:h-[42px] min-[480px]:w-[42px]",
            service.arrowClass,
          )}
          href="#contact"
          aria-label={`Learn more about ${service.title}`}
        >
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 min-[480px]:h-5 min-[480px]:w-5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#fbfdff_50%,#ffffff_100%)] py-[66px] sm:py-[84px] lg:pb-[110px] lg:pt-[90px]"
      aria-labelledby="services-title"
    >
      <div className="pointer-events-none absolute right-[8%] top-20 h-52 w-52 rounded-full bg-cyan-300/10 blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-20 left-[5%] h-56 w-56 rounded-full bg-emerald-300/10 blur-[130px]" aria-hidden="true" />
      <div className="pointer-events-none absolute left-[46%] top-1/2 h-48 w-48 rounded-full bg-blue-300/10 blur-[125px]" aria-hidden="true" />
      <div className="pointer-events-none absolute right-8 top-24 grid grid-cols-6 gap-2 opacity-30 sm:right-14 lg:right-20" aria-hidden="true">
        {Array.from({ length: 30 }).map((_, index) => (
          <span className="h-0.5 w-0.5 rounded-full bg-[#62AFFF]" key={index} />
        ))}
      </div>
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full border border-[#8DC8F5]/20" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full border border-[#8DC8F5]/15" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full border border-[#8DC8F5]/10" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-[1220px] px-5 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mx-auto mb-4 block h-0.5 w-10 rounded-full bg-[#18C9A3]" />
          <p className="text-[11px] font-bold uppercase tracking-[4px] text-[#14B995]">
            Our Services
          </p>

          <h2
            id="services-title"
            className="mx-auto mt-4 max-w-3xl text-[31px] font-bold leading-[1.1] tracking-[-1px] text-[#10245A] sm:text-[38px] lg:text-[44px] lg:tracking-[-1.5px]"
          >
            Solutions Built for{" "}
            <span className="text-[#16BFA5]">Your Business</span>
          </h2>

          <p className="mx-auto mt-3.5 max-w-[700px] text-[15px] leading-[1.65] text-[#718096]">
            From idea to implementation, AFT SOFT AND LIMITED delivers reliable
            digital solutions designed to solve real business challenges and
            support long-term growth.
          </p>
        </div>

        <div className="mt-[55px] grid grid-cols-2 gap-3 min-[480px]:gap-[22px] lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.number} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

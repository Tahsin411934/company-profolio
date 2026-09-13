import {
  ArrowRight,
  Check,
  Code2,
  Smartphone,
  Blocks,
  PenTool,
  TrendingUp,
  MonitorCog,
} from "lucide-react";
import Link from "next/link";
import { SectionHeader } from "./SectionHeader";
const services = [
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
  },
];

const serviceIcons = [
  Code2,
  Smartphone,
  Blocks,
  PenTool,
  TrendingUp,
  MonitorCog,
];
export function Services() {
  return (
    <section
      id="services"
      className="section-space bg-white"
      aria-labelledby="services-title"
    >
      <div className="site-container">
        <SectionHeader
          id="services-title"
          label="Our Services"
          title={
            <>
              Solutions Built for{" "}
              <span className="text-emerald-700">Your Business</span>
            </>
          }
        >
          From idea to implementation, AFT SOFT AND LIMITED delivers reliable
          digital solutions designed to solve real business challenges and
          support long-term growth.
        </SectionHeader>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <article
                key={service.number}
                className="surface-card group flex flex-col p-6 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-[#2458d3]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-semibold tracking-widest text-slate-400">
                    {service.number}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold tracking-tight text-blue-950">
                  {service.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  {service.description}
                </p>
                <ul className="mb-6 mt-5 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm leading-relaxed text-slate-600"
                    >
                      <Check
                        className="mt-1 h-4 w-4 shrink-0 text-emerald-700"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  className="text-action mt-auto border-t border-slate-100 pt-4"
                  href="#contact"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

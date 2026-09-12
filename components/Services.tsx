import {
  ArrowRight,
  Blocks,
  Code2,
  MessagesSquare,
  Palette,
  Smartphone,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Web Development",
    description:
      "Build fast, secure, scalable, and high-performance websites and web applications tailored to your business.",
    icon: Code2,
    card: "from-emerald-50 to-white",
    iconStyle: "bg-emerald-100 text-emerald-600",
    line: "bg-emerald-400",
  },
  {
    title: "Mobile App Development",
    description:
      "Create modern and user-friendly mobile applications that deliver seamless experiences across Android and iOS.",
    icon: Smartphone,
    card: "from-cyan-50 to-white",
    iconStyle: "bg-cyan-100 text-cyan-600",
    line: "bg-cyan-400",
  },
  {
    title: "Custom Software Solutions",
    description:
      "Develop tailored software solutions that automate workflows, improve efficiency, and solve complex business challenges.",
    icon: Blocks,
    card: "from-blue-50 to-white",
    iconStyle: "bg-blue-100 text-blue-700",
    line: "bg-blue-500",
  },
  {
    title: "UI/UX Design",
    description:
      "Design clean, intuitive, and engaging digital experiences focused on both user needs and business goals.",
    icon: Palette,
    card: "from-teal-50 to-white",
    iconStyle: "bg-teal-100 text-teal-600",
    line: "bg-teal-400",
  },
  {
    title: "Digital Marketing",
    description:
      "Grow your digital presence with data-driven strategies designed to reach the right audience and generate measurable results.",
    icon: TrendingUp,
    card: "from-lime-50 to-white",
    iconStyle: "bg-lime-100 text-lime-700",
    line: "bg-lime-400",
  },
  {
    title: "IT Consultation",
    description:
      "Get practical technology guidance to choose the right architecture, tools, platforms, and digital strategy for your business.",
    icon: MessagesSquare,
    card: "from-sky-50 to-white",
    iconStyle: "bg-sky-100 text-sky-700",
    line: "bg-sky-400",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-white py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mx-auto mb-5 block h-[2px] w-10 bg-emerald-400" />
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-500 md:text-sm">
            Our Services
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-blue-950 md:text-4xl lg:text-5xl">
            Solutions Built for{" "}
            <span className="text-emerald-500">Your Business</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            From idea to implementation, AFT SOFT AND LIMITED delivers reliable
            digital solutions designed to solve real business challenges and
            support long-term growth.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-5 md:mt-16 md:gap-6 lg:grid-cols-3 lg:gap-7">
          {services.map(({ title, description, icon: Icon, card, iconStyle, line }) => (
            <article
              className={`group flex min-h-[260px] flex-col rounded-xl border border-slate-200 bg-gradient-to-br ${card} p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg sm:min-h-[285px] sm:p-6 lg:min-h-[310px] lg:p-8`}
              key={title}
            >
              <div className={`h-[2px] w-8 ${line}`} />

              <div
                className={`mt-5 flex h-10 w-10 items-center justify-center rounded-lg ${iconStyle} transition-colors duration-300 group-hover:bg-blue-950 group-hover:text-emerald-400 sm:mt-6 sm:h-12 sm:w-12`}
              >
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>

              <h3 className="mt-5 text-base font-bold tracking-tight text-blue-950 sm:mt-6 sm:text-xl">
                {title}
              </h3>

              <p className="mt-3 flex-1 text-xs leading-relaxed text-slate-600 sm:mt-4 sm:text-sm md:text-base">
                {description}
              </p>

              <Link
                className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-blue-950 transition-colors duration-300 hover:text-emerald-600 sm:mt-7 sm:text-sm"
                href="#contact"
              >
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

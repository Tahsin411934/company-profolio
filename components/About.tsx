import {
  ArrowRight,
  Handshake,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const values = [
  {
    title: "Innovation First",
    description: "We use modern technologies to build future-ready solutions.",
    icon: Lightbulb,
  },
  {
    title: "Client Focused",
    description: "We understand business goals before writing code.",
    icon: Handshake,
  },
  {
    title: "Built to Scale",
    description:
      "Our solutions are designed for performance, security, and growth.",
    icon: TrendingUp,
  },
];

const stats = [
  { value: "Modern", label: "Technology" },
  { value: "Scalable", label: "Architecture" },
  { value: "Reliable", label: "Delivery" },
  { value: "Client-First", label: "Approach" },
];

export function About() {
  return (
    <section id="about" className="bg-slate-50 py-20 md:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-blue-950 shadow-xl shadow-blue-950/10">
            <Image
              className="object-cover"
              src="/about.png"
              alt="AFT SOFT AND LIMITED technology workspace"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-blue-950/15" />
          </div>

          <div className="absolute -bottom-7 left-5 max-w-[280px] rounded-xl bg-blue-950 p-5 text-white shadow-xl shadow-blue-950/20 sm:left-8 sm:p-6">
            <p className="text-lg font-bold leading-snug">
              Driven by <span className="text-emerald-400">Technology.</span>
              <br />
              Built for People.
            </p>
          </div>
        </div>

        <div className="pt-8 lg:pt-0">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-[2px] w-10 bg-emerald-400" />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-500 md:text-sm">
              About AFT
            </p>
          </div>

          <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-blue-950 md:text-4xl lg:text-5xl">
            We Build Technology That Creates{" "}
            <span className="text-emerald-500">Business Impact</span>
          </h2>

          <div className="mt-6 max-w-2xl space-y-5 text-base leading-relaxed text-slate-600 md:text-lg">
            <p>
              AFT SOFT AND LIMITED is a technology company focused on building
              reliable, scalable, and practical digital solutions for modern
              businesses.
            </p>
            <p>
              From web and mobile applications to custom software and digital
              strategy, we combine technology, creativity, and business
              understanding to turn ideas into solutions that create measurable
              value.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {values.map(({ title, description, icon: Icon }) => (
              <div key={title}>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-blue-950">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6 border-t border-slate-200 pt-8 sm:grid-cols-4">
            {stats.map(({ value, label }) => (
              <div key={`${value}-${label}`}>
                <p className="text-2xl font-bold tracking-tight text-blue-950 md:text-3xl">
                  {value}
                </p>
                <p className="mt-1 text-sm text-slate-500">{label}</p>
              </div>
            ))}
          </div>

          <Link
            className="group mt-8 inline-flex items-center gap-2 font-semibold text-blue-950 transition-colors duration-300 hover:text-emerald-600"
            href="#contact"
          >
            Learn More About Us
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

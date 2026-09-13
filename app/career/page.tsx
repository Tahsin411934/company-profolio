import type { Metadata } from "next";
import { ArrowRight, Code2, Palette, MessageSquare, Mail } from "lucide-react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { FloatingWhatsApp } from "../../components/FloatingWhatsApp";
import { Button } from "../../components/ui/button";

export const metadata: Metadata = {
  title: "Career",
  description:
    "Connect with AFT SOFT AND LIMITED about career opportunities in software, design, and digital solutions.",
  alternates: { canonical: "/career" },
  openGraph: {
    title: "Career | AFT SOFT AND LIMITED",
    description:
      "Tell us about your skills and interest in working with AFT SOFT AND LIMITED.",
    url: "/career",
  },
};
const areas = [
  {
    title: "Software & engineering",
    text: "Share your experience with web applications, mobile development, or business software.",
    Icon: Code2,
  },
  {
    title: "Design & user experience",
    text: "Show us how you turn user needs into clear, thoughtful digital experiences.",
    Icon: Palette,
  },
  {
    title: "Digital & business solutions",
    text: "Tell us about your skills in digital marketing, client communication, or technology consulting.",
    Icon: MessageSquare,
  },
];
export default function CareerPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="border-b border-blue-100 bg-blue-50 pb-16 pt-32 sm:pb-20 sm:pt-36">
          <div className="site-container">
            <p className="eyebrow">Career at AFT</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-blue-950 sm:text-5xl lg:text-6xl">
              Build your next chapter with us.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              We build software and digital solutions for real business needs.
              Interested in contributing your skills? We would like to hear
              about your work.
            </p>
            <Button className="mt-8" href="#career-enquiries">
              Career enquiries{" "}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </section>
        <section className="section-space" aria-labelledby="areas-title">
          <div className="site-container">
            <p className="eyebrow">Our work</p>
            <h2 id="areas-title" className="section-title mt-4">
              Where your skills could contribute
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
              These are areas of our business. For current role availability,
              contact us directly.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {areas.map(({ title, text, Icon }) => (
                <article key={title} className="surface-card p-6 sm:p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-blue-700">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-blue-950">
                    {title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-600">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section
          id="career-enquiries"
          className="pb-16 sm:pb-24"
          aria-labelledby="enquiries-title"
        >
          <div className="site-container">
            <div className="grid gap-8 rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
              <div>
                <p className="eyebrow">Get in touch</p>
                <h2 id="enquiries-title" className="section-title mt-4">
                  Tell us about yourself.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-slate-600">
                  Email a short introduction, your area of interest, and a link
                  to your CV or portfolio. Ask us about suitable opportunities
                  and the next steps.
                </p>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-lg font-bold text-blue-950">
                  What to include
                </h3>
                <ul className="mt-4 list-inside list-disc space-y-3 text-base leading-relaxed text-slate-600">
                  <li>Your name and contact details</li>
                  <li>Your skills and relevant experience</li>
                  <li>Your CV, portfolio, or project links</li>
                </ul>
                <Button
                  className="mt-6 self-start"
                  href="mailto:info@aftsoft.com?subject=Career%20enquiry"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Email your introduction
                </Button>
                <p className="mt-3 break-all text-base text-slate-600">
                  info@aftsoft.com
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

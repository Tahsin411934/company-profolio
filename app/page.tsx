import type { Metadata } from "next";
import { About } from "../components/About";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { PageReveal } from "../components/PageReveal";
import { SaasProducts } from "../components/SaasProducts";
import { Services } from "../components/Services";

export const metadata: Metadata = {
  title: "Software, SaaS Products & IT Solutions",
  description:
    "AFT SOFT AND LIMITED delivers SaaS products, web development, mobile app development, custom software, UI/UX design, digital marketing, and IT consultation.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AFT SOFT AND LIMITED | Software, SaaS Products & IT Solutions",
    description:
      "Explore AFT SOFT AND LIMITED's SaaS products and digital services built for business growth.",
    url: "/",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "AFT SOFT AND LIMITED software solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AFT SOFT AND LIMITED | Software, SaaS Products & IT Solutions",
    description:
      "Explore SaaS products, websites, mobile apps, custom software, UI/UX, and IT solutions.",
    images: ["/banner.png"],
  },
};

export default function Home() {
  return (
    <main id="top">
      <PageReveal>
        <Hero />
        <SaasProducts />
        <Services />
        <About />
        <Footer />
      </PageReveal>
      <FloatingWhatsApp />
    </main>
  );
}

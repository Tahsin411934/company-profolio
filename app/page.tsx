import { About } from "../components/About";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { PageLoader } from "../components/PageLoader";
import { PageReveal } from "../components/PageReveal";
import { SaasProducts } from "../components/SaasProducts";
import { Services } from "../components/Services";

export default function Home() {
  return (
    <main id="top">
      <PageLoader />
      <Navbar />
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

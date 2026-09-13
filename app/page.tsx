import { About } from "../components/About";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { PageLoader } from "../components/PageLoader";
import { PageReveal } from "../components/PageReveal";
import { Services } from "../components/Services";

export default function Home() {
  return (
    <main id="top">
      <PageLoader />
      <Navbar />
      <PageReveal>
        <Hero />
        <Services />
        <About />
        <Footer />
      </PageReveal>
    </main>
  );
}

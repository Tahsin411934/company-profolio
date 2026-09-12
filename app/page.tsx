import { About } from "../components/About";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Services } from "../components/Services";

export default function Home() {
  return (
    <main id="top">
      <Navbar />
      <Hero />
      <Services />
      <About />
    </main>
  );
}

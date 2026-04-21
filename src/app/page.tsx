import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Marquee from "@/components/ui/Marquee";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Marquee />
        <Services />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

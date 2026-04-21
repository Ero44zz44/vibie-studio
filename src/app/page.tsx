import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import Marquee from "@/components/ui/Marquee";

export default function Home() {
  return (
    <main className="flex-grow">
      <Hero />
      <Marquee />
      <Services />
      <Stats />
      <CTA />
      <Footer />
    </main>
  );
}

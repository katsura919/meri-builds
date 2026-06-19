import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { ServicesSection } from "@/components/ServicesSection";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full relative overflow-x-hidden">
      <Navigation />
      <Hero />
      {/* <Marquee /> */}
      <ServicesSection />
      <CTA />
      <Footer />
    </main>
  );
}

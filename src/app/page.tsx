import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { IntroAnimation } from "@/components/IntroAnimation";
import { PromptsTeaser } from "@/components/PromptsTeaser";

export default function Home() {
  return (
    <main className="w-full relative overflow-x-hidden">
      <IntroAnimation />
      <Navigation />
      <Hero />
      <PromptsTeaser />
      <ServicesSection />
      <CTA />
      <Footer />
    </main>
  );
}

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function PromptsTeaser() {
  return (
    <section className="bg-ivory py-16 lg:py-24 px-6 md:px-12 w-full border-t border-beige border-b relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cream rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24 relative z-10">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 bg-cream text-espresso px-4 py-2 rounded-full font-mono text-sm font-medium tracking-tight uppercase">
            <Sparkles className="w-4 h-4 text-etsy-accent" />
            <span>Resource Library</span>
          </div>
          
          <h2 className="font-archivo text-4xl md:text-5xl lg:text-7xl uppercase leading-[0.9] tracking-tighter text-espresso">
            100 AI Prompts<br />
            <span className="italic font-baloo text-mocha lowercase">for your business</span>
          </h2>
          
          <p className="font-mono text-espresso/80 text-lg md:text-xl max-w-lg leading-relaxed">
            Copy-paste prompts for hiring VAs, running GoHighLevel, writing your own marketing, and keeping clients happy. Built for solo operators and lean teams.
          </p>
          
          <div className="pt-4">
            <Link 
              href="/prompts"
              className="group inline-flex items-center gap-4 bg-espresso text-ivory rounded-full px-8 py-4 font-mono text-lg uppercase tracking-tighter hover:bg-mocha transition-colors duration-300"
            >
              Explore Prompts
              <span className="bg-etsy-accent text-espresso rounded-full p-1 group-hover:translate-x-1 transition-transform duration-300">
                <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
          </div>
        </div>
        
        <div className="flex-1 w-full relative">
          {/* A visual representation of the prompts */}
          <div className="relative w-full aspect-square md:aspect-[4/3] bg-cream rounded-3xl border border-beige p-6 md:p-8 flex flex-col gap-4 shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            
            <div className="bg-ivory rounded-xl p-4 border border-beige shadow-sm animate-pulse-slow">
              <div className="h-2 w-16 bg-latte rounded mb-2 opacity-50" />
              <div className="h-3 w-3/4 bg-espresso rounded opacity-80" />
            </div>
            
            <div className="bg-ivory rounded-xl p-4 border border-beige shadow-sm">
              <div className="h-2 w-16 bg-latte rounded mb-2 opacity-50" />
              <div className="h-3 w-full bg-espresso rounded mb-2 opacity-80" />
              <div className="h-3 w-5/6 bg-espresso rounded opacity-80" />
            </div>
            
            <div className="bg-etsy-accent/10 rounded-xl p-4 border border-etsy-accent/20 shadow-sm mt-auto backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-etsy-accent" />
                <div className="h-3 w-1/2 bg-etsy-accent rounded opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

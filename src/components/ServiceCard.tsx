import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  index: string;
  title: string;
  tags?: string[];
  children: React.ReactNode;
}

export function ServiceCard({ index, title, tags, children }: ServiceCardProps) {
  return (
    <div className="group w-full border-t border-white/20 transition-colors duration-300 hover:bg-white/5 relative overflow-hidden cursor-pointer">
      <div className="max-w-[1600px] mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row gap-8 items-start relative z-10">
        
        <div className="font-mono text-etsy-accent text-xl md:w-32 shrink-0">
          [{index}]
        </div>
        
        <div className="flex-1 flex flex-col gap-6 transition-transform duration-300 group-hover:translate-x-4">
          <h2 className="font-archivo text-[7vw] leading-[0.85] uppercase tracking-[-0.04em] text-ivory">
            {title}
          </h2>
          
          <div className="font-inter text-lg text-ivory/80 max-w-3xl leading-relaxed">
            {children}
          </div>
          
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-4">
              {tags.map((tag) => (
                <span key={tag} className="border border-ivory/30 rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-tight text-ivory/80">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

      </div>

      <div className="absolute right-12 top-1/2 -translate-y-1/2 text-etsy-accent opacity-0 -rotate-90 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-300 pointer-events-none hidden md:block">
        <ArrowUpRight size={80} strokeWidth={1} />
      </div>
    </div>
  );
}

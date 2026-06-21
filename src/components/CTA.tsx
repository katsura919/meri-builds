import Link from "next/link";

export function CTA() {
  return (
    <section id="contact" className="relative py-32 px-6 flex flex-col items-center justify-center min-h-[80vh] border-t-4 border-espresso bg-ivory text-espresso">
      {/* Diagonal Grid with Light */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.05) 0, rgba(0, 0, 0, 0.05) 1px, transparent 1px, transparent 20px),
            repeating-linear-gradient(-45deg, rgba(0, 0, 0, 0.05) 0, rgba(0, 0, 0, 0.05) 1px, transparent 1px, transparent 20px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      
      <div className="relative z-10 max-w-[1200px] w-full flex flex-col items-center gap-16 text-center">
        <h2 className="font-archivo text-[14vw] leading-[0.8] tracking-[-0.04em] uppercase">
          Let's Build
          <br />
          <span className="text-etsy-accent">Together</span>
        </h2>
        
        <Link 
          href="https://instagram.com/meribuilds"
          target="_blank"
          className="group bg-espresso text-ivory rounded-full px-16 py-6 md:px-24 md:py-8 font-mono text-xl md:text-2xl uppercase tracking-tighter hover:scale-110 transition-transform duration-300 ease-in-out inline-flex items-center gap-4"
        >
          Message Me
          <span className="bg-etsy-accent text-espresso rounded-full p-1 group-hover:rotate-45 transition-transform duration-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
          </span>
        </Link>
      </div>
    </section>
  );
}

import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-0 flex flex-col justify-between bg-ivory text-espresso overflow-hidden">
      {/* Diagonal Grid Background */}
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
      
      <div className="relative z-10 flex-1 flex flex-col justify-center px-4 w-full max-w-[1600px] mx-auto mt-8 md:mt-0">
        <h1 className="font-archivo text-[min(9vw,22vh)] leading-[0.85] tracking-[-0.04em] uppercase text-left w-full break-words flex flex-col gap-2 mb-8 md:mb-12">
          <span>AI Workflows</span>
          <span>Without The</span>
          <span className="text-etsy-accent">Complication.</span>
        </h1>
        
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between border-t-2 border-espresso pt-6 gap-6 md:gap-8">
          <div className="font-mono text-sm uppercase tracking-tight">
            [ BASED IN MADRID ]
          </div>
          
          <div className="flex justify-center md:flex-1 hidden md:flex">
            <Image
              src="/image/meribuilds.png"
              alt="Meri Builds"
              width={180}
              height={90}
              className="h-12 w-auto object-contain opacity-90"
            />
          </div>
          
          <div className="font-mono text-sm leading-relaxed uppercase tracking-tight text-left md:text-right">
            <p>Building systems that scale</p>
          </div>
        </div>
      </div>

      {/* Marquee Integrated into Hero */}
      <div className="relative z-20 w-full mt-12 pb-12">
        <div className="bg-espresso text-ivory py-6 md:py-10 -skew-y-2 relative border-y-4 border-espresso overflow-hidden shadow-xl transform translate-y-4 scale-105">
          <div className="relative z-10 flex whitespace-nowrap animate-marquee">
            <div className="flex items-center gap-16 font-archivo text-[8vw] md:text-[6vw] uppercase text-etsy-accent leading-none pr-16 tracking-tighter">
              <span>AI PRACTITIONER</span>
              <span>•</span>
              <span>SOLOPRENEUR</span>
              <span>•</span>
              <span>DIGITAL NOMAD</span>
              <span>•</span>
              <span>AI PRACTITIONER</span>
              <span>•</span>
              <span>SOLOPRENEUR</span>
              <span>•</span>
              <span>DIGITAL NOMAD</span>
              <span>•</span>
            </div>
          </div>
          
          <div className="relative z-10 flex whitespace-nowrap mt-4" style={{ animation: "marquee 18s linear infinite reverse" }}>
            <div className="flex items-center gap-16 font-archivo text-[8vw] md:text-[6vw] uppercase text-ivory opacity-80 leading-none pr-16 tracking-tighter">
              <span>WORKFLOWS</span>
              <span>•</span>
              <span>SYSTEMS</span>
              <span>•</span>
              <span>AUTOMATION</span>
              <span>•</span>
              <span>WORKFLOWS</span>
              <span>•</span>
              <span>SYSTEMS</span>
              <span>•</span>
              <span>AUTOMATION</span>
              <span>•</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


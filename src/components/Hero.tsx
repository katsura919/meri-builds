export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 flex flex-col justify-between pb-8 bg-[#faf9f5] text-[#141413]">
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
      
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 w-full">
        <h1 className="font-archivo text-[min(9vw,22vh)] leading-[0.85] tracking-[-0.04em] uppercase text-left w-full break-words max-w-[1600px] mx-auto flex flex-col gap-2">
          <span>AI Workflows</span>
          <span>Without The</span>
          <span className="text-brand-orange">Complication.</span>
        </h1>
      </div>
      
      <div className="w-full border-t-2 border-brand-black flex flex-col md:flex-row items-center justify-between p-6 gap-8">
        <div className="font-mono text-sm uppercase tracking-tight w-full md:w-1/3">
          [ BASED IN MADRID ]
        </div>
        
        <div className="w-full md:w-1/3 flex justify-center">
        </div>
        
        <div className="font-mono text-sm leading-relaxed uppercase tracking-tight w-full md:w-1/3 md:text-right">
          <p>AI Practitioner</p>
          <p>Solopreneur</p>
          <p>Digital Nomad</p>
        </div>
      </div>
    </section>
  );
}

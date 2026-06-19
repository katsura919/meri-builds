export function Marquee() {
  return (
    <div className="bg-[#faf9f5] text-[#141413] py-16 -skew-y-2 my-24 overflow-hidden relative border-y-4 border-brand-black">
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
      
      <div className="relative z-10 flex whitespace-nowrap animate-marquee">
        {/* Row 1 */}
        <div className="flex items-center gap-16 font-archivo text-[10vw] uppercase text-brand-orange leading-none pr-16 tracking-tighter">
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
      
      <div className="relative z-10 flex whitespace-nowrap mt-8" style={{ animation: "marquee 18s linear infinite reverse" }}>
        {/* Row 2 */}
        <div className="flex items-center gap-16 font-archivo text-[10vw] uppercase text-[#141413] opacity-80 leading-none pr-16 tracking-tighter">
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
  );
}

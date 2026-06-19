import { ServiceCard } from "./ServiceCard";

export function ServicesSection() {
  return (
    <section id="about" className="bg-brand-black w-full min-h-screen py-24">
      <div className="flex flex-col w-full">
        <ServiceCard 
          index="01" 
          title="What I do"
          tags={["Client Work", "Content", "Education"]}
        >
          <p className="mb-4">
            I'm a solopreneur juggling a lot at once: client work, personal life, and making travel content along the way.
          </p>
          <p className="mb-4">
            I also teach AI Claude specifically for solopreneurs and VAs who want results from AI without needing a tech background.
          </p>
          <p>
            My approach is simple: AI shouldn't feel like one more thing you have to "figure out." I break it down step by step, in plain language, so it fits into the way you already work.
          </p>
        </ServiceCard>

        <ServiceCard 
          index="02" 
          title="Why I'm doing this"
          tags={["Pivot", "Value", "Journey"]}
        >
          <p className="mb-4">
            I didn't start out in tech. For a while, my page was all about makeup. These days, it's all AI and business, because that's where I can actually move the needle for the people I work with.
          </p>
          <p>
            Building this brand while living between cities (currently sorting out life in Madrid) has taught me a lot about doing hard things in real time, and that's exactly the energy I bring to my work with clients.
          </p>
        </ServiceCard>

        <ServiceCard 
          index="03" 
          title="Who I help"
          tags={["Non-Technical", "Coaches", "VAs"]}
        >
          <p>
            If you're a non-technical solopreneur, coach, or VA who keeps hearing "just use AI" without anyone explaining how, you're in the right place. I build workflows and teach skills that fit your business, not the other way around.
          </p>
        </ServiceCard>
      </div>
    </section>
  );
}

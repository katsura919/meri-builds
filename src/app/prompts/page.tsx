"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { promptsData } from "@/data/prompts";
import { Copy, Check, ChevronLeft, Sparkles, Save } from "lucide-react";
import gsap from "gsap";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="p-2 bg-ivory/80 backdrop-blur border border-beige rounded-md text-espresso hover:bg-ivory hover:text-etsy-accent transition-colors shadow-sm"
      title="Copy prompt"
    >
      {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
    </button>
  );
}

function PromptCardComponent({ prompt }: { prompt: { number: string; title: string; prompt: string; tip?: string } }) {
  const [text, setText] = useState(prompt.prompt);
  const [savedText, setSavedText] = useState(prompt.prompt);
  
  useEffect(() => {
    const local = localStorage.getItem(`prompt-${prompt.number}`);
    if (local) {
      setText(local);
      setSavedText(local);
    }
  }, [prompt.number]);

  const hasChanges = text !== savedText;

  const handleSave = () => {
    localStorage.setItem(`prompt-${prompt.number}`, text);
    setSavedText(text);
  };
  
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  useEffect(() => {
    const adjustHeight = () => {
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    };
    
    adjustHeight();
    
    // Also adjust on window resize
    window.addEventListener("resize", adjustHeight);
    return () => window.removeEventListener("resize", adjustHeight);
  }, [text]);

  return (
    <article 
      id={`prompt-${prompt.number}`}
      className="prompt-card scroll-mt-24 lg:scroll-mt-12 bg-cream border border-beige rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="p-6 md:p-8 bg-ivory border-b border-beige">
        <div className="font-mono text-xs text-mocha uppercase tracking-wider mb-3">
          {prompt.number}
        </div>
        <h3 className="font-sans text-xl md:text-2xl font-semibold text-espresso">
          {prompt.title}
        </h3>
      </div>
      
      <div className="p-6 md:p-8 relative bg-cream">
        <div 
          className="group relative bg-ivory border border-beige rounded-xl p-5 md:p-6 pr-24 min-h-[120px] font-mono text-sm md:text-[15px] leading-relaxed text-espresso transition-colors focus-within:border-mocha/50 focus-within:shadow-sm hover:border-mocha/30 cursor-text"
          onClick={(e) => {
            if (e.target !== textareaRef.current) {
              textareaRef.current?.focus();
            }
          }}
        >
          <textarea
            ref={textareaRef}
            className="w-full bg-transparent resize-none outline-none overflow-hidden block"
            value={text}
            onChange={(e) => setText(e.target.value)}
            spellCheck={false}
          />
          
          <div className="absolute top-4 right-4 flex items-center gap-2">
            {hasChanges && (
              <button 
                onClick={handleSave} 
                className="flex items-center gap-1.5 px-3 py-1.5 bg-etsy-accent text-ivory backdrop-blur border border-transparent rounded-md hover:bg-etsy-accent/90 transition-colors text-xs font-sans font-medium shadow-sm"
                title="Save changes"
              >
                <Save className="w-3.5 h-3.5" /> Save
              </button>
            )}
            <CopyButton text={text} />
          </div>
        </div>
        
        {prompt.tip && (
          <div className="mt-6 flex items-start gap-3 bg-etsy-accent/10 border border-etsy-accent/20 rounded-xl p-4">
            <Sparkles className="w-5 h-5 text-etsy-accent shrink-0 mt-0.5" />
            <p className="font-sans text-sm text-espresso/90 italic">
              <span className="font-semibold not-italic">Pro Tip: </span>
              {prompt.tip}
            </p>
          </div>
        )}
      </div>
    </article>
  );
}

export default function PromptsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState(promptsData[0].id);

  // Intersection Observer for highlighting the active sidebar link
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" } // trigger when near top
    );

    promptsData.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // GSAP animation for cards on initial load
  useEffect(() => {
    if (!containerRef.current) return;
    
    // We could use ScrollTrigger, but a simple stagger on load is also nice, 
    // or we can use Intersection Observer to animate them in as they scroll
    // Let's keep it simple with a clean fade up on mount for the visible ones.
    const cards = containerRef.current.querySelectorAll('.prompt-card');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power3.out",
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => {
      // Set initial state
      gsap.set(card, { y: 30, opacity: 0 });
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const activeCategoryData = promptsData.find(c => c.id === activeCategory);

  return (
    <main className="w-full min-h-screen bg-ivory text-espresso font-sans">
      {/* Header */}
      <header className="w-full bg-cream border-b border-beige py-12 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-espresso/60 hover:text-espresso transition-colors font-mono text-sm uppercase tracking-wider mb-8">
            <ChevronLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h1 className="font-archivo text-4xl md:text-6xl uppercase tracking-tighter leading-[0.9] text-espresso mb-4">
                100 AI Prompts<br />
                <span className="font-baloo text-mocha italic lowercase">Library</span>
              </h1>
              <p className="font-mono text-lg text-espresso/80">
                Copy-paste prompts built for solo operators and lean teams. Fill in the brackets, paste the whole thing into Claude or ChatGPT, and get a usable first draft.
              </p>
            </div>
            <div className="flex items-center gap-2 bg-ivory px-4 py-2 rounded-full border border-beige shadow-sm font-mono text-sm uppercase">
              <Sparkles className="w-4 h-4 text-etsy-accent" />
              <span>5 Categories • 100 Prompts</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row relative">
        {/* Mobile Navigation */}
        <div className="lg:hidden sticky top-0 z-40 bg-ivory/90 backdrop-blur-md border-b border-beige overflow-x-auto whitespace-nowrap p-4 flex gap-4">
          {promptsData.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className={`inline-block px-4 py-2 rounded-full font-mono text-sm transition-colors ${
                activeCategory === category.id
                  ? "bg-espresso text-ivory"
                  : "bg-cream text-espresso hover:bg-beige"
              }`}
            >
              {category.id}. {category.title}
            </a>
          ))}
        </div>

        {/* Desktop Sidebar */}
        <aside className="hidden lg:block lg:w-64 xl:w-72 shrink-0 border-r border-beige lg:p-6 xl:p-8 sticky top-0 h-screen overflow-y-auto">
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-mocha mb-8">Table of Contents</h3>
          <nav className="flex flex-col gap-4">
            {promptsData.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className={`group flex items-baseline gap-4 p-3 rounded-xl transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-cream text-espresso border border-beige shadow-sm"
                    : "text-espresso/60 hover:bg-cream hover:text-espresso"
                }`}
              >
                <span className={`font-archivo italic text-xl ${activeCategory === category.id ? "text-etsy-accent" : "text-mocha"}`}>
                  {category.id}
                </span>
                <span className="font-sans font-medium text-sm leading-tight">
                  {category.title}
                </span>
              </a>
            ))}
          </nav>
        </aside>

        {/* Prompts List */}
        <div className="flex-1 p-6 lg:p-12 pb-32" ref={containerRef}>
          <div className="max-w-4xl mx-auto space-y-24">
            {promptsData.map((category) => (
              <section key={category.id} id={category.id} className="scroll-mt-24 lg:scroll-mt-12">
                <div className="mb-12">
                  <span className="font-mono text-sm text-mocha uppercase tracking-widest mb-2 block">
                    Section {category.id}
                  </span>
                  <h2 className="font-archivo text-4xl md:text-5xl text-espresso leading-none mb-6">
                    {category.title}
                  </h2>
                  <p className="text-lg text-espresso/80 font-sans leading-relaxed">
                    {category.intro}
                  </p>
                </div>

                <div className="space-y-8">
                  {category.prompts.map((prompt) => (
                    <PromptCardComponent key={prompt.number} prompt={prompt} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        {/* Right Sidebar - Mini Navigator */}
        <aside className="hidden lg:block lg:w-64 xl:w-72 shrink-0 border-l border-beige lg:p-6 xl:p-8 sticky top-0 h-screen overflow-y-auto">
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-mocha mb-8">
            In this section
          </h3>
          {activeCategoryData && (
            <nav className="flex flex-col gap-3">
              {activeCategoryData.prompts.map((prompt) => (
                <a
                  key={prompt.number}
                  href={`#prompt-${prompt.number}`}
                  className="group flex flex-col gap-1 p-3 rounded-xl transition-all duration-300 border border-transparent hover:border-beige text-espresso/70 hover:bg-cream hover:text-espresso"
                >
                  <span className="font-mono text-[10px] uppercase text-mocha">
                    {prompt.number}
                  </span>
                  <span className="font-sans text-xs leading-snug font-medium line-clamp-2">
                    {prompt.title}
                  </span>
                </a>
              ))}
            </nav>
          )}
        </aside>
      </div>
    </main>
  );
}

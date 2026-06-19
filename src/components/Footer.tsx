import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t-2 border-brand-black px-6 py-8">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[12px] uppercase tracking-tight">
        
        <div className="text-brand-black/60">
          © {new Date().getFullYear()} Meri Builds. All Rights Reserved.
        </div>
        
        <div className="flex items-center gap-8">
          <Link href="https://instagram.com/meribuilds" target="_blank" className="hover:text-brand-orange transition-colors">
            Instagram
          </Link>
          <Link href="#" className="hover:text-brand-orange transition-colors">
            Twitter
          </Link>
          <Link href="#" className="hover:text-brand-orange transition-colors">
            LinkedIn
          </Link>
        </div>
        
      </div>
    </footer>
  );
}

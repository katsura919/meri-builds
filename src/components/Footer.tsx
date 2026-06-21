import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t-2 border-espresso px-6 py-8">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[12px] uppercase tracking-tight">
        
        <div className="text-espresso/60">
          © {new Date().getFullYear()} Meri Builds. All Rights Reserved.
        </div>
        
        <div className="flex items-center gap-8">
          <Link href="https://instagram.com/meribuilds" target="_blank" className="hover:text-etsy-accent transition-colors">
            Instagram
          </Link>
          <Link href="#" className="hover:text-etsy-accent transition-colors">
            Twitter
          </Link>
          <Link href="#" className="hover:text-etsy-accent transition-colors">
            LinkedIn
          </Link>
        </div>
        
      </div>
    </footer>
  );
}

"use client";
import Link from "next/link";
import { StaggeredMenu, StaggeredMenuItem, StaggeredMenuSocialItem } from "./StaggeredMenu";

export function Navigation() {
  const menuItems: StaggeredMenuItem[] = [
    { label: "Home", ariaLabel: "Home", link: "/" },
    { label: "About", ariaLabel: "About", link: "#about" },
    { label: "Contact", ariaLabel: "Contact", link: "#contact" },
  ];

  const socialItems: StaggeredMenuSocialItem[] = [
    { label: "Instagram", link: "https://instagram.com/meribuilds" },
    { label: "Twitter", link: "#" },
    { label: "LinkedIn", link: "#" },
  ];

  return (
    <StaggeredMenu
      isFixed={true}
      position="right"
      colors={["#d97757", "#141413"]}
      accentColor="#d97757"
      menuButtonColor="#141413"
      openMenuButtonColor="#141413"
      changeMenuColorOnOpen={false}
      logo={
        <div className="font-archivo text-xl uppercase tracking-tighter text-brand-white mix-blend-difference">
          <Link href="/">Meri</Link>
        </div>
      }
      items={menuItems}
      socialItems={socialItems}
    />
  );
}

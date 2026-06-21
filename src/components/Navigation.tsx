"use client";
import Image from "next/image";
import Link from "next/link";
import { StaggeredMenu, StaggeredMenuItem, StaggeredMenuSocialItem } from "./StaggeredMenu";

export function Navigation() {
  const menuItems: StaggeredMenuItem[] = [
    { label: "Home", ariaLabel: "Home", link: "/" },
    { label: "About", ariaLabel: "About", link: "#about" },
    { label: "Prompts", ariaLabel: "Prompts", link: "/prompts" },
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
      colors={["#F1641E", "#5C4632"]}
      accentColor="#F1641E"
      menuButtonColor="#5C4632"
      openMenuButtonColor="#5C4632"
      changeMenuColorOnOpen={false}
      logo={
        <Link href="/" aria-label="Meri Builds – Home">
          <Image
            src="/image/meribuilds.png"
            alt="Meri Builds logo"
            width={160}
            height={80}
            loading="eager"
            className="sm-logo-img h-14 w-auto object-contain"
          />
        </Link>
      }
      items={menuItems}
      socialItems={socialItems}
    />
  );
}

"use client";

import { ArrowRight, Menu, MessageCircle, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";

const links = [
  "Home",
  "About",
  "Services",
  "Contact",
];

function getSectionId(link: string) {
  return link === "Home" ? "top" : link.toLowerCase().replace(" ", "-");
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateActiveLink = () => {
      const activationLine = (headerRef.current?.getBoundingClientRect().height ?? 80) + 1;
      let currentLink = "Home";
      let closestTop = -Infinity;

      for (const link of links) {
        if (link === "Home") continue;
        const section = document.getElementById(getSectionId(link));

        if (!section) {
          continue;
        }

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop <= activationLine && sectionTop > closestTop) {
          currentLink = link;
          closestTop = sectionTop;
        }
      }

      if (window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        currentLink = "Contact";
      }
      setActiveLink(currentLink);
    };

    const updateFromHash = () => {
      const link = links.find((item) => `#${getSectionId(item)}` === window.location.hash);
      if (link) setActiveLink(link);
      else updateActiveLink();
    };

    updateFromHash();
    window.addEventListener("scroll", updateActiveLink, { passive: true });
    window.addEventListener("resize", updateActiveLink);
    window.addEventListener("hashchange", updateFromHash);

    return () => {
      window.removeEventListener("scroll", updateActiveLink);
      window.removeEventListener("resize", updateActiveLink);
      window.removeEventListener("hashchange", updateFromHash);
    };
  }, []);

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50 border-b border-slate-400/20 bg-blue-950/95 shadow-xl backdrop-blur-md">
      <nav className="relative mx-auto flex min-h-20 max-w-screen-2xl items-center justify-between gap-2 px-3 sm:px-6 lg:px-8 xl:grid xl:grid-cols-3 xl:gap-3" aria-label="Main navigation">
        <Link className="relative block h-14 w-36 shrink-0 overflow-hidden sm:w-60" href="/" onClick={() => { setActiveLink("Home"); setOpen(false); }}>
          <Image className="object-contain object-left brightness-125 contrast-125 saturate-125 drop-shadow-lg" src="/aft-navbar-logo-clean.png" alt="AFT SOFT AND LIMITED" fill priority sizes="(min-width: 640px) 240px, 144px" />
        </Link>
        <div id="navbar-menu" className={cn(
          "absolute inset-x-0 top-full border-b border-blue-200/20 bg-blue-950 px-4 pb-5 shadow-xl sm:px-6 xl:static xl:col-span-2 xl:grid xl:grid-cols-2 xl:items-center xl:gap-3 xl:border-0 xl:bg-transparent xl:p-0 xl:shadow-none",
          open ? "grid gap-4" : "hidden",
        )}>
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-center xl:gap-6">
            {links.map((link) => (
              <Link key={link} className={cn(
                "relative whitespace-nowrap py-3 text-base font-semibold transition-colors hover:text-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400 xl:py-7",
                activeLink === link
                  ? "text-emerald-400 after:absolute after:bottom-1 after:left-0 after:h-0.5 after:w-7 after:bg-emerald-400 xl:after:bottom-4 xl:after:w-full"
                  : "text-slate-200",
              )} href={`#${getSectionId(link)}`} aria-current={activeLink === link ? "location" : undefined} onClick={() => { setActiveLink(link); setOpen(false); }}>
                {link}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2 xl:justify-end">
<div className="hidden items-center gap-2 xl:flex">
            <a className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-emerald-400/40 text-emerald-400 transition-colors hover:bg-emerald-400 hover:text-blue-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400" href="https://wa.me/8801323814588" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" title="WhatsApp" onClick={() => setOpen(false)}>
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
            </a>
            <a className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/30 text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400" href="tel:+8801323814588" aria-label="Call us" title="Call us" onClick={() => setOpen(false)}>
              <Phone className="h-5 w-5" aria-hidden="true" />
            </a>
</div>
            <Button className="h-11 bg-emerald-400 px-4 text-base font-bold text-blue-950 hover:bg-emerald-300" href="#contact" onClick={() => { setActiveLink("Contact"); setOpen(false); }}>
              Get a Quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-1 xl:hidden">
            <a className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-emerald-400/40 text-emerald-400 transition-colors hover:bg-emerald-400 hover:text-blue-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400" href="https://wa.me/8801323814588" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" title="WhatsApp" onClick={() => setOpen(false)}>
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
            </a>
            <a className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/30 text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400" href="tel:+8801323814588" aria-label="Call us" title="Call us" onClick={() => setOpen(false)}>
              <Phone className="h-5 w-5" aria-hidden="true" />
            </a>
        <button className=" inline-flex h-11 w-11 items-center justify-center justify-self-end rounded-md text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400 xl:hidden" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="navbar-menu" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        </div>
      </nav>
    </header>
  );
}

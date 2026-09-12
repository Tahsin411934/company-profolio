"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";

const links = [
  "Home",
  "About",
  "Services",
  "Portfolio",
  "Our Team",
  "Blog",
  "Contact",
];

function getSectionId(link: string) {
  return link === "Home" ? "top" : link.toLowerCase().replace(" ", "-");
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const updateActiveLink = () => {
      const scrollPosition = window.scrollY + 110;

      for (const link of links) {
        const section = document.getElementById(getSectionId(link));

        if (!section) {
          continue;
        }

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveLink(link);
          return;
        }
      }
    };

    updateActiveLink();
    window.addEventListener("scroll", updateActiveLink, { passive: true });

    return () => window.removeEventListener("scroll", updateActiveLink);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-400/20 bg-blue-950/95 shadow-[0_8px_28px_rgba(2,6,23,0.16)] backdrop-blur-md">
      <nav
        className="mx-auto flex min-h-[78px] w-[calc(100%_-_64px)] max-w-7xl items-center justify-between gap-6 max-[820px]:w-[min(calc(100%_-_40px),700px)] max-[540px]:min-h-[70px] max-[540px]:w-[calc(100%_-_32px)] max-[540px]:gap-2 max-[360px]:w-[calc(100%_-_24px)]"
        aria-label="Main navigation"
      >
        <Link
          className="relative block h-14 w-[190px] shrink-0 overflow-hidden max-[540px]:h-12 max-[540px]:w-[150px] max-[360px]:w-[132px]"
          href="#top"
          onClick={() => {
            setActiveLink("Home");
            setOpen(false);
          }}
        >
          <Image
            className="object-contain object-left brightness-125 contrast-125 saturate-150 [mix-blend-mode:screen]"
            src="/aft-logo.png"
            alt="AFT SOFT AND LIMITED"
            fill
            priority
            sizes="(min-width: 768px) 190px, 150px"
          />
        </Link>

        <div
          className={cn(
            "ml-auto flex items-center gap-[clamp(15px,1.65vw,28px)] max-[1080px]:gap-4",
            open
              ? "max-[820px]:absolute max-[820px]:inset-x-0 max-[820px]:top-[78px] max-[820px]:z-[60] max-[820px]:flex max-[820px]:flex-col max-[820px]:items-stretch max-[820px]:gap-0 max-[820px]:border-b max-[820px]:border-blue-200/20 max-[820px]:bg-[#0b1d46] max-[820px]:px-5 max-[820px]:pb-[22px] max-[820px]:pt-3 max-[820px]:shadow-[0_12px_24px_rgba(2,6,23,0.26)] max-[540px]:top-[70px]"
              : "max-[820px]:hidden",
          )}
        >
          {links.map((link) => (
            <Link
              key={link}
              className={cn(
                "relative py-[29px] pb-[27px] text-[13px] font-medium text-slate-200 transition-colors hover:text-emerald-400 max-[1080px]:text-xs max-[820px]:py-3.5 max-[820px]:text-sm",
                activeLink === link &&
                  "text-emerald-400 after:absolute after:inset-x-0 after:bottom-5 after:h-0.5 after:bg-emerald-400 max-[820px]:after:right-auto max-[820px]:after:bottom-2 max-[820px]:after:w-7",
              )}
              href={`#${getSectionId(link)}`}
              onClick={() => {
                setActiveLink(link);
                setOpen(false);
              }}
            >
              {link}
            </Link>
          ))}

          <Button
            className="mt-2.5 hidden bg-emerald-400 px-5 py-3 font-extrabold text-blue-950 hover:bg-emerald-300 max-[820px]:flex"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Get a Quote <ArrowRight size={16} />
          </Button>
        </div>

        <Button
          className="bg-emerald-400 font-extrabold text-blue-950 hover:bg-emerald-300 max-[820px]:hidden"
          href="#contact"
        >
          Get a Quote <ArrowRight size={16} />
        </Button>

        <button
          className="hidden h-[42px] w-[42px] shrink-0 place-items-center border-0 bg-transparent text-white max-[820px]:grid"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
    </header>
  );
}

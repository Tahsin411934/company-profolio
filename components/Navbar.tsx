"use client";

import { ArrowRight, Menu, MessageCircle, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";

const links = ["Home", "Products", "Services", "About", "Contact"];

function getSectionId(link: string) {
  return link === "Home" ? "top" : link.toLowerCase().replace(" ", "-");
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [pastBanner, setPastBanner] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateActiveLink = () => {
      if (!isHomePage) {
        setPastBanner(true);
        setActiveLink(pathname.startsWith("/products/") ? "Products" : "");
        return;
      }

      const activationLine =
        (headerRef.current?.getBoundingClientRect().height ?? 80) + 1;
      const banner = document.getElementById("hero");
      setPastBanner(
        Boolean(
          banner && banner.getBoundingClientRect().bottom <= activationLine,
        ),
      );
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

      if (
        window.scrollY > 0 &&
        window.scrollY + window.innerHeight >=
          document.documentElement.scrollHeight - 2
      ) {
        currentLink = "Contact";
      }
      setActiveLink(currentLink);
    };

    const updateFromHash = () => {
      const link = links.find(
        (item) => `#${getSectionId(item)}` === window.location.hash,
      );
      if (link) setActiveLink(link);
      else updateActiveLink();
    };

    updateActiveLink();
    updateFromHash();
    window.addEventListener("scroll", updateActiveLink, { passive: true });
    window.addEventListener("resize", updateActiveLink);
    window.addEventListener("hashchange", updateFromHash);

    return () => {
      window.removeEventListener("scroll", updateActiveLink);
      window.removeEventListener("resize", updateActiveLink);
      window.removeEventListener("hashchange", updateFromHash);
    };
  }, [isHomePage, pathname]);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-white/10 backdrop-blur-md transition-colors duration-300",
        pastBanner ? "bg-[#10245a]/95" : "bg-[#0b1938]/90",
      )}
    >
      <nav
        className="relative mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-2 px-3 sm:px-6 lg:px-8 xl:gap-8"
        aria-label="Main navigation"
      >
        <Link
          className="relative block h-12 w-36 shrink-0 overflow-hidden sm:w-48"
          href="/"
          onClick={() => {
            setActiveLink("Home");
            setOpen(false);
          }}
        >
          <Image
            className="object-contain object-left brightness-125 contrast-125 saturate-125 drop-shadow-lg"
            src="/aft-navbar-logo-clean.png"
            alt="AFT SOFT AND LIMITED"
            fill
            priority
            sizes="(min-width: 640px) 192px, 144px"
          />
        </Link>
        <div
          id="navbar-menu"
          className={cn(
            "absolute inset-x-0 top-full border-b border-blue-200/20 bg-blue-950 px-4 pb-5 shadow-xl sm:px-6 xl:static xl:flex xl:flex-1 xl:justify-end xl:items-center xl:gap-8 xl:border-0 xl:bg-transparent xl:p-0 xl:shadow-none",
            open ? "grid gap-4" : "hidden",
          )}
        >
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-center xl:gap-5">
            {links.map((link) => (
              <Link
                key={link}
                className={cn(
                  "relative whitespace-nowrap py-3 text-sm font-semibold transition-colors hover:text-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400 xl:py-7",
                  activeLink === link
                    ? "text-emerald-400 after:absolute after:bottom-1 after:left-0 after:h-0.5 after:w-7 after:bg-emerald-400 xl:after:bottom-4 xl:after:w-full"
                    : "text-slate-200",
                )}
                href={
                  isHomePage
                    ? `#${getSectionId(link)}`
                    : `/#${getSectionId(link)}`
                }
                aria-current={activeLink === link ? "location" : undefined}
                onClick={() => {
                  setActiveLink(link);
                  setOpen(false);
                }}
              >
                {link}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2 xl:justify-end">
            <div className="hidden items-center gap-2 xl:flex">
              <a
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-emerald-400/40 text-emerald-400 transition-colors hover:bg-emerald-400 hover:text-blue-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400"
                href="https://wa.me/8801323814588"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                title="WhatsApp"
                onClick={() => setOpen(false)}
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/30 text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400"
                href="tel:+8801323814588"
                aria-label="Call us"
                title="Call us"
                onClick={() => setOpen(false)}
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
            <Button
              className="h-11 bg-[#2458d3] px-4 text-sm font-bold text-white hover:bg-blue-700"
              href="#contact"
              onClick={() => {
                setActiveLink("Contact");
                setOpen(false);
              }}
            >
              Get a Quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-1 xl:hidden">
          <a
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-emerald-400/40 text-emerald-400 transition-colors hover:bg-emerald-400 hover:text-blue-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400"
            href="https://wa.me/8801323814588"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            title="WhatsApp"
            onClick={() => setOpen(false)}
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/30 text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400"
            href="tel:+8801323814588"
            aria-label="Call us"
            title="Call us"
            onClick={() => setOpen(false)}
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
          </a>
          <button
            id="menu-toggle"
            className=" inline-flex h-11 w-11 items-center justify-center justify-self-end rounded-lg text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400 xl:hidden"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="navbar-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
    </header>
  );
}

"use client";

import { ArrowRight, Play, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

const introVideoId = "1e5jqoQJBdY";
const introVideoUrl = `https://www.youtube.com/embed/${introVideoId}?autoplay=1&rel=0`;

export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  const videoTrigger = useRef<HTMLButtonElement>(null);
  const videoClose = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!videoOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    videoClose.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setVideoOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      videoTrigger.current?.focus();
    };
  }, [videoOpen]);

  return (
    <>
      <section
        id="hero"
        className="border-b border-blue-100 bg-blue-50 text-blue-950"
        aria-labelledby="hero-title"
      >
        <div className="site-container pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-44">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
            <div>
              <p className="text-xs font-semibold tracking-wide text-blue-700">
                Software &middot; SaaS &middot; IT Solutions
              </p>
              <h1
                id="hero-title"
                className="mt-5 text-[clamp(28px,7.9vw,56px)] font-bold leading-[1.15] tracking-[-0.04em] lg:text-[48px] xl:text-[54px]"
              >
                <span className="block">Building a</span>{" "}
                <span className="block whitespace-nowrap">
                  <span className="text-blue-700">Smarter</span>&nbsp;Tomorrow.
                </span>
              </h1>
              <p className="mt-6 max-w-lg text-base leading-[1.8] text-slate-600 sm:text-lg">
                Innovative IT solutions to help businesses grow, transform, and
                make a greater impact in the digital world.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <Button className="h-12 px-6" href="#contact">
                  Get Started <ArrowRight size={17} aria-hidden="true" />
                </Button>
                <button
                  className="inline-flex min-h-12 items-center gap-2.5 text-sm font-semibold text-slate-700 transition-colors hover:text-blue-700"
                  ref={videoTrigger}
                  type="button"
                  onClick={() => setVideoOpen(true)}
                >
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-blue-200 bg-white/60">
                    <Play
                      className="ml-0.5"
                      size={13}
                      fill="currentColor"
                      aria-hidden="true"
                    />
                  </span>
                  Watch Our Video
                </button>
              </div>
              <p className="mt-8 text-xs tracking-wide text-slate-500">
                Technology &middot; People &middot; Possibilities
              </p>
            </div>
            <div className="min-w-0">
              <div className="relative aspect-[4/3]">
                <Image
                  className="object-contain"
                  src="/porducts/hrm.png"
                  alt="AFT HRM product preview showing employee, attendance, and payroll management"
                  fill
                  priority
                  sizes="(min-width: 1280px) 560px, (min-width: 1024px) 48vw, 100vw"
                  quality={90}
                />
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-blue-200/70 pt-4 text-sm">
                <span className="font-semibold text-blue-950">
                  AFT HRM{" "}
                  <span className="font-normal text-slate-500">
                    / HR &amp; Payroll
                  </span>
                </span>
                <a
                  href="/products/hrm"
                  className="inline-flex min-h-10 items-center gap-2 font-semibold text-blue-700 hover:text-blue-900"
                >
                  View product <ArrowRight size={15} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {videoOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/75 px-4 py-6 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="AFT SOFT intro video"
          onClick={() => setVideoOpen(false)}
        >
          <span tabIndex={0} onFocus={() => videoClose.current?.focus()} />
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-lg border border-slate-700 bg-blue-950 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-md bg-blue-950/80 text-white transition-colors hover:bg-emerald-400 hover:text-blue-950"
              type="button"
              ref={videoClose}
              aria-label="Close video modal"
              onClick={() => setVideoOpen(false)}
            >
              <X size={20} />
            </button>

            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src={introVideoUrl}
                title="AFT SOFT AND LIMITED intro video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
          <span tabIndex={0} onFocus={() => videoClose.current?.focus()} />
        </div>
      ) : null}
    </>
  );
}

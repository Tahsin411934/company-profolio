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
        className="relative isolate overflow-hidden bg-[#0b1730] text-white"
        aria-labelledby="hero-title"
      >
        <div
          className="pointer-events-none absolute inset-y-0 left-8 hidden w-px bg-white/[0.04] lg:block"
          aria-hidden="true"
        />
        <div className="site-container relative pb-10 pt-32 sm:pb-14 sm:pt-36 lg:pb-16 lg:pt-40">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
            <div className="relative py-2 lg:py-8">
              <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300 sm:text-xs">
                <span
                  className="h-px w-7 shrink-0 bg-emerald-300/80"
                  aria-hidden="true"
                />
                Technology &middot; People &middot; Possibilities
              </p>
              <h1
                id="hero-title"
                className="mt-7 text-[clamp(28px,7.9vw,60px)] font-extrabold leading-[1.12] tracking-[-0.045em] lg:text-[72px] lg:leading-[1.06]"
              >
                <span className="block">Building a</span>{" "}
                <span className="block whitespace-nowrap lg:whitespace-normal">
                  <span className="text-emerald-300 lg:block">Smarter</span>{" "}
                  <span className="lg:block">
                    Tomorrow<span className="text-emerald-300">.</span>
                  </span>
                </span>
              </h1>
              <p className="mt-7 max-w-[440px] text-base leading-[1.8] text-slate-300 sm:text-lg">
                Innovative IT solutions to help businesses grow, transform, and
                make a greater impact in the digital world.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-5 sm:mt-10">
                <Button
                  className="group h-12 border border-blue-400/30 px-6 shadow-[0_4px_20px_rgba(37,88,211,0.15)]"
                  href="#contact"
                >
                  Get Started{" "}
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Button>
                <button
                  className="group inline-flex min-h-12 items-center gap-3 text-sm font-semibold text-slate-200 transition-colors hover:text-white"
                  ref={videoTrigger}
                  type="button"
                  onClick={() => setVideoOpen(true)}
                >
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-white/25 transition-colors group-hover:border-emerald-300 group-hover:bg-white/5">
                    <Play
                      className="ml-0.5"
                      size={14}
                      fill="currentColor"
                      aria-hidden="true"
                    />
                  </span>
                  Watch Our Video
                </button>
              </div>
            </div>

            <div className="relative min-w-0 lg:pl-3">
              <div
                className="absolute -inset-3 hidden rounded-[28px] border border-white/[0.07] lg:block"
                aria-hidden="true"
              />
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/15 bg-[#142540] sm:aspect-[16/10] lg:aspect-auto lg:h-[560px]">
                <Image
                  className="object-cover object-right"
                  src="/banner.png"
                  alt="AFT SOFT AND LIMITED branded technology workspace"
                  fill
                  priority
                  // Account for the wide source image being cropped into a tall frame.
                  // At 560px tall, object-cover scales the full image to about 1400px wide.
                  sizes="(min-width: 1024px) 1400px, (min-width: 640px) 156vw, 188vw"
                  quality={90}
                />
                <div
                  className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,23,48,0.05)_35%,rgba(11,23,48,0.92)_100%)]"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <span
                    className="mb-4 block h-px w-10 bg-emerald-300"
                    aria-hidden="true"
                  />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-300">
                    Ideas today
                  </p>
                  <p className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    A better tomorrow.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400 sm:text-xs lg:mt-16">
            <span>Software &middot; SaaS &middot; IT Solutions</span>
            <a
              href="#products"
              className="group inline-flex min-h-9 items-center gap-2 text-slate-300 transition-colors hover:text-emerald-300"
            >
              Explore our products{" "}
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
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

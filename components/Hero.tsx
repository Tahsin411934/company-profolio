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
        <div className="site-container pb-10 pt-28 sm:pb-12 sm:pt-32 lg:pb-14 lg:pt-32">
          <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
            <div>
              <p className="flex items-center gap-3 text-xs font-semibold tracking-wide text-blue-700">
                <span className="h-px w-6 bg-blue-600" aria-hidden="true" />
                Software &middot; SaaS &middot; IT Solutions
              </p>
              <h1
                id="hero-title"
                className="mt-5 text-[clamp(28px,7.9vw,56px)] font-bold leading-[1.12] tracking-[-0.035em] lg:text-[48px] xl:text-[54px]"
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
              <div className="mt-8 flex  gap-3 min-[480px]:flex-row min-[480px]:flex-wrap min-[480px]:items-center">
                <Button
                  className="group h-12 bg-gradient-to-r from-blue-700 to-indigo-600 px-6 shadow-md shadow-blue-700/15 transition-all duration-200 hover:-translate-y-0.5 hover:from-blue-800 hover:to-indigo-700 hover:shadow-lg hover:shadow-blue-700/20 focus-visible:ring-offset-4 focus-visible:ring-offset-blue-50"
                  href="#contact"
                >
                  Get Started{" "}
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Button>
                <button
                  className="group inline-flex h-12 items-center justify-center gap-3 rounded-lg border border-blue-300 bg-gradient-to-r from-white to-blue-100 px-5 text-sm font-bold text-blue-900 shadow-sm shadow-blue-900/5 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400 hover:from-blue-50 hover:to-indigo-100 hover:shadow-md hover:shadow-blue-900/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4 focus-visible:ring-offset-blue-50"
                  ref={videoTrigger}
                  type="button"
                  aria-haspopup="dialog"
                  onClick={() => setVideoOpen(true)}
                >
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
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
              {/* Crop only the source image's transparent margins, keeping the full product visible. */}
              <div className="relative aspect-[1504/836] overflow-hidden">
                <div className="absolute -left-[1.26%] -top-[15.91%] h-[122.49%] w-[102.13%]">
                  <Image
                    className="object-contain"
                    src="/porducts/ecommerce.png"
                    alt="E-commerce storefront preview on desktop and mobile"
                    fill
                    priority
                    sizes="(min-width: 1280px) 560px, (min-width: 1024px) 48vw, 100vw"
                    quality={90}
                  />
                </div>
              </div>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 rounded-xl border border-blue-100 bg-white/75 px-4 py-3 text-sm">
                <span className="font-semibold text-blue-950">
                  E-commerce{" "}
                  <span className="font-normal text-slate-500">
                    / Online Store
                  </span>
                </span>
                <a
                  href="/products/ecommerce"
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
              className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-lg border border-white/20 bg-gradient-to-br from-blue-800 to-slate-950 text-white transition-colors hover:from-blue-700 hover:to-indigo-900"
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

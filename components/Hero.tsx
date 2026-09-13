"use client";

import { ArrowRight, Play, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";

const introVideoId = "1e5jqoQJBdY";
const introVideoUrl = `https://www.youtube.com/embed/${introVideoId}?autoplay=1&rel=0`;

export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <section
        id="hero"
        className="relative min-h-[680px] overflow-hidden bg-blue-950 text-white max-[1024px]:min-h-[640px] max-[640px]:min-h-screen"
        aria-labelledby="hero-title"
      >
        <Image
          className="object-cover object-right max-[768px]:object-[62%_center] max-[540px]:object-[65%_center]"
          src="/banner.png"
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.98)_0%,rgba(8,47,73,0.9)_30%,rgba(8,47,73,0.6)_48%,rgba(2,6,23,0.18)_70%,rgba(2,6,23,0.05)_100%)] max-[768px]:bg-[linear-gradient(90deg,rgba(2,6,23,0.98)_0%,rgba(8,47,73,0.92)_48%,rgba(2,6,23,0.42)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:min-h-[700px] lg:px-8 max-[1024px]:min-h-[640px] max-[640px]:min-h-screen max-[540px]:py-20">
          <div className="w-full max-w-xl lg:max-w-2xl">
            <div className="mb-7">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-300 md:text-sm md:tracking-[0.3em]">
                Technology&nbsp;&nbsp; People&nbsp;&nbsp; Possibilities
              </p>
              <span className="mt-4 block h-[2px] w-10 bg-emerald-400" />
            </div>

            <h1
              id="hero-title"
              className="max-w-2xl text-3xl font-extrabold leading-[1.05] tracking-tight text-white md:text-5xl xl:text-5xl max-[540px]:text-4xl"
            >
              Building a
              <span className="block">
                <span className="text-emerald-400">Smarter</span> Tomorrow
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-300 md:text-lg">
              Innovative IT solutions to help businesses grow, transform, and
              make a greater impact in the digital world.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5 max-[540px]:items-start">
              <Button
                className="min-h-14 rounded-lg bg-emerald-400 px-7 py-4 font-semibold text-blue-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-300"
                href="#contact"
              >
                Get Started <ArrowRight size={18} />
              </Button>

              <button
                className="group inline-flex items-center gap-3 border-0 bg-transparent p-0 text-sm font-medium text-white transition-colors duration-300 hover:text-emerald-300 md:text-base"
                type="button"
                onClick={() => setVideoOpen(true)}
              >
                <span className="grid h-11 w-11 place-items-center rounded-full border border-blue-400/70 transition-colors duration-300 group-hover:border-emerald-400">
                  <Play
                    className="ml-0.5 text-blue-100"
                    size={17}
                    fill="currentColor"
                  />
                </span>
                Watch Our Video
              </button>
            </div>
          </div>

          <div className="absolute bottom-10 left-4 sm:left-6 lg:left-8 max-[540px]:bottom-7">
            <span className="mb-4 block h-[2px] w-9 bg-emerald-400" />
            <p className="text-[10px] uppercase leading-relaxed tracking-[0.3em] text-slate-400 md:text-xs max-[540px]:text-[9px]">
              IDEAS TODAY
              <br />
              A BETTER TOMORROW
            </p>
          </div>
        </div>
      </section>

      {videoOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-blue-950/10 px-4 py-6 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="AFT SOFT intro video"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-lg border border-slate-700 bg-blue-950 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-md bg-blue-950/80 text-white transition-colors hover:bg-emerald-400 hover:text-blue-950"
              type="button"
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
        </div>
      ) : null}
    </>
  );
}

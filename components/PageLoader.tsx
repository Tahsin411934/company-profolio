"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const logoVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const textVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          className="fixed inset-0 z-[999] grid place-items-center overflow-hidden bg-blue-950 px-5 text-white"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.35,
              ease: "easeOut",
            },
          }}
        >
          <motion.div
            className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(52,211,153,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(52,211,153,0.14)_1px,transparent_1px)] [background-size:48px_48px]"
            animate={{
              backgroundPosition: ["0px 0px", "48px 48px"],
            }}
            transition={{
              duration: 6,
              ease: "linear",
              repeat: Infinity,
            }}
          />

          <motion.div
            className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/10 blur-3xl"
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.35, 0.55, 0.35],
            }}
            transition={{
              duration: 2.4,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />

          <div className="relative z-10 flex w-full max-w-2xl flex-col items-center text-center">
            <motion.div
              className="relative grid h-32 w-80 place-items-center rounded-2xl border border-white/10 bg-white/[0.03] px-6 shadow-2xl shadow-emerald-400/10 backdrop-blur-sm sm:h-40 sm:w-[460px] md:h-48 md:w-[580px]"
              variants={logoVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.18),transparent_62%)]" />
              <div className="relative h-24 w-72 drop-shadow-[0_0_34px_rgba(255,255,255,0.2)] sm:h-32 sm:w-[420px] md:h-40 md:w-[520px]">
                <Image
                  className="object-contain brightness-150 contrast-125 saturate-150 [mix-blend-mode:screen]"
                  src="/aft-logo.png"
                  alt="AFT SOFT AND LIMITED"
                  fill
                  priority
                  sizes="(min-width: 768px) 520px, (min-width: 640px) 420px, 288px"
                />
              </div>
            </motion.div>

            <motion.h2
              className="mt-8 text-xl font-extrabold tracking-tight text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.18)] sm:text-2xl md:text-3xl"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={0.18}
            >
              AFT SOFT AND LIMITED
            </motion.h2>

            <motion.p
              className="mt-3 text-[10px] font-normal uppercase tracking-[0.28em] text-slate-300 drop-shadow-[0_0_14px_rgba(52,211,153,0.18)] sm:text-xs"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={0.34}
            >
              Technology | People | Possibilities
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

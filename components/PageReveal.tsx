"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

type PageRevealProps = {
  children: ReactNode;
};

export function PageReveal({ children }: PageRevealProps) {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.985,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 2.18,
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>

      <motion.div
        className="pointer-events-none fixed inset-0 z-[998] overflow-hidden bg-blue-950"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{
          delay: 2,
          duration: 0.85,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <div className="absolute inset-x-0 bottom-0 h-px bg-emerald-400 shadow-[0_0_22px_rgba(52,211,153,0.9)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.12),transparent_55%)]" />
      </motion.div>
    </>
  );
}

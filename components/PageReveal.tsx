"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

type PageRevealProps = {
  children: ReactNode;
};

export function PageReveal({ children }: PageRevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
        filter: "blur(8px)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        delay: 2.05,
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

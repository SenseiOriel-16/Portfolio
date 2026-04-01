"use client";

import { motion } from "framer-motion";

/**
 * Soft, low-contrast backdrop — no code rain or busy motion.
 */
export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.12] dark:opacity-[0.08]"
        style={{
          maskImage:
            "radial-gradient(ellipse 85% 70% at 50% 45%, black 20%, transparent 75%)",
        }}
      />
      <motion.div
        className="absolute -left-1/4 top-0 h-[120%] w-[150%] bg-[length:200%_200%] opacity-50 dark:opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(125deg, rgb(var(--accent) / 0.06) 0%, transparent 45%, rgb(var(--accent-dim) / 0.05) 60%, transparent 80%)",
        }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        aria-hidden
      />
      <div
        className="absolute right-[-15%] top-[20%] h-80 w-80 rounded-full bg-accent/[0.07] blur-[100px] dark:bg-accent/[0.09]"
        aria-hidden
      />
      <div
        className="absolute bottom-[10%] left-[10%] h-72 w-72 rounded-full bg-slate-400/[0.06] blur-[90px] dark:bg-slate-500/[0.08]"
        aria-hidden
      />
    </div>
  );
}

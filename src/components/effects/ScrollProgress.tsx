"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin top-of-viewport bar tied to document scroll (smoothed). */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.15,
  });

  return (
    <div
      className="pointer-events-none fixed left-0 right-0 top-0 z-[100] h-1 bg-foreground/10 dark:bg-white/10"
      aria-hidden
    >
      <motion.div
        className="h-full bg-gradient-to-r from-accent-dim to-accent"
        style={{ scaleX, transformOrigin: "0 50%" }}
      />
    </div>
  );
}

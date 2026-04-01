"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const SIZE = 280;

/**
 * Soft radial glow that follows the pointer for a subtle “studio” feel.
 * Reduced on coarse pointers (touch) via CSS media query.
 */
export function CursorGlow() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.4 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX - SIZE / 2);
      y.set(e.clientY - SIZE / 2);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 hidden md:block [@media(pointer:coarse)]:hidden"
      style={{ mixBlendMode: "screen" }}
    >
      <motion.div
        className="absolute rounded-full opacity-40 dark:opacity-25"
        style={{
          width: SIZE,
          height: SIZE,
          left: springX,
          top: springY,
          background:
            "radial-gradient(circle, rgb(var(--glow) / 0.35) 0%, transparent 70%)",
          filter: "blur(2px)",
        }}
      />
    </motion.div>
  );
}

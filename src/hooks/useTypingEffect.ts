"use client";

import { useEffect, useState } from "react";

/**
 * Cycles through strings with a typewriter-style reveal and pause.
 */
export function useTypingEffect(
  phrases: string[],
  typingSpeed = 55,
  pauseMs = 2200,
) {
  const [display, setDisplay] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const target = phrases[phraseIndex % phrases.length];
    let i = 0;
    let cancelled = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const schedule = (fn: () => void, ms: number) => {
      const id = setTimeout(() => {
        if (!cancelled) fn();
      }, ms);
      timeouts.push(id);
    };

    const tick = () => {
      if (cancelled) return;
      if (i <= target.length) {
        setDisplay(target.slice(0, i));
        i += 1;
        schedule(tick, typingSpeed);
      } else {
        schedule(() => setPhraseIndex((p) => (p + 1) % phrases.length), pauseMs);
      }
    };

    setDisplay("");
    tick();

    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, [phraseIndex, phrases, typingSpeed, pauseMs]);

  return display;
}

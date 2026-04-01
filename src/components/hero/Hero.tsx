"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { site } from "@/data/site";
import { HeroBackground } from "./HeroBackground";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0.2]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const firstName = site.name.split(/\s+/)[0] ?? site.name;
  const imageSrc = site.heroImage?.trim() || site.about.portrait?.trim() || "";
  const initial = site.name.charAt(0).toUpperCase();

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-screen flex-col justify-center px-4 pt-24 sm:px-6 lg:px-8"
    >
      <HeroBackground />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1fr_minmax(260px,380px)] lg:gap-14"
      >
        <div className="order-2 min-w-0 lg:order-1">
          <motion.p
            className="text-sm font-medium tracking-wide text-foreground/45"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hello — I&apos;m {firstName}
          </motion.p>

          <motion.h1
            className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[3.25rem] lg:leading-[1.08]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            {site.name}
          </motion.h1>

          <motion.p
            className="mt-4 max-w-xl text-lg text-foreground/65 sm:text-xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            {site.title}
          </motion.p>

          <motion.p
            className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/50 sm:text-lg"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {site.tagline}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
          >
            <motion.button
              type="button"
              onClick={() => scrollTo("projects")}
              className="rounded-xl bg-accent px-6 py-3 text-sm font-medium text-white shadow-md shadow-accent/15 transition-colors hover:bg-accent-dim"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View projects
            </motion.button>
            <motion.button
              type="button"
              onClick={() => scrollTo("contact")}
              className="rounded-xl border border-foreground/15 bg-foreground/[0.03] px-6 py-3 text-sm font-medium text-foreground/90 transition hover:border-foreground/25 hover:bg-foreground/[0.06] dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-white/15 dark:hover:bg-white/[0.06]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact
            </motion.button>
          </motion.div>

          <motion.div
            className="mt-14 h-px max-w-md bg-gradient-to-r from-foreground/15 via-foreground/8 to-transparent dark:from-white/12 dark:via-white/6"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left" }}
            aria-hidden
          />
        </div>

        <motion.div
          className="order-1 flex justify-center lg:order-2 lg:justify-end"
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-[4/5] w-full max-w-[320px] sm:max-w-[360px]">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/25 via-accent/5 to-transparent blur-sm dark:from-accent/30" />
            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/20 bg-surface-muted/40 shadow-2xl shadow-black/20 dark:border-white/10 dark:bg-surface/50 dark:shadow-black/50">
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={site.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 80vw, 380px"
                  priority
                />
              ) : (
                <div
                  className="flex h-full w-full items-center justify-center bg-gradient-to-br from-surface-muted to-accent/10 dark:from-surface dark:to-accent/15"
                  aria-hidden
                >
                  <span className="font-mono text-7xl font-semibold text-accent/40 dark:text-accent/50">
                    {initial}
                  </span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ delay: 1 }}
        aria-hidden
      >
        <motion.div
          className="h-8 w-5 rounded-full border border-foreground/20"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="mx-auto mt-1.5 h-1 w-1 rounded-full bg-foreground/35" />
        </motion.div>
      </motion.div>
    </section>
  );
}

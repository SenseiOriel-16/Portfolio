"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { site } from "@/data/site";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Intro, highlights, and focus chips */
export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section
      ref={ref}
      id="about"
      className="relative scroll-mt-28 px-4 py-24 sm:px-6 lg:px-8"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{ y: bgY }}
        aria-hidden
      >
        <div className="absolute left-1/4 top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      </motion.div>

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="A little about me"
          subtitle="CS-trained, open-minded about roles—what I bring is consistency, clarity, and adaptability."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="p-6 sm:p-8">
              <p className="text-lg leading-relaxed text-foreground/85">
                {site.about.intro}
              </p>
              <ul className="mt-6 space-y-3">
                {site.about.highlights.map((line, idx) => (
                  <motion.li
                    key={line}
                    className="flex items-start gap-3 text-foreground/75"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {line}
                  </motion.li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>

          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <GlassCard className="h-full p-6 sm:p-8">
              {site.about.portrait?.trim() ? (
                <div className="relative mx-auto mb-6 aspect-square w-full max-w-[200px] overflow-hidden rounded-2xl border border-white/10 bg-surface-muted/30 shadow-inner dark:border-white/5">
                  <Image
                    src={site.about.portrait.trim()}
                    alt={site.name}
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>
              ) : null}
              <h3 className="text-sm font-medium uppercase tracking-wider text-accent">
                Strengths at a glance
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {site.techChips.map((chip, i) => (
                  <motion.span
                    key={chip}
                    className="rounded-lg border border-white/10 bg-surface-muted/40 px-3 py-1.5 text-sm text-foreground/80 dark:border-white/5"
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    whileHover={{ scale: 1.04, borderColor: "rgb(var(--accent) / 0.4)" }}
                  >
                    {chip}
                  </motion.span>
                ))}
              </div>

              <div className="mt-8 space-y-4">
                <p className="text-xs font-medium uppercase tracking-wider text-foreground/50">
                  Focus areas
                </p>
                {[
                  { label: "Organization & follow-through", value: 90 },
                  { label: "Clear communication", value: 88 },
                  { label: "Teamwork & service mindset", value: 86 },
                ].map((bar) => (
                  <div key={bar.label}>
                    <div className="mb-1 flex justify-between text-xs text-foreground/60">
                      <span>{bar.label}</span>
                      <span>{bar.value}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-surface-muted">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-accent-dim to-accent"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${bar.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

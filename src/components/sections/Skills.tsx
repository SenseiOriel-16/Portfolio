"use client";

import { motion } from "framer-motion";
import { useId } from "react";
import { skillCategories } from "@/data/site";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Category skill bars + circular-style scores for visual variety */
export function Skills() {
  type SkillRow = { name: string; value: number };
  const categories = Object.entries(skillCategories) as [keyof typeof skillCategories, readonly SkillRow[]][];

  return (
    <section id="skills" className="scroll-mt-28 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills"
          subtitle="Transferable strengths first—plus technical skills when the role needs them."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {categories.map(([title, skills], catIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: catIndex * 0.05 }}
            >
              <GlassCard className="h-full p-6">
                <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                <ul className="mt-5 space-y-4">
                  {skills.map((s) => (
                    <li key={s.name}>
                      <div className="mb-1 flex justify-between text-sm">
                        <span className="text-foreground/80">{s.name}</span>
                        <span className="font-mono text-xs text-foreground/50">
                          {s.value}%
                        </span>
                      </div>
                      <div className="h-2.5 overflow-hidden rounded-full bg-surface-muted">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-accent/80 to-accent"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.value}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.1,
                            delay: 0.1,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex justify-center gap-6 border-t border-white/10 pt-6 dark:border-white/5">
                  {skills.slice(0, 3).map((s, i) => (
                    <CircularGauge
                      key={s.name}
                      value={s.value}
                      delay={i * 0.1}
                      title={title}
                    />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CircularGauge({
  value,
  delay,
  title,
}: {
  value: number;
  delay: number;
  title: string;
}) {
  const gradId = useId();
  const circumference = 2 * Math.PI * 36;
  const offset = circumference - (value / 100) * circumference;
  const safeId = gradId.replace(/:/g, "");

  return (
    <motion.div
      className="relative h-24 w-24"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      title={`${title}: ${value}%`}
    >
      <svg className="-rotate-90" viewBox="0 0 80 80" aria-hidden>
        <circle
          cx="40"
          cy="40"
          r="36"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          className="text-surface-muted"
        />
        <motion.circle
          cx="40"
          cy="40"
          r="36"
          fill="none"
          stroke={`url(#${safeId})`}
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <defs>
          <linearGradient id={safeId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(var(--accent-dim))" />
            <stop offset="100%" stopColor="rgb(var(--accent))" />
          </linearGradient>
        </defs>
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-foreground">
        {value}
      </span>
    </motion.div>
  );
}

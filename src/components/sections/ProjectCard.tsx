"use client";

import { motion, useSpring } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import type { Project } from "@/data/site";

type Props = { project: Project; index: number };

const MAX_TILT = 14;

/**
 * Project card with spring-based 3D tilt following pointer (mouse only).
 */
export function ProjectCard({ project, index }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(0, { stiffness: 280, damping: 28, mass: 0.4 });
  const rotateY = useSpring(0, { stiffness: 280, damping: 28, mass: 0.4 });

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 2 * MAX_TILT);
    rotateX.set(-py * 2 * MAX_TILT);
  };

  const onPointerLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.article
      className="group relative"
      style={{ perspective: 1200 }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
    >
      <motion.div
        ref={ref}
        className="relative h-full [@media(hover:hover)]:cursor-pointer"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
      >
        <div
          className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-surface/35 shadow-lg shadow-black/5 backdrop-blur-xl transition-shadow duration-300 dark:border-white/5 dark:shadow-black/40"
          style={{ transform: "translateZ(0)" }}
        >
          {project.image ? (
            <div className="relative aspect-[16/10] w-full shrink-0 border-b border-white/10 bg-surface-muted/30 dark:border-white/5">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ) : null}
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(ellipse 120% 80% at 50% 0%, rgb(var(--glow) / 0.15), transparent 55%)",
              boxShadow: "inset 0 1px 0 0 rgb(255 255 255 / 0.06)",
            }}
            aria-hidden
          />

          <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 group-hover:shadow-[0_0_48px_-12px_rgb(var(--glow)/0.5)]" />

          <div className="relative z-10 p-6" style={{ transform: "translateZ(32px)" }}>
            <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/70">
              {project.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-md bg-accent/10 px-2 py-0.5 font-mono text-xs text-accent"
                >
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3 opacity-100 transition md:opacity-0 md:group-hover:opacity-100">
              <motion.a
                href={project.overviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-surface-muted/50 px-4 py-2 text-sm font-medium text-foreground transition hover:border-accent/40 hover:text-accent dark:border-white/10"
                whileTap={{ scale: 0.98 }}
                style={{ transform: "translateZ(48px)" }}
              >
                Overview
              </motion.a>
              <motion.a
                href={project.visitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white shadow-md shadow-accent/20 transition hover:bg-accent-dim"
                whileTap={{ scale: 0.98 }}
                style={{ transform: "translateZ(48px)" }}
              >
                Visit
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

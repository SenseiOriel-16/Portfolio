"use client";

import { motion } from "framer-motion";
import { timeline } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

const typeLabel: Record<(typeof timeline)[number]["type"], string> = {
  education: "Education",
  work: "Experience",
  program: "Program",
  internship: "Internship",
};

/** Vertical timeline for education, internship, and bootcamp */
export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-28 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Journey"
          title="Experience & education"
          subtitle="Internships, programs, and degree — in chronological flow."
        />

        <div className="relative">
          <div
            className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-accent/20 to-transparent md:left-1/2 md:-ml-px"
            aria-hidden
          />

          <ul className="space-y-12">
            {timeline.map((item, index) => (
              <motion.li
                key={item.id}
                className={`relative flex flex-col gap-4 md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <div className="flex-1 md:w-1/2 md:px-8" />
                <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-accent bg-background md:left-1/2 md:-ml-3">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                </div>
                <div
                  className={`flex-1 pl-10 md:w-1/2 md:pl-0 md:pr-8 ${
                    index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                  }`}
                >
                  <span className="font-mono text-xs uppercase tracking-wider text-accent">
                    {typeLabel[item.type]}
                  </span>
                  <p className="mt-1 text-sm text-foreground/55">{item.period}</p>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-foreground/70">{item.org}</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                    {item.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

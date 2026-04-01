"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { navLinks, site } from "@/data/site";

const MotionLink = motion.create(Link, { forwardMotionProps: true });

export function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => setMounted(true), []);

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 24);
  });

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const scrollTo = (href: string) => {
    setOpen(false);
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <ScrollProgress />
      <header className="fixed left-0 right-0 top-1 z-50 px-4 pt-3 sm:px-6 sm:pt-4 lg:px-8">
        <motion.nav
          className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border border-white/20 bg-background/55 px-4 py-3 shadow-xl shadow-black/10 backdrop-blur-2xl backdrop-saturate-150 dark:border-white/10 dark:bg-background/45 dark:shadow-black/50"
          aria-label="Primary"
          animate={{
            y: scrolled ? 2 : 0,
            boxShadow: scrolled
              ? "0 25px 50px -12px rgb(0 0 0 / 0.25), 0 0 0 1px rgb(255 255 255 / 0.06)"
              : "0 10px 40px -10px rgb(0 0 0 / 0.15), 0 0 0 1px rgb(255 255 255 / 0.08)",
          }}
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
        >
          <MotionLink
            href="#hero"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              scrollTo("#hero");
            }}
            className="group relative inline-flex items-baseline font-semibold tracking-tight text-foreground"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <span className="transition-colors group-hover:text-accent">
              {site.name.split(" ")[0]}
            </span>
            <span className="text-accent transition-transform duration-200 group-hover:scale-110">.</span>
            <span
              className="absolute -bottom-0.5 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-accent transition-transform duration-200 ease-out group-hover:scale-x-100"
              aria-hidden
            />
          </MotionLink>

          <ul className="hidden items-center gap-0.5 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <motion.button
                  type="button"
                  onClick={() => scrollTo(link.href)}
                  className="group relative px-3 py-2 text-sm text-foreground/70 transition-colors hover:text-foreground"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 420, damping: 22 }}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span
                    className="absolute inset-x-2 bottom-1 h-0.5 origin-center scale-x-0 rounded-full bg-accent/90 transition-transform duration-200 ease-out group-hover:scale-x-100"
                    aria-hidden
                  />
                  <span
                    className="absolute inset-0 -z-0 rounded-lg bg-white/0 transition-colors duration-200 group-hover:bg-white/10 dark:group-hover:bg-white/[0.07]"
                    aria-hidden
                  />
                </motion.button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            {mounted && (
              <motion.button
                type="button"
                onClick={toggleTheme}
                className="rounded-xl border border-white/15 bg-white/10 p-2.5 text-foreground/80 backdrop-blur-md transition hover:border-accent/35 hover:text-accent dark:border-white/10 dark:bg-white/5"
                whileHover={{ scale: 1.06, y: -1 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                {resolvedTheme === "dark" ? (
                  <SunIcon className="h-5 w-5" />
                ) : (
                  <MoonIcon className="h-5 w-5" />
                )}
              </motion.button>
            )}

            <motion.button
              type="button"
              className="rounded-xl border border-white/15 bg-white/10 p-2.5 backdrop-blur-md dark:border-white/10 dark:bg-white/5 md:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-label="Menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.94 }}
            >
              <MenuIcon open={open} />
            </motion.button>
          </div>
        </motion.nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/15 bg-background/80 p-4 shadow-2xl backdrop-blur-2xl backdrop-saturate-150 dark:border-white/10 dark:bg-background/75 md:hidden"
            >
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <motion.button
                      type="button"
                      className="group relative w-full rounded-lg px-3 py-3 text-left text-sm text-foreground/80 transition-colors hover:text-foreground"
                      onClick={() => scrollTo(link.href)}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10">{link.label}</span>
                      <span
                        className="absolute inset-y-1 left-0 w-0.5 origin-top scale-y-0 rounded-full bg-accent transition-transform duration-200 group-hover:scale-y-100"
                        aria-hidden
                      />
                      <span
                        className="absolute inset-0 rounded-lg bg-white/0 transition-colors group-hover:bg-white/10 dark:group-hover:bg-white/5"
                        aria-hidden
                      />
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
      />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
      />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      {open ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
      )}
    </svg>
  );
}

"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { site } from "@/data/site";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Form submits via mailto: — opens the visitor’s mail app addressed to site.email (Gmail). */
export function Contact() {
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      /* ignore */
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !email || !message) return;

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
    form.reset();
    window.setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="scroll-mt-28 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Let’s talk"
          title="Contact"
          subtitle="Reach me on Gmail, by phone, or on Facebook—or send a message below and it goes straight to my Gmail."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <GlassCard className="p-6 sm:p-8">
              <p className="mb-4 text-sm text-foreground/65">
                Messages are sent directly to{" "}
                <span className="font-medium text-foreground">{site.email}</span> using your email app.
              </p>
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm text-foreground/70">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    className="w-full rounded-xl border border-white/10 bg-surface-muted/40 px-4 py-3 text-foreground outline-none transition focus:border-accent/50 focus:ring-2 focus:ring-accent/20 dark:border-white/10"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm text-foreground/70">
                    Your email (for my reply)
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full rounded-xl border border-white/10 bg-surface-muted/40 px-4 py-3 text-foreground outline-none transition focus:border-accent/50 focus:ring-2 focus:ring-accent/20 dark:border-white/10"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm text-foreground/70">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full resize-y rounded-xl border border-white/10 bg-surface-muted/40 px-4 py-3 text-foreground outline-none transition focus:border-accent/50 focus:ring-2 focus:ring-accent/20 dark:border-white/10"
                    placeholder="Tell me about your project or role…"
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full rounded-xl bg-accent py-3 text-sm font-medium text-white shadow-lg shadow-accent/25 transition hover:bg-accent-dim"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  Send to Gmail
                </motion.button>
                {sent && (
                  <p className="text-center text-sm text-accent" role="status">
                    Opening your email app to {site.email}…
                  </p>
                )}
              </form>
            </GlassCard>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center gap-6"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <GlassCard className="p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-foreground">Contact me</h3>
              <p className="mt-2 text-sm text-foreground/65">
                Gmail, phone, or Facebook—pick what works for you.
              </p>
              <ul className="mt-6 flex flex-wrap items-center gap-3">
                <SocialLink href={`mailto:${site.email}`} label="Gmail" />
                <motion.button
                  type="button"
                  onClick={copyEmail}
                  className="rounded-xl border border-white/10 bg-surface/40 px-5 py-3 text-sm font-medium text-foreground transition hover:border-accent/40 hover:text-accent dark:border-white/10"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {copied ? "Copied!" : "Copy email"}
                </motion.button>
                {site.phone.trim() ? (
                  <SocialLink href={`tel:${site.phone.replace(/\s/g, "")}`} label="Phone" />
                ) : null}
                {site.social.facebook.trim() ? (
                  <SocialLink href={site.social.facebook} label="Facebook" />
                ) : null}
              </ul>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      className="rounded-xl border border-white/10 bg-surface/40 px-5 py-3 text-sm font-medium text-foreground transition hover:border-accent/40 hover:text-accent dark:border-white/10"
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {label}
    </motion.a>
  );
}

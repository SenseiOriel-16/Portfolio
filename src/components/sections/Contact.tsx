"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { site } from "@/data/site";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Contact form opens the visitor’s mail client with a prefilled message. */
export function Contact() {
  const [sent, setSent] = useState(false);

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
          subtitle="Reach out for opportunities, collaborations, or just to say hello."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <GlassCard className="p-6 sm:p-8">
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
                    Email
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
                  Send message
                </motion.button>
                {sent && (
                  <p className="text-center text-sm text-accent" role="status">
                    Opening your email app…
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
              <h3 className="text-lg font-semibold text-foreground">Connect</h3>
              <p className="mt-2 text-sm text-foreground/65">
                Prefer another channel? Use the links below.
              </p>
              <ul className="mt-6 flex flex-wrap gap-3">
                {site.social.website.trim() ? (
                  <SocialLink href={site.social.website} label="Website" />
                ) : null}
                {site.social.messenger.trim() ? (
                  <SocialLink href={site.social.messenger} label="Messenger" />
                ) : null}
                {site.social.instagram.trim() ? (
                  <SocialLink href={site.social.instagram} label="Instagram" />
                ) : null}
                {site.phone.trim() ? <SocialLink href={`tel:${site.phone}`} label="Phone" /> : null}
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

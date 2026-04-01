"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type ApiRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
};

type Props = { username: string };

/**
 * Fetches public repos from our API route (server-side proxy + cache).
 * Fails silently if env is unset or rate-limited — portfolio still works.
 */
export function GitHubProjectGrid({ username }: Props) {
  const [repos, setRepos] = useState<ApiRepo[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!username?.trim()) return;
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`/api/github/repos?user=${encodeURIComponent(username)}`);
        if (!res.ok) throw new Error("bad response");
        const data = (await res.json()) as ApiRepo[];
        if (!cancelled) setRepos(Array.isArray(data) ? data : []);
      } catch {
        if (!cancelled) {
          setError(true);
          setRepos([]);
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [username]);

  if (!username?.trim()) return null;

  if (error || (repos && repos.length === 0)) return null;

  if (!repos) {
    return (
      <p className="mt-12 text-center text-sm text-foreground/50">
        Loading GitHub projects…
      </p>
    );
  }

  return (
    <div className="mt-16">
      <motion.h3
        className="mb-6 text-center font-mono text-sm uppercase tracking-[0.2em] text-foreground/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        From GitHub
      </motion.h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {repos.slice(0, 6).map((r, i) => (
          <motion.a
            key={r.id}
            href={r.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/10 bg-surface/30 p-4 backdrop-blur-md transition hover:border-accent/35 hover:shadow-lg hover:shadow-accent/10 dark:border-white/5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.02 }}
          >
            <p className="font-medium text-foreground">{r.name}</p>
            <p className="mt-1 line-clamp-2 text-sm text-foreground/65">
              {r.description || "No description"}
            </p>
            {r.topics?.length ? (
              <p className="mt-2 font-mono text-xs text-accent/80">
                {r.topics.slice(0, 4).join(" · ")}
              </p>
            ) : null}
          </motion.a>
        ))}
      </div>
    </div>
  );
}

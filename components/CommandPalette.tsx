"use client";

import { useEffect, useMemo, useState } from "react";
import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon, MailIcon, DocIcon, ArrowUpIcon } from "./icons";

type Command = {
  id: string;
  label: string;
  hint?: string;
  icon: React.ReactNode;
  run: () => void;
};

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const commands: Command[] = useMemo(() => {
    const go = (hash: string) => () => {
      setOpen(false);
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    };
    const openUrl = (url: string) => () => {
      setOpen(false);
      window.open(url, "_blank", "noopener,noreferrer");
    };
    return [
      { id: "top", label: "Go to top", icon: <ArrowUpIcon className="h-4 w-4" />, run: go("#top") },
      { id: "experience", label: "Experience", icon: <span className="text-xs">›</span>, run: go("#experience") },
      { id: "education", label: "Education", icon: <span className="text-xs">›</span>, run: go("#education") },
      { id: "projects", label: "Projects", icon: <span className="text-xs">›</span>, run: go("#projects") },
      { id: "publications", label: "Publications", icon: <span className="text-xs">›</span>, run: go("#publications") },
      { id: "resume", label: "Open résumé", hint: "PDF", icon: <DocIcon className="h-4 w-4" />, run: openUrl(profile.resumeUrl) },
      { id: "github", label: "GitHub", hint: "External", icon: <GithubIcon className="h-4 w-4" />, run: openUrl(profile.socials.github) },
      { id: "linkedin", label: "LinkedIn", hint: "External", icon: <LinkedinIcon className="h-4 w-4" />, run: openUrl(profile.socials.linkedin) },
      { id: "email", label: "Email me", hint: profile.email, icon: <MailIcon className="h-4 w-4" />, run: openUrl(profile.socials.email) },
    ];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) => c.label.toLowerCase().includes(q));
  }, [commands, query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    setActive(0);
  }, [query, open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function onListKey(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      filtered[active]?.run();
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background)]/80 px-3.5 py-2 text-xs text-muted shadow-lg backdrop-blur transition-colors hover:border-accent hover:text-foreground"
        aria-label="Open command palette"
      >
        press <span className="kbd">⌘ K</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 px-4 pt-[18vh] backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-md overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--background)] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={onListKey}
          >
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command or search…"
              className="w-full border-b border-[var(--border)] bg-transparent px-4 py-3.5 text-sm text-foreground outline-none placeholder:text-muted-2"
            />
            <ul className="max-h-72 overflow-y-auto p-2">
              {filtered.length === 0 && (
                <li className="px-3 py-6 text-center text-sm text-muted-2">
                  No results
                </li>
              )}
              {filtered.map((c, i) => (
                <li key={c.id}>
                  <button
                    onMouseEnter={() => setActive(i)}
                    onClick={c.run}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                      i === active
                        ? "bg-[var(--accent-glow)] text-foreground"
                        : "text-muted"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-accent">{c.icon}</span>
                      {c.label}
                    </span>
                    {c.hint && (
                      <span className="text-xs text-muted-2">{c.hint}</span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

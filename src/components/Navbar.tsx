"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import BrandMark from "./BrandMark";

const links = [
  { href: "#how", label: "How it works" },
  { href: "#tools", label: "Tools" },
  { href: "#privacy", label: "Privacy" },
  { href: "#screens", label: "Screens" },
  { href: "#new", label: "What's new" },
  { href: "/updates", label: "Updates" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 12);
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <div
        className={`relative mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-5 ${
          scrolled || open
            ? "border border-black/5 bg-white/80 shadow-card backdrop-blur-xl"
            : "border border-transparent bg-transparent"
        }`}
      >
        <a href="#top" aria-label="Doc Scanner home">
          <BrandMark />
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-black/[0.04] hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#download"
          className="group hidden items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          Get the app
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-xl p-2 text-zinc-700 hover:bg-black/5 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* scroll progress */}
        <span
          aria-hidden
          className="absolute bottom-0 left-4 right-4 h-[2px] origin-left rounded-full bg-brand transition-opacity"
          style={{ transform: `scaleX(${progress})`, opacity: scrolled ? 1 : 0 }}
        />
      </div>

      {open && (
        <div className="mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-2xl border border-black/5 bg-white p-3 shadow-card md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-semibold text-zinc-700 hover:bg-brand-soft hover:text-brand-dark"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#download"
            onClick={() => setOpen(false)}
            className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-brand py-3 text-base font-bold text-white"
          >
            Get the app <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      )}
    </header>
  );
}

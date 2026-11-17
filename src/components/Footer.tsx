import React from "react";
import BrandMark from "./BrandMark";

const columns = [
  {
    title: "Product",
    links: [
      { href: "#how", label: "How it works" },
      { href: "#tools", label: "Tools" },
      { href: "#screens", label: "Screens" },
    ],
  },
  {
    title: "Trust",
    links: [
      { href: "#privacy", label: "Privacy" },
      { href: "#faq", label: "FAQ" },
      { href: "#download", label: "Download" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-black/5 bg-white pt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-10 sm:flex-row">
          <div className="max-w-xs">
            <BrandMark />
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              Scan, clean and organise documents on your phone. Free, with no watermarks.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12 text-sm">
            {columns.map((c) => (
              <div key={c.title}>
                <h4 className="font-bold text-ink">{c.title}</h4>
                <ul className="mt-3 space-y-2.5 text-zinc-500">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="transition-colors hover:text-brand-dark">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-black/5 py-6 text-xs text-zinc-400 sm:flex-row">
          <span>© {new Date().getFullYear()} Starconnect. All rights reserved.</span>
          <span>Made for Android</span>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none select-none whitespace-nowrap text-center text-[18vw] font-black leading-[0.8] tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(15,165,142,0.18)]"
      >
        Doc Scanner
      </div>
    </footer>
  );
}

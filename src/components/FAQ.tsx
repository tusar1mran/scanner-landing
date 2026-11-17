"use client";

import React, { useRef, useState } from "react";
import { Plus } from "lucide-react";
import { gsap, useIsoLayoutEffect, useReveal } from "@/lib/gsap";

const faqs = [
  {
    q: "Does Doc Scanner add a watermark to my PDFs?",
    a: "No. Exports are clean. The Watermark tool is there only for when you want to stamp your own text on a page.",
  },
  {
    q: "Do my documents get uploaded anywhere?",
    a: "Scanning, cropping and text recognition run on your phone, and documents are kept in the app's local storage. You choose when to share a file.",
  },
  {
    q: "Can I extract text without internet?",
    a: "Yes. Extract Text uses on-device Google ML Kit text recognition, so it works in flight mode.",
  },
  {
    q: "How does ID Card mode work?",
    a: "Scan the front, then the back. The app crops both sides and places them together on a single A4 page.",
  },
  {
    q: "Do I need to create an account?",
    a: "No. Open the app and start scanning.",
  },
  {
    q: "Which phones are supported?",
    a: "Doc Scanner 1.0 is available for Android.",
  },
];

function Item({ q, a, open, onToggle, id }: { q: string; a: string; open: boolean; onToggle: () => void; id: string }) {
  const panel = useRef<HTMLDivElement>(null);
  const mounted = useRef(false);

  useIsoLayoutEffect(() => {
    const el = panel.current;
    if (!el) return;
    if (!mounted.current) {
      mounted.current = true;
      gsap.set(el, { height: open ? "auto" : 0 });
      return;
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.to(el, { height: open ? "auto" : 0, duration: reduce ? 0 : 0.5, ease: "power3.inOut" });
  }, [open]);

  return (
    <div data-reveal className="border-b border-black/10">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={id}
          className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-semibold text-ink transition-colors hover:text-brand-dark"
        >
          {q}
          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
              open ? "rotate-45 border-brand bg-brand text-white" : "border-black/10 text-zinc-500"
            }`}
          >
            <Plus className="h-4 w-4" />
          </span>
        </button>
      </h3>
      <div id={id} ref={panel} role="region" className={`overflow-hidden ${open ? "" : "h-0"}`} inert={!open}>
        <p className="max-w-2xl pb-6 leading-relaxed text-zinc-600">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const root = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  useReveal(root);

  return (
    <section id="faq" ref={root} className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p data-reveal className="text-sm font-bold uppercase tracking-[0.18em] text-brand">
            FAQ
          </p>
          <h2 data-reveal className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl">
            Questions, <span className="font-serif-italic text-brand">answered.</span>
          </h2>
        </div>
        <div className="border-t border-black/10 lg:col-span-8">
          {faqs.map((f, i) => (
            <Item
              key={f.q}
              id={`faq-${i}`}
              q={f.q}
              a={f.a}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

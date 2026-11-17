"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  CreditCard,
  Droplet,
  FileText,
  GitMerge,
  Images,
  Layers,
  PenLine,
  QrCode,
  ScanLine,
  Scissors,
  Search,
  SlidersHorizontal,
  FileUp,
  FileArchive,
  Type,
} from "lucide-react";
import { gsap, useIsoLayoutEffect, useReveal, FULL_MOTION } from "@/lib/gsap";

const tools = [
  { icon: Layers, name: "Batch Scan", desc: "Capture many pages in one go.", tint: "bg-[#E3F5F1] text-[#0FA58E]" },
  { icon: QrCode, name: "QR Code", desc: "Read QR codes with the camera.", tint: "bg-[#EEE9FE] text-[#7C5CF5]" },
  { icon: Images, name: "Import Images", desc: "Turn gallery photos into scans.", tint: "bg-[#E6EFFE] text-[#3B82F6]" },
  { icon: FileText, name: "To PDF", desc: "Export clean, shareable PDFs.", tint: "bg-[#FDE8E8] text-[#EF4444]" },
  { icon: GitMerge, name: "Merge PDF", desc: "Join two or more PDFs into one document.", tint: "bg-[#FEF3E2] text-[#F59E0B]" },
  { icon: PenLine, name: "Sign", desc: "Add your signature to any page.", tint: "bg-[#E3F5F1] text-[#0FA58E]" },
  { icon: Droplet, name: "Watermark", desc: "Stamp your own text on pages.", tint: "bg-[#E6EFFE] text-[#3B82F6]" },
  { icon: FileUp, name: "Import PDF", desc: "Open a PDF's pages in the editor.", tint: "bg-[#FDE8E8] text-[#EF4444]" },
  { icon: Scissors, name: "Split PDF", desc: "Pick pages and save them as a new document.", tint: "bg-[#EEE9FE] text-[#7C5CF5]" },
  { icon: FileArchive, name: "Compress PDF", desc: "Shrink a PDF before you share it.", tint: "bg-[#FEF3E2] text-[#F59E0B]" },
  { icon: SlidersHorizontal, name: "Filters", desc: "Enhance, No Shadow, B&W and more.", tint: "bg-[#E3F5F1] text-[#0FA58E]" },
  { icon: Search, name: "Search", desc: "Find scans by title or text.", tint: "bg-[#EEE9FE] text-[#7C5CF5]" },
];

export default function ToolsGrid() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  // Cursor-following glow on cards
  useIsoLayoutEffect(() => {
    const el = root.current;
    if (!el || !window.matchMedia("(pointer: fine)").matches) return;
    const cards = gsap.utils.toArray<HTMLElement>("[data-glow]", el);
    const handlers = cards.map((card) => {
      const fn = (e: PointerEvent) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--gx", `${e.clientX - r.left}px`);
        card.style.setProperty("--gy", `${e.clientY - r.top}px`);
      };
      card.addEventListener("pointermove", fn);
      return () => card.removeEventListener("pointermove", fn);
    });

    const mm = gsap.matchMedia();
    mm.add(FULL_MOTION, () => {
      gsap.to("[data-tools-shot]", {
        yPercent: -12,
        ease: "none",
        scrollTrigger: { trigger: "[data-tools-shot]", start: "top bottom", end: "bottom top", scrub: true },
      });
    });
    return () => {
      handlers.forEach((off) => off());
      mm.revert();
    };
  }, []);

  const glow =
    "relative overflow-hidden before:pointer-events-none before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 before:bg-[radial-gradient(380px_circle_at_var(--gx)_var(--gy),rgba(15,165,142,0.12),transparent_45%)]";

  return (
    <section id="tools" ref={root} className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p data-reveal className="text-sm font-bold uppercase tracking-[0.18em] text-brand">
            Tools
          </p>
          <h2 data-reveal className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl">
            One app for the whole{" "}
            <span className="font-serif-italic text-brand">paper trail.</span>
          </h2>
          <p data-reveal className="mt-5 text-lg leading-relaxed text-zinc-600">
            Every tool below is in the app today, one tap from the Home screen or the Tools tab.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Feature: Smart Scan with real screenshot */}
          <div
            data-reveal
            data-glow
            className={`${glow} flex flex-col rounded-3xl bg-gradient-to-br from-brand to-brand-dark p-7 text-white sm:col-span-2 lg:row-span-2`}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
              <ScanLine className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-2xl font-bold">Smart Scan</h3>
            <p className="mt-2 max-w-sm text-white/80">
              Auto crop is on by default. The scanner detects the page, trims the background and keeps the page straight.
            </p>
            <div className="relative mt-8 -mb-7 h-64 overflow-hidden sm:h-72 lg:mt-auto lg:h-80">
              <div data-tools-shot className="absolute left-1/2 top-0 w-[78%] max-w-[340px] -translate-x-1/2">
                <div className="overflow-hidden rounded-t-[1.6rem] border-[6px] border-b-0 border-[#0B1220] shadow-2xl">
                  <Image
                    src="/screens/home.png"
                    alt="Smart Scan, Import Images, ID Card and Extract Text shortcuts on the Doc Scanner home screen"
                    width={1080}
                    height={2400}
                    sizes="340px"
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Feature: ID Card */}
          <div data-reveal data-glow className={`${glow} rounded-3xl border border-black/5 bg-[#F6F8F7] p-7 sm:col-span-2`}>
            <div className="flex items-start justify-between gap-6">
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                  <CreditCard className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-ink">ID Card mode</h3>
                <p className="mt-2 text-zinc-600">Scan the front and back. Both sides are cropped and placed on one A4 page.</p>
              </div>
              <div className="hidden shrink-0 sm:block" aria-hidden>
                <div className="relative h-28 w-24 rounded-lg bg-white shadow-card">
                  <div className="absolute inset-x-3 top-3 h-9 rounded bg-brand/80" />
                  <div className="absolute inset-x-3 bottom-3 h-9 rounded bg-brand/40" />
                </div>
              </div>
            </div>
          </div>

          {/* Feature: Extract Text */}
          <div data-reveal data-glow className={`${glow} rounded-3xl border border-black/5 bg-[#F6F8F7] p-7 sm:col-span-2`}>
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand">
              <Type className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-xl font-bold text-ink">Extract Text</h3>
            <p className="mt-2 text-zinc-600">
              Text recognition runs on the phone with Google ML Kit, so you can copy words out of a scan without an internet connection.
            </p>
          </div>

          {tools.map(({ icon: Icon, name, desc, tint }) => (
            <div
              key={name}
              data-reveal
              data-glow
              className={`${glow} group rounded-3xl border border-black/5 bg-white p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-card`}
            >
              <span className={`flex h-11 w-11 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${tint}`}>
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-bold text-ink">{name}</h3>
              <p className="mt-1 text-sm text-zinc-500">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

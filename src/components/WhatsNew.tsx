"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Camera, FileStack, LockKeyhole, SlidersHorizontal } from "lucide-react";
import PhoneFrame from "./PhoneFrame";
import { gsap, useIsoLayoutEffect, useReveal, FULL_MOTION } from "@/lib/gsap";

const highlights = [
  {
    icon: Camera,
    title: "A new document camera",
    desc: "Flash, HD and grid controls, a 3:4 preview, and modes for Single, Batch, ID Card, Extract Text and QR Code. Import images or PDFs without leaving it.",
  },
  {
    icon: SlidersHorizontal,
    title: "Filters that clean the page",
    desc: "Enhance, No Shadow, B&W, Eco and more work on the real pixels. Tap a filter again to tune contrast, brightness and detail.",
  },
  {
    icon: FileStack,
    title: "Full PDF toolkit",
    desc: "Import, merge, split and compress PDFs, export searchable PDFs or Word files, and tag documents to find them fast.",
  },
  {
    icon: LockKeyhole,
    title: "Locks for what matters",
    desc: "Lock single documents or whole folders with fingerprint or PIN, password-protect PDFs, and open protected PDFs.",
  },
];

export default function WhatsNew() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  useIsoLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add(FULL_MOTION, () => {
      gsap.fromTo(
        "[data-new-phone]",
        { y: 80, rotate: -4 },
        { y: -30, rotate: 0, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } },
      );
    });
    return () => mm.revert();
  }, []);

  return (
    <section id="new" ref={root} className="overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1fr_auto]">
        <div>
          <p data-reveal className="text-sm font-bold uppercase tracking-[0.18em] text-brand">
            What&apos;s new
          </p>
          <h2 data-reveal className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
            A faster camera and <span className="font-serif-italic text-brand">cleaner pages.</span>
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div key={title} data-reveal className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/15 text-brand">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{desc}</p>
              </div>
            ))}
          </div>
          <Link
            data-reveal
            href="/updates"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-ink transition-colors hover:bg-brand-soft"
          >
            See every update
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="flex justify-center">
          <div data-new-phone>
            <PhoneFrame
              src="/screens/camera.png"
              alt="Doc Scanner camera with Single, Batch, ID Card and Extract Text modes"
              className="w-[260px] sm:w-[290px]"
              sizes="290px"
              onDark
            />
          </div>
        </div>
      </div>
    </section>
  );
}

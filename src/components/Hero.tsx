"use client";

import React, { useRef } from "react";
import { ArrowDown, ArrowRight, Crop, FileText, ScanText, WifiOff } from "lucide-react";
import PhoneFrame from "./PhoneFrame";
import { gsap, SplitText, useIsoLayoutEffect, FULL_MOTION } from "@/lib/gsap";

const chips = [
  { icon: Crop, label: "Auto crop", sub: "Edges detected for you", pos: "left-[2%] top-[18%]", depth: 0.9 },
  { icon: ScanText, label: "Extract text", sub: "On-device OCR", pos: "left-[6%] bottom-[16%]", depth: 0.6 },
  { icon: FileText, label: "No watermarks", sub: "Clean PDF exports", pos: "right-[2%] top-[24%]", depth: 0.8 },
  { icon: WifiOff, label: "Works offline", sub: "No account needed", pos: "right-[7%] bottom-[12%]", depth: 0.5 },
];

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    const mm = gsap.matchMedia();

    mm.add(FULL_MOTION, () => {
      const split = SplitText.create(el.querySelector("[data-hero-title]"), {
        type: "words,lines",
        linesClass: "split-line",
        mask: "lines",
      });

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from("[data-hero-pill]", { y: 16, autoAlpha: 0, duration: 0.8 })
        .from(split.words, { yPercent: 110, duration: 1.1, stagger: 0.045 }, "-=0.5")
        .from("[data-hero-fade]", { y: 18, autoAlpha: 0, duration: 0.9, stagger: 0.08 }, "-=0.8")
        .from("[data-phone='center']", { y: 120, autoAlpha: 0, scale: 0.92, duration: 1.4 }, "-=0.9")
        .from("[data-phone='left']", { x: 140, rotate: 8, autoAlpha: 0, duration: 1.3 }, "-=1.15")
        .from("[data-phone='right']", { x: -140, rotate: -8, autoAlpha: 0, duration: 1.3 }, "<")
        .from("[data-chip]", { scale: 0.6, autoAlpha: 0, duration: 0.8, stagger: 0.1, ease: "back.out(1.8)" }, "-=0.9");

      // Phones spread and lift as the hero scrolls away
      gsap
        .timeline({
          scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: 0.6 },
        })
        .to("[data-scroll-phone='center']", { y: -80, scale: 1.04 }, 0)
        .to("[data-scroll-phone='left']", { x: -70, y: -20, rotate: -6 }, 0)
        .to("[data-scroll-phone='right']", { x: 70, y: -20, rotate: 6 }, 0)
        .to("[data-chip-scroll]", { y: (i) => -60 - i * 25, autoAlpha: 0 }, 0)
        .to("[data-hero-copy]", { y: -60, autoAlpha: 0.2 }, 0);

      // Pointer parallax (desktop pointers only)
      const stage = el.querySelector<HTMLElement>("[data-stage]");
      if (!stage || !window.matchMedia("(pointer: fine)").matches) return () => split.revert();

      const rx = gsap.quickTo("[data-tilt]", "rotationY", { duration: 0.9, ease: "power3" });
      const ry = gsap.quickTo("[data-tilt]", "rotationX", { duration: 0.9, ease: "power3" });
      const chipsEls = gsap.utils.toArray<HTMLElement>("[data-chip]", el);
      const chipMovers = chipsEls.map((c) => ({
        x: gsap.quickTo(c, "x", { duration: 1, ease: "power3" }),
        y: gsap.quickTo(c, "y", { duration: 1, ease: "power3" }),
        d: Number(c.dataset.depth ?? 0.5),
      }));

      const move = (e: PointerEvent) => {
        const r = stage.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        rx(x * 10);
        ry(-y * 8);
        chipMovers.forEach((m) => {
          m.x(x * 40 * m.d);
          m.y(y * 30 * m.d);
        });
      };
      const leave = () => {
        rx(0);
        ry(0);
        chipMovers.forEach((m) => {
          m.x(0);
          m.y(0);
        });
      };
      stage.addEventListener("pointermove", move);
      stage.addEventListener("pointerleave", leave);
      return () => {
        stage.removeEventListener("pointermove", move);
        stage.removeEventListener("pointerleave", leave);
        split.revert();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="top"
      ref={root}
      className="relative overflow-hidden bg-gradient-to-b from-[#E9F7F3] via-[#F6F8F7] to-[#F6F8F7] pt-32 sm:pt-40"
    >
      <div aria-hidden className="bg-grid mask-fade-y absolute inset-0" />
      <div
        aria-hidden
        className="absolute left-1/2 top-24 h-[520px] w-[900px] max-w-[140vw] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6">
        <div data-hero-copy>
          <a
            data-hero-pill
            href="#download"
            className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white/80 py-1.5 pl-1.5 pr-4 text-sm font-medium text-zinc-700 shadow-sm backdrop-blur hover:border-brand/40"
          >
            <span className="rounded-full bg-brand px-2.5 py-0.5 text-xs font-bold text-white">New</span>
            Doc Scanner 1.0 for Android
            <ArrowRight className="h-3.5 w-3.5 text-brand" />
          </a>

          <h1
            data-hero-title
            className="mx-auto mt-7 max-w-4xl text-[2.6rem] font-extrabold leading-[1.04] tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            Scan it. Clean it.{" "}
            <span className="font-serif-italic text-brand">Share a crisp PDF.</span>
          </h1>

          <p
            data-hero-fade
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg"
          >
            Doc Scanner turns receipts, contracts and ID cards into clean, searchable PDFs, right on your
            phone. No watermarks, no sign-up.
          </p>

          <div data-hero-fade className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#download"
              className="group inline-flex items-center gap-3 rounded-full bg-brand px-7 py-4 text-base font-bold text-white shadow-lg shadow-brand/30 transition-all hover:-translate-y-0.5 hover:bg-brand-dark"
            >
              Download for Android
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-full px-6 py-4 text-base font-semibold text-zinc-700 transition-colors hover:text-brand-dark"
            >
              See how it works <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Device stage */}
        <div
          data-stage
          className="relative mx-auto mt-16 h-[560px] max-w-5xl sm:mt-20 sm:h-[640px]"
          style={{ perspective: "1400px" }}
        >
          <div data-tilt className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
            <div data-scroll-phone="left" className="absolute left-1/2 top-16 hidden -translate-x-[150%] -rotate-[8deg] md:block">
              <div data-phone="left">
                <PhoneFrame src="/screens/files.png" alt="Doc Scanner Files tab listing scanned documents" className="w-[230px]" sizes="230px" />
              </div>
            </div>
            <div data-scroll-phone="right" className="absolute left-1/2 top-16 hidden translate-x-[50%] rotate-[8deg] md:block">
              <div data-phone="right">
                <PhoneFrame src="/screens/me.png" alt="Doc Scanner settings with App Lock and Trash Bin" className="w-[230px]" sizes="230px" />
              </div>
            </div>
            <div data-scroll-phone="center" className="absolute left-1/2 top-0 z-10 -translate-x-1/2">
              <div data-phone="center">
              <PhoneFrame
                src="/screens/home.png"
                alt="Doc Scanner home screen with Smart Scan, ID Card, Extract Text and recent documents"
                className="w-[260px] sm:w-[290px]"
                sizes="290px"
                preload
              >
                <div
                  aria-hidden
                  className="scan-beam pointer-events-none absolute inset-x-0 top-[14%] h-16 [--beam-travel:300px] sm:[--beam-travel:340px]"
                >
                  <div className="h-full w-full bg-gradient-to-b from-transparent to-scan/25" />
                  <div className="h-[3px] w-full bg-scan shadow-[0_0_18px_4px_rgba(255,200,61,0.7)]" />
                </div>
              </PhoneFrame>
              </div>
            </div>
          </div>

          {chips.map(({ icon: Icon, label, sub, pos, depth }) => (
            <div key={label} data-chip-scroll className={`absolute z-20 hidden lg:block ${pos}`}>
              <div
                data-chip
                data-depth={depth}
                className="flex items-center gap-3 rounded-2xl border border-white bg-white/90 p-3 pr-5 text-left shadow-card backdrop-blur-md"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-bold text-ink">{label}</span>
                  <span className="block text-xs text-zinc-500">{sub}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#F6F8F7] to-transparent" />
    </section>
  );
}

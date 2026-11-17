"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PhoneFrame from "./PhoneFrame";
import { gsap, useIsoLayoutEffect, useReveal, FULL_MOTION } from "@/lib/gsap";

import { APK_SIZE, APK_URL, APK_VERSION } from "@/lib/links";

export default function BottomCTA() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  useIsoLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add(FULL_MOTION, () => {
      gsap.from("[data-cta-card]", {
        scale: 0.92,
        borderRadius: 80,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top bottom", end: "top 30%", scrub: true },
      });
      gsap.fromTo(
        "[data-cta-phone]",
        { y: 160 },
        { y: 0, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "center center", scrub: true } },
      );

      // Magnetic button
      const btn = el.querySelector<HTMLElement>("[data-magnetic]");
      if (!btn || !window.matchMedia("(pointer: fine)").matches) return;
      const xTo = gsap.quickTo(btn, "x", { duration: 0.5, ease: "power3" });
      const yTo = gsap.quickTo(btn, "y", { duration: 0.5, ease: "power3" });
      const move = (e: PointerEvent) => {
        const r = btn.getBoundingClientRect();
        xTo((e.clientX - (r.left + r.width / 2)) * 0.3);
        yTo((e.clientY - (r.top + r.height / 2)) * 0.3);
      };
      const leave = () => {
        xTo(0);
        yTo(0);
      };
      btn.addEventListener("pointermove", move);
      btn.addEventListener("pointerleave", leave);
      return () => {
        btn.removeEventListener("pointermove", move);
        btn.removeEventListener("pointerleave", leave);
      };
    });
    return () => mm.revert();
  }, []);

  return (
    <section id="download" ref={root} className="bg-white px-3 py-16 sm:px-6 sm:py-24">
      <div
        data-cta-card
        className="relative mx-auto grid max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#12B89E] via-brand to-[#08705F] text-white lg:grid-cols-2"
      >
        <div aria-hidden className="bg-grid absolute inset-0 opacity-30 [filter:invert(1)]" />
        <div className="relative z-10 px-7 pb-4 pt-14 sm:px-14 sm:pt-20 lg:pb-20">
          <Image data-reveal src="/icon.png" alt="" width={64} height={64} className="h-16 w-16 rounded-2xl shadow-lg ring-1 ring-white/30" />
          <h2 data-reveal className="mt-8 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
            Your next scan is <span className="font-serif-italic">one tap away.</span>
          </h2>
          <p data-reveal className="mt-5 max-w-md text-lg leading-relaxed text-white/80">
            Free to download, no watermarks, no account. Get Doc Scanner for Android.
          </p>
          <div data-reveal className="mt-9">
            <a
              data-magnetic
              href={APK_URL}
              download
              className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-base font-bold text-brand-dark shadow-xl shadow-black/10 transition-colors hover:bg-[#F0FBF8]"
            >
              Download for Android
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="mt-4 text-sm text-white/70">
              APK v{APK_VERSION} · {APK_SIZE} ·{" "}
              <a
                href="https://github.com/tusar1mran/scanner-landing#install-on-android"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-white"
              >
                How to install
              </a>
            </p>
          </div>
        </div>
        <div className="relative z-10 flex h-[360px] justify-center overflow-hidden sm:h-[440px] lg:h-auto">
          <div data-cta-phone className="absolute top-10 lg:top-16">
            <PhoneFrame src="/screens/home.png" alt="" className="w-[260px] sm:w-[290px]" sizes="290px" />
          </div>
        </div>
      </div>
    </section>
  );
}

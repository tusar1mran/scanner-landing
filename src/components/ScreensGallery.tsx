"use client";

import React, { useRef } from "react";
import PhoneFrame from "./PhoneFrame";
import { gsap, useIsoLayoutEffect, useReveal, FULL_MOTION } from "@/lib/gsap";

const screens = [
  { src: "/screens/home.png", tab: "Home", caption: "Scan shortcuts and your most recent documents." },
  { src: "/screens/files.png", tab: "Files", caption: "Every scan, with page counts, folders and sorting." },
  { src: "/screens/tools.png", tab: "Tools", caption: "Scan, import, convert, edit and manage in one list." },
  { src: "/screens/me.png", tab: "Me", caption: "App Lock, Trash Bin, scan settings and appearance." },
];

export default function ScreensGallery() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  useIsoLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    const mm = gsap.matchMedia();

    mm.add(`(min-width: 1024px) and ${FULL_MOTION}`, () => {
      // Staggered parallax: alternate cards drift at different speeds
      gsap.utils.toArray<HTMLElement>("[data-gallery-card]", el).forEach((card, i) => {
        const offset = i % 2 === 0 ? 70 : 140;
        gsap.fromTo(
          card,
          { y: offset, rotate: i % 2 === 0 ? -3 : 3 },
          {
            y: -offset / 2,
            rotate: 0,
            ease: "none",
            scrollTrigger: { trigger: "[data-gallery-track]", start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="screens" ref={root} className="relative overflow-hidden bg-[#F6F8F7]">
      <div className="py-24 sm:py-32">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <p data-reveal className="text-sm font-bold uppercase tracking-[0.18em] text-brand">
            Real screens
          </p>
          <h2 data-reveal className="mt-4 max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl">
            What you see is{" "}
            <span className="font-serif-italic text-brand">what you get.</span>
          </h2>
          <p data-reveal className="mt-4 max-w-lg text-zinc-600">
            Captured straight from the Android app. No mock-ups.
          </p>
        </div>

        <div className="mt-12 snap-x snap-mandatory overflow-x-auto pb-6 lg:mt-14 lg:overflow-visible lg:pb-0 [scrollbar-width:none]">
          <div data-gallery-track className="flex w-max gap-8 px-4 sm:px-6 lg:mx-auto lg:grid lg:w-full lg:max-w-6xl lg:grid-cols-4 lg:gap-10 lg:pb-20">
            {screens.map(({ src, tab, caption }, i) => (
              <figure key={src} data-gallery-card className="w-[240px] shrink-0 snap-center lg:w-auto">
                <PhoneFrame src={src} alt={`Doc Scanner ${tab} tab`} className="w-full" sizes="270px" />
                <figcaption className="mt-6">
                  <span className="text-sm font-bold text-brand">0{i + 1}</span>
                  <span className="ml-2 font-bold text-ink">{tab}</span>
                  <p className="mt-1 text-sm text-zinc-500">{caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

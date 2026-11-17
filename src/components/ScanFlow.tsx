"use client";

import React, { useRef } from "react";
import { FolderOpen, ScanLine, Wand2 } from "lucide-react";
import PhoneFrame from "./PhoneFrame";
import { gsap, useIsoLayoutEffect, FULL_MOTION } from "@/lib/gsap";

const steps = [
  {
    icon: ScanLine,
    kicker: "01 · Capture",
    title: "Point at a page. It crops itself.",
    body: "Smart Scan finds the document edges and flattens the page for you. Use Batch Scan for multi-page contracts, or ID Card mode to put the front and back on one A4 page.",
    screen: "/screens/home.png",
    alt: "Doc Scanner home screen with scan shortcuts",
  },
  {
    icon: Wand2,
    kicker: "02 · Polish",
    title: "Edit, sign and pull out the text.",
    body: "Extract Text recognises printed words on the device. Merge files, add your signature or a watermark, and convert images to PDF from one Tools tab.",
    screen: "/screens/tools.png",
    alt: "Doc Scanner Tools tab with Import, Convert, Edit and Manage sections",
  },
  {
    icon: FolderOpen,
    kicker: "03 · Organise",
    title: "Find any page in seconds.",
    body: "Search by title or by the text inside a scan. Sort into folders, restore from the Trash Bin, and share a clean PDF when you need it.",
    screen: "/screens/files.png",
    alt: "Doc Scanner Files tab with folders and document list",
  },
];

export default function ScanFlow() {
  const root = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    const mm = gsap.matchMedia();

    mm.add(`(min-width: 1024px) and ${FULL_MOTION}`, () => {
      const screens = gsap.utils.toArray<HTMLElement>("[data-flow-screen]", el);
      const texts = gsap.utils.toArray<HTMLElement>("[data-flow-step]", el);
      const dots = gsap.utils.toArray<HTMLElement>("[data-flow-dot]", el);

      gsap.set(screens, { filter: "brightness(1)" });
      gsap.set(screens.slice(1), { clipPath: "inset(100% 0% 0% 0%)" });
      gsap.set(texts.slice(1), { autoAlpha: 0, y: 40 });

      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: () => `+=${window.innerHeight * 2.2}`,
          scrub: 0.8,
          pin: "[data-flow-pin]",
          anticipatePin: 1,
          onUpdate: (self) => {
            const active = Math.min(steps.length - 1, Math.round(self.progress * (steps.length - 1)));
            dots.forEach((d, i) => d.toggleAttribute("data-active", i === active));
          },
        },
      });

      for (let i = 1; i < steps.length; i++) {
        tl.to(texts[i - 1], { autoAlpha: 0, y: -40, duration: 0.4 })
          .to(screens[i], { clipPath: "inset(0% 0% 0% 0%)", duration: 0.6 }, "<")
          .to(screens[i - 1], { scale: 0.94, filter: "brightness(0.85)", duration: 0.6 }, "<")
          .to(texts[i], { autoAlpha: 1, y: 0, duration: 0.4 }, "-=0.2")
          .to({}, { duration: 0.3 });
      }
      tl.to("[data-flow-progress]", { scaleY: 1, ease: "none", duration: tl.duration() }, 0);
    });

    mm.add(`(max-width: 1023px) and ${FULL_MOTION}`, () => {
      gsap.utils.toArray<HTMLElement>("[data-flow-mobile]", el).forEach((card) => {
        gsap.from(card, {
          y: 60,
          autoAlpha: 0,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: { trigger: card, start: "top 85%", once: true },
        });
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="how" ref={root} className="relative bg-[#F6F8F7]">
      {/* Desktop: pinned, scroll-driven walkthrough */}
      <div data-flow-pin className="hidden h-screen items-center lg:flex">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-12 items-center gap-10 px-6">
          <div className="col-span-6">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">How it works</p>
            <div className="relative mt-6 min-h-[300px]">
              {steps.map(({ icon: Icon, kicker, title, body }) => (
                <div key={title} data-flow-step className="absolute inset-0">
                  <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3 py-1.5 text-sm font-semibold text-brand-dark">
                    <Icon className="h-4 w-4" /> {kicker}
                  </span>
                  <h2 className="mt-5 text-5xl font-extrabold leading-[1.05] tracking-tight text-ink">{title}</h2>
                  <p className="mt-5 max-w-md text-lg leading-relaxed text-zinc-600">{body}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex items-center gap-3" aria-hidden>
              {steps.map((s, i) => (
                <span
                  key={s.title}
                  data-flow-dot
                  data-active={i === 0 ? "" : undefined}
                  className="h-2 w-8 rounded-full bg-black/10 transition-all duration-500 data-[active]:w-14 data-[active]:bg-brand"
                />
              ))}
            </div>
          </div>

          <div className="col-span-6 flex items-center justify-center gap-10">
            <div className="relative h-[66vh] max-h-[640px] aspect-[1080/2400]">
              {steps.map((s, i) => (
                <div key={s.screen} data-flow-screen className="absolute inset-0" style={{ zIndex: i }}>
                  <PhoneFrame src={s.screen} alt={s.alt} className="h-full w-full" sizes="300px" eager />
                </div>
              ))}
            </div>
            <div className="relative h-56 w-[3px] overflow-hidden rounded-full bg-black/10" aria-hidden>
              <div data-flow-progress className="absolute inset-0 origin-top scale-y-0 bg-brand" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile and tablet: stacked cards */}
      <div className="mx-auto max-w-xl px-4 py-24 sm:px-6 lg:hidden">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">How it works</p>
        <div className="mt-8 space-y-20">
          {steps.map(({ icon: Icon, kicker, title, body, screen, alt }) => (
            <div key={title} data-flow-mobile>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3 py-1.5 text-sm font-semibold text-brand-dark">
                <Icon className="h-4 w-4" /> {kicker}
              </span>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">{title}</h2>
              <p className="mt-3 text-base leading-relaxed text-zinc-600">{body}</p>
              <PhoneFrame src={screen} alt={alt} className="mx-auto mt-10 w-[250px]" sizes="250px" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

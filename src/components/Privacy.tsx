"use client";

import React, { useRef } from "react";
import { Fingerprint, HardDrive, Trash2, UserX } from "lucide-react";
import PhoneFrame from "./PhoneFrame";
import { gsap, useIsoLayoutEffect, useReveal, FULL_MOTION } from "@/lib/gsap";

const points = [
  {
    icon: HardDrive,
    title: "Stored on your phone",
    body: "Scans and their text live in the app's local database. Nothing is sent to a server to scan, crop or read your pages.",
  },
  {
    icon: Fingerprint,
    title: "App Lock",
    body: "Lock Doc Scanner behind your phone's biometric or device unlock so a borrowed phone does not mean open files.",
  },
  {
    icon: Trash2,
    title: "Trash Bin",
    body: "Deleted something by mistake? Restore it from the Trash Bin instead of scanning again.",
  },
  {
    icon: UserX,
    title: "No account",
    body: "Install and start scanning. There is no sign-up screen and no email to hand over.",
  },
];

export default function Privacy() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  useIsoLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add(FULL_MOTION, () => {
      gsap.fromTo(
        "[data-privacy-phone]",
        { rotate: -6, y: 80 },
        {
          rotate: 4,
          y: -40,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
        },
      );
      gsap.fromTo(
        "[data-privacy-ring]",
        { scale: 0.6, autoAlpha: 0 },
        {
          scale: 1.15,
          autoAlpha: 1,
          stagger: 0.15,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top 80%", end: "center center", scrub: true },
        },
      );
    });
    return () => mm.revert();
  }, []);

  return (
    <section id="privacy" ref={root} className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div aria-hidden className="absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-brand/25 blur-[140px]" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p data-reveal className="text-sm font-bold uppercase tracking-[0.18em] text-[#5FE0C8]">
            Privacy
          </p>
          <h2 data-reveal className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
            Your paperwork stays{" "}
            <span className="font-serif-italic text-[#5FE0C8]">yours.</span>
          </h2>
          <p data-reveal className="mt-5 max-w-lg text-lg leading-relaxed text-zinc-400">
            Receipts, IDs and contracts are personal. Doc Scanner does its work on the device, so your pages are not uploaded to be processed.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {points.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                data-reveal
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-[#5FE0C8]/40 hover:bg-white/[0.06]"
              >
                <Icon className="h-6 w-6 text-[#5FE0C8]" />
                <h3 className="mt-4 text-lg font-bold">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center lg:col-span-5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              data-privacy-ring
              aria-hidden
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#5FE0C8]/20"
              style={{ width: 340 + i * 120, height: 340 + i * 120 }}
            />
          ))}
          <div data-privacy-phone className="relative">
            <PhoneFrame
              src="/screens/me.png"
              alt="Doc Scanner Me tab showing App Lock, Trash Bin and Security & Privacy settings"
              className="w-[250px] sm:w-[280px]"
              onDark
              sizes="280px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

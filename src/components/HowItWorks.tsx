"use client";

import React from "react";
import { Camera, SlidersHorizontal, FileDown, CheckCircle2 } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Point & Auto-Capture",
      subtitle: "Machine Vision Framing",
      description:
        "Simply aim your camera at any document or import from your photo gallery. Google ML Kit automatically detects corners and captures the document with optimal perspective correction.",
      icon: Camera,
      badge: "Real-time Edge Snapping",
    },
    {
      step: "02",
      title: "Enhance & Extract",
      subtitle: "Studio Noise Filters",
      description:
        "Apply B&W Document Clean or Magic Color filters to erase shadows and desk reflections. Use the on-device OCR engine to instantly recognize and copy text.",
      icon: SlidersHorizontal,
      badge: "Crystal-Clear Contrast",
    },
    {
      step: "03",
      title: "Export & Encrypt",
      subtitle: "Universal PDF Sharing",
      description:
        "Combine single or multiple pages into an A4, Letter, or Fit-to-image PDF. Optionally apply an AES encryption password and share via WhatsApp, Drive, or Email.",
      icon: FileDown,
      badge: "100% Watermark-Free",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-[#080d10] border-t border-b border-white/10 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold text-emerald-400">
            <span>EFFORTLESS WORKFLOW</span>
          </div>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
            From Physical Paper to Clean PDF in 3 Simple Steps
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-400">
            No complicated setup or account credentials needed. Get work done in seconds.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl border border-white/10 bg-[#0e161c]/80 p-8 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/40 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-4xl font-black text-emerald-500/30 font-mono group-hover:text-emerald-400/60 transition-colors">
                    {item.step}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                    <item.icon className="h-6 w-6" />
                  </div>
                </div>

                <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                  {item.subtitle}
                </div>
                <h3 className="mt-1.5 text-xl font-black text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10 flex items-center gap-2 text-xs font-bold text-emerald-400">
                <CheckCircle2 className="h-4 w-4" />
                <span>{item.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

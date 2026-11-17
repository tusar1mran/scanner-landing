"use client";

import React from "react";
import {
  Scan,
  CreditCard,
  Sparkles,
  Search,
  Lock,
  Cpu,
  Fingerprint,
  Compass,
} from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 relative">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold text-emerald-400">
            <Cpu className="h-3.5 w-3.5" />
            <span>ENGINEERED FOR PEAK PERFORMANCE</span>
          </div>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
            Everything You Need to Scan, Perfect, & Protect Documents
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Built using modern machine learning APIs and a local-first architecture. No paywalls, no recurring subscriptions, and zero data leakage.
          </p>
        </div>

        {/* Dribbble / Behance Style Bento Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bento Card 1: 2-Col Span — AI Edge Detection */}
          <div className="md:col-span-2 relative overflow-hidden rounded-3xl border border-white/10 bg-[#0e161c]/80 p-8 sm:p-10 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-emerald-500/40 group flex flex-col justify-between">
            {/* Ambient corner light */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none group-hover:bg-emerald-500/25 transition-colors" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 text-black shadow-lg shadow-emerald-500/30">
                  <Scan className="h-6 w-6 stroke-[2.5]" />
                </div>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-400 border border-emerald-500/20">
                  Google ML Kit Vision
                </span>
              </div>

              <h3 className="text-2xl font-black text-white group-hover:text-emerald-400 transition-colors">
                Sub-Second Edge Detection & Perspective Flattening
              </h3>
              <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed">
                Take photos at tilted angles, with creased receipts, or under uneven lighting. The on-device computer vision engine automatically pins document boundaries and dewarps them into rectangular, print-ready pages.
              </p>
            </div>

            {/* Graphic Mockup inside card */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-[#080d10] p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono text-xs font-bold">
                  99%
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Continuous Multi-Page Flow</div>
                  <div className="text-[11px] text-zinc-400">Capture 50+ pages in a single uninterrupted burst</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] text-zinc-400 font-mono bg-white/[0.04] px-2.5 py-1 rounded-lg border border-white/5">
                  x: 0.04 | y: 0.98
                </span>
                <span className="text-[11px] text-emerald-400 font-bold bg-emerald-500/15 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                  Quadrilateral Locked
                </span>
              </div>
            </div>
          </div>

          {/* Bento Card 2: ID Card Mode */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0e161c]/80 p-8 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-emerald-500/40 group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-600 text-black shadow-lg shadow-teal-500/30">
                  <CreditCard className="h-6 w-6 stroke-[2.5]" />
                </div>
                <span className="rounded-full bg-teal-500/10 px-3 py-1 text-xs font-bold text-teal-400 border border-teal-500/20">
                  Dual-Side Merge
                </span>
              </div>

              <h3 className="text-xl font-black text-white group-hover:text-teal-400 transition-colors">
                ID Card & Passport Mode
              </h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Scan both the front and back of driver licenses, National IDs, or work badges. The app stitches both sides neatly onto a single A4 page with calibrated margins.
              </p>
            </div>

            {/* Visual Mini Preview */}
            <div className="mt-6 rounded-xl border border-white/10 bg-[#080d10] p-3 space-y-2">
              <div className="h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-3 flex items-center justify-between text-[11px]">
                <span className="font-bold text-zinc-300">Front Side</span>
                <span className="font-mono text-[9px] text-emerald-400">Cropped ✓</span>
              </div>
              <div className="h-9 rounded-lg bg-teal-500/10 border border-teal-500/20 px-3 flex items-center justify-between text-[11px]">
                <span className="font-bold text-zinc-300">Back Side</span>
                <span className="font-mono text-[9px] text-teal-400">Cropped ✓</span>
              </div>
            </div>
          </div>

          {/* Bento Card 3: Studio Document Filters */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0e161c]/80 p-8 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-emerald-500/40 group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-600 text-white shadow-lg shadow-blue-500/30">
                  <Sparkles className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-400 border border-blue-500/20">
                  Adaptive Filters
                </span>
              </div>

              <h3 className="text-xl font-black text-white group-hover:text-blue-400 transition-colors">
                Studio Document Filters
              </h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Remove shadows, yellow tints, and desk glare with specialized kernels: B&W Document Clean, Vibrant Magic Color, Crisp Grayscale, and Raw.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between text-xs text-zinc-400 border-t border-white/10 pt-4">
              <span>B&W High Contrast</span>
              <span className="text-emerald-400 font-bold">1-Bit Compact Size</span>
            </div>
          </div>

          {/* Bento Card 4: On-Device OCR */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0e161c]/80 p-8 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-emerald-500/40 group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 text-black shadow-lg shadow-amber-500/30">
                  <Search className="h-6 w-6 stroke-[2.5]" />
                </div>
                <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-bold text-amber-400 border border-amber-500/20">
                  Zero Latency
                </span>
              </div>

              <h3 className="text-xl font-black text-white group-hover:text-amber-400 transition-colors">
                On-Device Neural OCR
              </h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Extract full text from any photo in under 200ms. Search within your scanned archive by keywords or copy text directly to your clipboard.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between text-xs text-zinc-400 border-t border-white/10 pt-4">
              <span>Multi-Lingual Support</span>
              <span className="text-amber-400 font-bold">Offline ML Model</span>
            </div>
          </div>

          {/* Bento Card 5: Bank-Grade Security & PDF Controls */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0e161c]/80 p-8 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-emerald-500/40 group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white shadow-lg shadow-emerald-500/30">
                  <Lock className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-400 border border-emerald-500/20">
                  AES-256 Bit
                </span>
              </div>

              <h3 className="text-xl font-black text-white group-hover:text-emerald-400 transition-colors">
                Encrypted PDF & Sizing
              </h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Generate A4, US Letter, or Original aspect ratios. Compress to Low, Medium, or High DPI, and secure confidential documents with AES encryption passwords.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between text-xs text-zinc-400 border-t border-white/10 pt-4">
              <span>Zero Watermark</span>
              <span className="text-emerald-400 font-bold">Standard PDF 1.7</span>
            </div>
          </div>
        </div>

        {/* Extra Bottom Strip for Dribbble-level polish */}
        <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-r from-[#0d161c] via-[#091512] to-[#0d161c] p-6 sm:p-8 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Fingerprint className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Biometric App Lock & SQLite Local Database
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400">
                Lock your confidential folder behind fingerprint or PIN. Indexed entirely inside Android SecureStore.
              </p>
            </div>
          </div>

          <a
            href="#demo"
            className="flex-shrink-0 inline-flex items-center gap-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 px-4 py-2.5 text-xs font-bold text-white transition-all"
          >
            <span>Explore Interactive Lab</span>
            <Compass className="h-3.5 w-3.5 text-emerald-400" />
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { Check, ChevronRight } from "lucide-react";

export default function DarkPricingComparison() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("monthly");

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-[#090D1A] text-white relative overflow-hidden">
      {/* Background Star Dots / Subtle Glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#5B4DF6]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Mini-HUD Box tailored to Doc Scanner */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 backdrop-blur-xl mb-20 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Left Status Text */}
            <div className="space-y-1.5 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <span className="text-zinc-500">Processing Architecture:</span>
                <span className="font-bold text-white">100% Local (On-Device)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-zinc-500">Computer Vision Engine:</span>
                <span className="font-bold text-white">Google ML Kit Document Scanner</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-zinc-500">Cloud Data Upload:</span>
                <span className="font-bold text-emerald-400">0 Bytes (Zero Telemetry)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-zinc-500">File Encryption:</span>
                <span className="font-bold text-white">AES-256 Bit PDF Security</span>
              </div>

              <div className="pt-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-white text-zinc-900 px-4 py-1.5 text-[11px] font-extrabold shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span>Privacy verified</span>
                </div>
              </div>
            </div>

            {/* Right Stepper */}
            <div className="space-y-4 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-white/10 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                  1
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Capture & Dewarp</div>
                  <div className="text-[10px] text-zinc-400">
                    Real-time corner snapping, auto perspective flattening, and shadow removal.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-[#5B4DF6] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                  2
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Clean PDF Export</div>
                  <div className="text-[10px] text-zinc-400">
                    Watermark-free, encrypted with optional password, and saved to local SQLite.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#818CF8] tracking-wide cursor-pointer hover:underline">
            <span>Plans & Comparison</span>
            <ChevronRight className="h-3 w-3" />
          </div>

          <h2 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Plans for every scale
          </h2>
          <p className="mt-3 text-sm text-zinc-400">
            No subscriptions. No paywalled features. 100% free and open.
          </p>

          {/* Toggle Switch */}
          <div className="mt-8 inline-flex items-center gap-4 text-xs font-semibold">
            <span
              onClick={() => setBillingCycle("annually")}
              className={`cursor-pointer transition-colors ${
                billingCycle === "annually" ? "text-white" : "text-zinc-500"
              }`}
            >
              Community
            </span>
            <button
              type="button"
              onClick={() =>
                setBillingCycle(billingCycle === "monthly" ? "annually" : "monthly")
              }
              className="w-11 h-6 rounded-full bg-white/20 p-1 relative flex items-center transition-colors"
            >
              <div
                className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${
                  billingCycle === "monthly" ? "translate-x-5 bg-[#5B4DF6]" : "translate-x-0"
                }`}
              />
            </button>
            <span
              onClick={() => setBillingCycle("monthly")}
              className={`cursor-pointer transition-colors ${
                billingCycle === "monthly" ? "text-white" : "text-zinc-500"
              }`}
            >
              Unlimited Free
            </span>
          </div>
        </div>

        {/* 3 Pricing Columns tailored to Doc Scanner */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* Plan 1: Starter */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl flex flex-col justify-between hover:border-white/20 transition-all">
            <div>
              <div className="text-lg font-bold text-white">Starter</div>
              <p className="text-xs text-zinc-400 mt-1">
                Perfect for students & everyday receipts
              </p>

              <div className="mt-6">
                <span className="text-4xl font-extrabold text-white">$0</span>
                <span className="text-xs text-zinc-400">/Forever</span>
                <span className="block text-[10px] text-zinc-500 mt-1">
                  100% Free • No credit card required
                </span>
              </div>

              <div className="mt-6">
                <a
                  href="#download"
                  className="block w-full text-center rounded-xl bg-white/10 hover:bg-white/15 text-white py-3 text-xs font-bold transition-all"
                >
                  Get started for free &gt;
                </a>
              </div>

              <div className="mt-8 space-y-3 pt-6 border-t border-white/10 text-xs text-zinc-300">
                <div className="font-bold text-white text-[11px]">
                  Essential Scanner Features
                </div>
                {[
                  "Unlimited document scans",
                  "Auto edge detection & crop",
                  "Studio B&W Clean filter",
                  "A4 & Letter PDF export",
                  "Zero watermarks",
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-zinc-400 flex-shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Plan 2: Doc Scanner Pro (Featured) */}
          <div className="rounded-3xl border-2 border-[#5B4DF6] bg-gradient-to-b from-[#5B4DF6]/10 to-transparent p-8 backdrop-blur-xl shadow-2xl shadow-[#5B4DF6]/20 flex flex-col justify-between relative">
            <div>
              <div className="text-lg font-bold text-white">Doc Scanner Pro</div>
              <p className="text-xs text-zinc-400 mt-1">
                For professionals, accountants & businesses
              </p>

              <div className="mt-6">
                <span className="text-4xl font-extrabold text-white">$0</span>
                <span className="text-xs text-zinc-400">/Forever</span>
                <span className="block text-[10px] text-emerald-400 font-semibold mt-1">
                  Open Source Community Edition (No Subscriptions)
                </span>
              </div>

              <div className="mt-6">
                <a
                  href="#download"
                  className="block w-full text-center rounded-xl bg-[#5B4DF6] hover:bg-[#4C3EE3] text-white py-3 text-xs font-bold shadow-lg shadow-[#5B4DF6]/30 transition-all hover:scale-[1.02]"
                >
                  Download Free APK &gt;
                </a>
              </div>

              <div className="mt-8 space-y-3 pt-6 border-t border-white/10 text-xs text-zinc-200">
                <div className="font-bold text-white text-[11px]">
                  Complete Pro Suite Included
                </div>
                {[
                  "Dual-Side ID Card Merger (NID & Passports)",
                  "On-device neural OCR text recognition",
                  "AES-256 PDF Password Encryption",
                  "Biometric Fingerprint & PIN App Lock",
                  "Zero ads & Zero third-party telemetry",
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-[#818CF8] flex-shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Plan 3: Enterprise & Legal */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl flex flex-col justify-between hover:border-white/20 transition-all">
            <div>
              <div className="text-lg font-bold text-white">Enterprise & Legal</div>
              <p className="text-xs text-zinc-400 mt-1">
                For law firms, medical clinics & banks
              </p>

              <div className="mt-6">
                <span className="text-4xl font-extrabold text-white">Free & Open</span>
                <span className="block text-[10px] text-zinc-500 mt-2">
                  Air-gapped deployment & self-hosted
                </span>
              </div>

              <div className="mt-6">
                <a
                  href="#download"
                  className="block w-full text-center rounded-xl bg-[#5B4DF6]/30 hover:bg-[#5B4DF6]/40 text-white py-3 text-xs font-bold transition-all"
                >
                  Get Open Source Release &gt;
                </a>
              </div>

              <div className="mt-8 space-y-3 pt-6 border-t border-white/10 text-xs text-zinc-300">
                <div className="font-bold text-white text-[11px]">
                  Strict Data Sovereignty
                </div>
                {[
                  "Zero cloud dependencies (Air-Gapped)",
                  "Local SQLite database encryption",
                  "Batch multi-page PDF generation",
                  "Custom folders, tags & keyword search",
                  "No accounts, sign-ins, or tracking",
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-zinc-400 flex-shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

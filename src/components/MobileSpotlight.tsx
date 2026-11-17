"use client";

import React from "react";
import { ChevronRight, Download } from "lucide-react";

export default function MobileSpotlight() {
  return (
    <section id="id-card" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5B4DF6] tracking-wide cursor-pointer hover:underline">
              <span>Mobile scanner</span>
              <ChevronRight className="h-3 w-3" />
            </div>

            <h2 className="mt-4 text-4xl sm:text-5xl font-black text-[#0F172A] tracking-tight leading-tight">
              Your documents{" "}
              <span className="font-serif-italic font-normal text-[#1E1B4B] block">
                in your pocket.
              </span>
            </h2>

            <p className="mt-5 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-md">
              Instant multi-page scanning, dual-side ID card merging, biometric fingerprint lock, and offline SQLite archive. Carry a studio scanner in your pocket.
            </p>

            <div className="mt-8">
              <a
                href="#download"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#5B4DF6] hover:bg-[#4C3EE3] text-white px-7 py-3.5 text-xs font-bold shadow-lg shadow-[#5B4DF6]/25 transition-all hover:scale-105 active:scale-95"
              >
                <Download className="h-4 w-4" />
                <span>Download APK free</span>
              </a>
            </div>
          </div>

          {/* Right Column: Vivid Indigo/Blue Gradient Card with Phone Mockup */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-xl rounded-[36px] bg-gradient-to-br from-[#60A5FA] via-[#3B82F6] to-[#4F46E5] p-8 sm:p-12 shadow-2xl relative overflow-hidden flex items-center justify-center">
              {/* Floating Smartphone inside */}
              <div className="relative w-[240px] sm:w-[270px] aspect-[9/18.5] rounded-[38px] p-2.5 bg-zinc-950 shadow-2xl ring-1 ring-white/30 transform hover:-translate-y-2 transition-transform duration-500">
                <div className="rounded-[30px] bg-white h-full overflow-hidden flex flex-col justify-between text-zinc-900 p-3 pt-6">
                  {/* Top Header */}
                  <div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold">Doc Scanner</span>
                      <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">
                        Offline Ready ✓
                      </span>
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-2 text-center">
                      <div className="rounded-xl bg-[#F0F4FF] p-2">
                        <span className="text-[9px] text-zinc-400 block">Total Scans</span>
                        <span className="text-xs font-black text-indigo-700">124 Docs</span>
                      </div>
                      <div className="rounded-xl bg-[#F0FDF4] p-2">
                        <span className="text-[9px] text-zinc-400 block">AES Encrypted</span>
                        <span className="text-xs font-black text-emerald-700">18 Files</span>
                      </div>
                    </div>
                  </div>

                  {/* Body Mini App List */}
                  <div className="space-y-2 my-auto">
                    <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-2 flex justify-between items-center text-[9px]">
                      <div>
                        <div className="font-bold text-zinc-900">#DOC-2026-9041</div>
                        <div className="text-zinc-400">NDA Contract • A4 Clean</div>
                      </div>
                      <span className="bg-emerald-100 text-emerald-700 font-bold px-1.5 py-0.5 rounded text-[8px]">
                        Saved
                      </span>
                    </div>

                    <div className="rounded-xl bg-indigo-50 border border-indigo-200 p-2 text-[9px] flex justify-between items-center">
                      <div>
                        <div className="font-bold text-indigo-900">#NID-8472-01</div>
                        <div className="text-indigo-500 text-[8px]">ID Card (Front + Back)</div>
                      </div>
                      <span className="bg-indigo-100 text-[#5B4DF6] font-bold px-1.5 py-0.5 rounded text-[8px]">
                        Merged
                      </span>
                    </div>
                  </div>

                  {/* Bottom Tab Bar */}
                  <div className="pt-2 border-t border-zinc-100 flex justify-around text-zinc-400 text-xs">
                    <span className="text-[#5B4DF6] font-bold">● Docs</span>
                    <span>● Camera</span>
                    <span>● Lock</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

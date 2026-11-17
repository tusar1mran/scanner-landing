"use client";

import React, { useState } from "react";
import { Compass, ChevronRight, Scan } from "lucide-react";

export default function EdgeDetectionShowcase() {
  const [activeTab, setActiveTab] = useState<"current" | "summary">("current");
  const [docName, setDocName] = useState("Contract-Agreement-2026.pdf");

  return (
    <section id="edge-detection" className="py-24 sm:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5B4DF6] tracking-wide cursor-pointer hover:underline">
              <span>AI Computer Vision</span>
              <ChevronRight className="h-3 w-3" />
            </div>

            <h2 className="mt-4 text-4xl sm:text-5xl font-black text-[#0F172A] tracking-tight leading-[1.12]">
              Know exactly{" "}
              <span className="font-serif-italic font-normal text-[#1E1B4B] block">
                where your edges are.
              </span>
            </h2>

            <p className="mt-5 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-md">
              No more crooked camera angles or messy desk backgrounds. Google ML Kit pins document corners in sub-second speed, automatically dewarping skewed papers into flat, studio-grade A4 sheets.
            </p>

            {/* Interactive Document Simulator Box */}
            <div className="mt-8 p-2 rounded-2xl bg-white border border-zinc-200/80 shadow-soft-xl max-w-md flex items-center justify-between gap-3">
              <div className="px-3 flex-1">
                <label className="block text-[10px] text-zinc-400 font-medium">
                  Document title / ID
                </label>
                <input
                  type="text"
                  value={docName}
                  onChange={(e) => setDocName(e.target.value)}
                  placeholder="e.g. Contract-2026.pdf"
                  className="w-full text-xs font-bold text-zinc-800 focus:outline-none bg-transparent"
                />
              </div>

              <button
                type="button"
                onClick={() =>
                  alert(`Processing ${docName}...\nCorners snapped: 4/4\nDewarped: 99.8% precision\nSaved to local encrypted storage!`)
                }
                className="flex items-center gap-2 rounded-xl bg-[#5B4DF6] hover:bg-[#4C3EE3] text-white px-5 py-3 text-xs font-bold shadow-md shadow-[#5B4DF6]/20 transition-all active:scale-95 flex-shrink-0"
              >
                <Scan className="h-3.5 w-3.5" />
                <span>Scan now</span>
              </button>
            </div>
          </div>

          {/* Right Column: Viewfinder Telemetry Card */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-card-float border border-zinc-200/80 relative overflow-hidden">
              {/* Top Viewfinder HUD graphic */}
              <div className="relative h-60 sm:h-64 rounded-2xl bg-[#EEF2F6] overflow-hidden p-4 flex flex-col justify-between border border-zinc-200">
                {/* Distance & Dimension Tags */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="bg-white/90 shadow-sm border border-zinc-200 text-zinc-800 text-[10px] font-bold px-3 py-1 rounded-full">
                      Width: 210 mm
                    </span>
                    <span className="bg-white/90 shadow-sm border border-zinc-200 text-zinc-800 text-[10px] font-bold px-3 py-1 rounded-full">
                      Height: 297 mm (A4)
                    </span>
                  </div>

                  <div className="h-8 w-8 rounded-full bg-white shadow-sm flex items-center justify-center text-zinc-600">
                    <Compass className="h-4 w-4" />
                  </div>
                </div>

                {/* Central Reticle */}
                <div className="mx-auto my-auto relative">
                  <div className="h-12 w-12 rounded-full bg-[#5B4DF6] text-white flex items-center justify-center shadow-lg shadow-[#5B4DF6]/40 animate-pulse">
                    <Scan className="h-6 w-6" />
                  </div>
                  <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-emerald-400 border-2 border-white" />
                </div>

                {/* Coordinates Bar */}
                <div className="flex justify-between items-center text-[10px] text-zinc-500 font-mono">
                  <span>TL: [14, 18]</span>
                  <span className="text-[#5B4DF6] font-bold">Auto-Perspective Dewarp: 99.8%</span>
                  <span>BR: [980, 1420]</span>
                </div>
              </div>

              {/* Lower Controls & Doc Scanner Metrics */}
              <div className="mt-6">
                {/* Toggle Pill Buttons */}
                <div className="flex items-center gap-2 p-1 rounded-xl bg-zinc-100 max-w-xs">
                  <button
                    onClick={() => setActiveTab("current")}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                      activeTab === "current"
                        ? "bg-white text-zinc-900 shadow-sm"
                        : "text-zinc-500 hover:text-zinc-900"
                    }`}
                  >
                    Current Document
                  </button>
                  <button
                    onClick={() => setActiveTab("summary")}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                      activeTab === "summary"
                        ? "bg-white text-zinc-900 shadow-sm"
                        : "text-zinc-500 hover:text-zinc-900"
                    }`}
                  >
                    Batch Summary
                  </button>
                </div>

                {/* Real Doc Scanner Telemetry */}
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-zinc-100 text-left">
                  <div>
                    <span className="block text-[11px] text-zinc-400 font-medium">
                      Total Scanned
                    </span>
                    <span className="text-base font-black text-zinc-900 mt-0.5 block">
                      124 Docs
                    </span>
                  </div>

                  <div>
                    <span className="block text-[11px] text-zinc-400 font-medium">
                      Batch Queue
                    </span>
                    <span className="text-base font-black text-zinc-900 mt-0.5 block">
                      8 Pages
                    </span>
                  </div>

                  <div>
                    <span className="block text-[11px] text-zinc-400 font-medium">
                      Scan Latency
                    </span>
                    <span className="text-base font-black text-emerald-600 mt-0.5 block">
                      0.18s (Local)
                    </span>
                  </div>

                  <div>
                    <span className="block text-[11px] text-zinc-400 font-medium">
                      Export Quality
                    </span>
                    <span className="text-base font-black text-zinc-900 mt-0.5 block">
                      300 DPI (A4)
                    </span>
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

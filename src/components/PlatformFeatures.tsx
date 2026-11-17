"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

export default function PlatformFeatures() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Category Pill */}
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5B4DF6] tracking-wide cursor-pointer hover:underline">
          <span>Platform capabilities</span>
          <ChevronRight className="h-3 w-3" />
        </div>

        {/* Heading */}
        <h2 className="mt-4 text-4xl sm:text-5xl font-black text-[#0F172A] tracking-tight max-w-2xl mx-auto leading-tight">
          Everything you need{" "}
          <span className="font-serif-italic font-normal text-[#1E1B4B] block sm:inline">
            to digitize documents.
          </span>
        </h2>

        {/* Two Feature Cards matching the bottom-left of reference image */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Card 1: Perspective Dewarping & Studio Filters */}
          <div className="rounded-3xl bg-[#F8FAFC] border border-zinc-200/80 p-8 shadow-sm flex flex-col justify-between">
            {/* Telemetry Mini Box */}
            <div className="rounded-2xl bg-white p-5 shadow-xs border border-zinc-200/60 grid grid-cols-2 gap-4">
              <div>
                <span className="text-[10px] text-zinc-400 font-medium">
                  Total Scans
                </span>
                <span className="text-lg font-black text-zinc-900 block mt-0.5">
                  124 Docs
                </span>
              </div>
              <div>
                <span className="text-[10px] text-zinc-400 font-medium">
                  Dewarp Precision
                </span>
                <span className="text-lg font-black text-emerald-600 block mt-0.5">
                  99.8%
                </span>
              </div>
              <div className="pt-2 border-t border-zinc-100">
                <span className="text-[10px] text-zinc-400 font-medium">
                  Processing Time
                </span>
                <span className="text-sm font-black text-zinc-900 block mt-0.5">
                  0.18s / Page
                </span>
              </div>
              <div className="pt-2 border-t border-zinc-100">
                <span className="text-[10px] text-zinc-400 font-medium">
                  PDF Compression
                </span>
                <span className="text-sm font-black text-zinc-900 block mt-0.5">
                  ~240 KB (Compact)
                </span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-black text-zinc-900">
                Real-time edge flattening & filters
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-500 leading-relaxed">
                Google ML Kit detects document borders and dewarps perspective angles in real-time. Apply B&W Clean or Magic Color to eliminate paper yellowing and desk shadows.
              </p>
            </div>
          </div>

          {/* Card 2: Neural OCR & Search */}
          <div className="rounded-3xl bg-[#F8FAFC] border border-zinc-200/80 p-8 shadow-sm flex flex-col justify-between">
            {/* Notification / OCR Bubble Graphic */}
            <div className="rounded-2xl bg-white p-5 shadow-xs border border-zinc-200/60 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-zinc-500">OCR Ready</span>
                <div className="h-4 w-px bg-zinc-200" />
                <div className="flex items-center gap-2">
                  <div className="h-7 w-7 rounded-lg bg-indigo-100 text-[#5B4DF6] flex items-center justify-center font-bold text-xs">
                    📄
                  </div>
                  <div>
                    <span className="text-xs font-bold text-zinc-900 block">
                      Text Extracted (240 Words)
                    </span>
                    <span className="text-[10px] text-zinc-400 block">
                      Invoice recognized in 180ms • Copied to clipboard
                    </span>
                  </div>
                </div>
              </div>

              <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full flex-shrink-0">
                99.4% Acc •
              </span>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-black text-zinc-900">
                On-device neural OCR & instant search
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-500 leading-relaxed">
                Extract text from receipts, books, or agreements in real-time. Search through your personal archive by keywords without sending a single byte over the web.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

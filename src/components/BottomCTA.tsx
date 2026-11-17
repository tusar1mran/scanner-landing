"use client";

import React from "react";
import { Download, ChevronRight, Zap } from "lucide-react";

export default function BottomCTA() {
  return (
    <section id="download" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto rounded-[40px] bg-gradient-to-r from-[#3B82F6] via-[#4F46E5] to-[#7C3AED] p-10 sm:p-20 text-center text-white shadow-2xl relative overflow-hidden">
        {/* Soft Cloud Ambient Lights */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-white/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-indigo-300/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Top Pill Announcement */}
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold backdrop-blur-md cursor-pointer hover:bg-white/25 transition-colors">
            <span>Doc Scanner 1.0 is now available for Android</span>
            <ChevronRight className="h-3 w-3" />
          </div>

          {/* Heading with Serif Italic */}
          <h2 className="mt-6 text-4xl sm:text-6xl font-black tracking-tight leading-tight">
            Document scanning made simple{" "}
            <span className="font-serif-italic font-normal block sm:inline">
              for modern smartphones
            </span>
          </h2>

          <p className="mt-5 text-sm sm:text-base text-indigo-100 max-w-xl mx-auto leading-relaxed">
            The privacy-first on-device scanner that digitizes receipts, multi-page contracts, and ID cards with real-time AI edge dewarping, instant offline exports, and zero cloud tracking.
          </p>

          {/* Dual Pill Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#download-apk"
              onClick={(e) => {
                e.preventDefault();
                alert("Doc Scanner APK v1.0 direct download starting...");
              }}
              className="flex items-center gap-2.5 rounded-full bg-white hover:bg-indigo-50 text-[#4338CA] px-8 py-3.5 text-xs font-black shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              <Zap className="h-3.5 w-3.5 fill-[#4338CA] text-[#4338CA]" />
              <span>Start scanning now</span>
            </a>

            <a
              href="#download-apk"
              onClick={(e) => {
                e.preventDefault();
                alert("Doc Scanner APK v1.0 direct download starting...");
              }}
              className="flex items-center gap-2 rounded-full border border-white/40 bg-white/10 hover:bg-white/20 text-white px-7 py-3.5 text-xs font-bold backdrop-blur-sm transition-all hover:scale-105 active:scale-95"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download APK (Free)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

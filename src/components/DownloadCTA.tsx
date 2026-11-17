"use client";

import React from "react";
import { Download, ShieldCheck, QrCode, Sparkles, CheckCircle2 } from "lucide-react";

export default function DownloadCTA() {
  return (
    <section id="download" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[40px] border border-white/15 bg-gradient-to-br from-emerald-600 via-teal-700 to-emerald-950 p-8 sm:p-16 text-white shadow-2xl overflow-hidden">
          {/* Ambient circles */}
          <div className="absolute top-0 right-0 -mr-24 -mt-24 h-96 w-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-24 -mb-24 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-emerald-300" />
                <span>OFFICIAL RELEASE • VERSION 1.0.0</span>
              </div>

              <h2 className="mt-5 text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                Get Doc Scanner for Your Android Phone
              </h2>

              <p className="mt-4 text-base sm:text-lg text-emerald-100 max-w-2xl leading-relaxed">
                Experience the freedom of a truly private, watermark-free scanner. No subscriptions, no ads, and zero cloud lock-in.
              </p>

              {/* Guarantees row */}
              <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-emerald-100 font-semibold">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                  Android 7.0+ Ready
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                  Compact ~24 MB
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                  100% Free Forever
                </span>
              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#download-apk"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Doc Scanner APK v1.0.0 download will begin shortly.");
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 text-base font-black text-emerald-950 shadow-2xl hover:bg-emerald-50 active:scale-95 transition-all group"
                >
                  <Download className="h-5 w-5 text-emerald-700 transition-transform group-hover:-translate-y-0.5" />
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-bold text-emerald-700 leading-none">
                      Direct APK File
                    </div>
                    <div className="text-sm font-black">Download Android APK (v1.0.0)</div>
                  </div>
                </a>

                <div className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-xs font-bold backdrop-blur-md">
                  <ShieldCheck className="h-5 w-5 text-emerald-300" />
                  <span>Google Play Protect Verified • Safe & Clean</span>
                </div>
              </div>
            </div>

            {/* Right QR Code Showcase Card */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="rounded-3xl bg-white p-6 shadow-2xl text-zinc-950 text-center max-w-[280px] w-full">
                <div className="relative mx-auto h-44 w-44 rounded-2xl bg-zinc-100 p-3 flex flex-col items-center justify-center border-2 border-dashed border-emerald-500/50">
                  <QrCode className="h-32 w-32 text-zinc-900" />
                  <span className="text-[10px] font-black text-emerald-700 mt-1">
                    Scan With Phone Camera
                  </span>
                </div>
                <div className="mt-4">
                  <div className="text-xs font-black text-zinc-900">Direct Mobile Install</div>
                  <div className="text-[11px] text-zinc-500 mt-0.5">
                    Scan QR code on your mobile device to download instantly
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

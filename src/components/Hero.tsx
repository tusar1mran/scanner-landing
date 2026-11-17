"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Zap, ArrowRight, ChevronRight } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const leftCard1Ref = useRef<HTMLDivElement>(null);
  const leftCard2Ref = useRef<HTMLDivElement>(null);
  const rightCard1Ref = useRef<HTMLDivElement>(null);
  const rightCard2Ref = useRef<HTMLDivElement>(null);
  const rightCard3Ref = useRef<HTMLDivElement>(null);

  // GSAP 3D Interactive Parallax on Mouse Move
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      if (phoneRef.current) {
        gsap.to(phoneRef.current, {
          rotationY: x * 15,
          rotationX: -y * 15,
          ease: "power2.out",
          duration: 0.8,
          transformPerspective: 1000,
        });
      }

      if (leftCard1Ref.current) {
        gsap.to(leftCard1Ref.current, {
          x: x * -25,
          y: y * -20,
          rotationZ: -2 + x * 5,
          ease: "power2.out",
          duration: 1,
        });
      }

      if (leftCard2Ref.current) {
        gsap.to(leftCard2Ref.current, {
          x: x * -18,
          y: y * -15,
          rotationZ: -1 + x * 4,
          ease: "power2.out",
          duration: 1.1,
        });
      }

      if (rightCard1Ref.current) {
        gsap.to(rightCard1Ref.current, {
          x: x * 22,
          y: y * -20,
          rotationZ: 2 - x * 4,
          ease: "power2.out",
          duration: 1,
        });
      }

      if (rightCard2Ref.current) {
        gsap.to(rightCard2Ref.current, {
          x: x * 28,
          y: y * -15,
          ease: "power2.out",
          duration: 1.2,
        });
      }

      if (rightCard3Ref.current) {
        gsap.to(rightCard3Ref.current, {
          x: x * 18,
          y: y * -10,
          ease: "power2.out",
          duration: 1.3,
        });
      }
    };

    const handleMouseLeave = () => {
      if (phoneRef.current) {
        gsap.to(phoneRef.current, {
          rotationY: 0,
          rotationX: 0,
          ease: "power2.out",
          duration: 1.2,
        });
      }
      const cards = [
        leftCard1Ref.current,
        leftCard2Ref.current,
        rightCard1Ref.current,
        rightCard2Ref.current,
        rightCard3Ref.current,
      ];
      cards.forEach((card) => {
        if (card) {
          gsap.to(card, {
            x: 0,
            y: 0,
            rotationZ: 0,
            ease: "power2.out",
            duration: 1.2,
          });
        }
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative pt-6 pb-24 overflow-hidden bg-gradient-to-b from-[#F2F5FF] via-white to-[#F8FAFC]"
    >
      {/* Background Soft Ambient Purple Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-b from-[#818CF8]/20 via-[#C7D2FE]/25 to-transparent rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Announcement Pill */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold text-[#4F46E5] shadow-sm border border-[#E0E7FF] hover:bg-white transition-all cursor-pointer">
          <span>Doc Scanner 1.0 is now live for Android</span>
          <ChevronRight className="h-3.5 w-3.5 text-[#6366F1]" />
        </div>

        {/* Main Headline (Sans-serif + Serif Italic as in reference image) */}
        <h1 className="mt-8 text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#0F172A] tracking-tight leading-[1.08] max-w-4xl mx-auto">
          Document scanning made simple{" "}
          <span className="font-serif-italic font-normal text-[#1E1B4B] block sm:inline">
            for modern smartphones
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-sm sm:text-base text-zinc-600 max-w-2xl mx-auto leading-relaxed">
          The privacy-first on-device scanner that digitizes receipts, multi-page contracts,
          and ID cards — with real-time AI edge dewarping, on-device OCR, and zero cloud tracking.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#download"
            className="flex items-center gap-3 rounded-full bg-[#5B4DF6] hover:bg-[#4C3EE3] text-white px-7 py-3.5 shadow-xl shadow-[#5B4DF6]/25 transition-all hover:scale-105 active:scale-95 text-left"
          >
            <div className="h-7 w-7 rounded-full bg-white/20 flex items-center justify-center">
              <Zap className="h-3.5 w-3.5 fill-white text-white" />
            </div>
            <div>
              <div className="text-xs font-bold leading-tight">Start scanning now</div>
              <div className="text-[10px] text-indigo-200 font-normal">
                100% free • No account required
              </div>
            </div>
          </a>

          <a
            href="#edge-detection"
            className="inline-flex items-center gap-2 text-xs font-bold text-zinc-700 hover:text-[#5B4DF6] px-5 py-3 transition-colors"
          >
            <span>Explore live features</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* 3D Smartphone & Floating Cards Showcase */}
        <div className="mt-16 sm:mt-20 relative max-w-5xl mx-auto flex items-center justify-center min-h-[520px]">
          {/* Subtle Ambient Radial Glow directly behind phone */}
          <div className="absolute inset-x-1/4 top-12 h-80 bg-gradient-to-tr from-[#6366F1]/30 via-[#A5B4FC]/30 to-[#818CF8]/20 rounded-full blur-[90px] pointer-events-none -z-10" />

          {/* Left Floating Card 1 (#DOC-2026-9041 Contract) */}
          <div
            ref={leftCard1Ref}
            className="hidden lg:block absolute left-4 xl:left-8 top-16 w-56 rounded-2xl bg-white/95 p-4 shadow-card-float backdrop-blur-md border border-white text-left z-20"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                NDA & Contract
              </span>
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-bold text-emerald-600 border border-emerald-200">
                A4 Dewarped
              </span>
            </div>
            <div className="mt-1 text-xs font-bold text-zinc-900 font-mono">
              #DOC-2026-9041
            </div>
            <div className="mt-3 pt-2 border-t border-zinc-100 flex justify-between text-[9px] text-zinc-500">
              <div>
                <span className="block text-zinc-400">Pages:</span>
                <span className="font-semibold text-zinc-800">3 Pages (PDF)</span>
              </div>
              <div className="text-right">
                <span className="block text-zinc-400">Filter:</span>
                <span className="font-semibold text-zinc-800">B&W Clean</span>
              </div>
            </div>
          </div>

          {/* Left Floating Card 2 (#NID-8472-01 ID Card Mode) */}
          <div
            ref={leftCard2Ref}
            className="hidden lg:block absolute left-8 xl:left-14 bottom-24 w-54 rounded-2xl bg-white/95 p-3.5 shadow-card-float backdrop-blur-md border border-white text-left z-20"
          >
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-bold text-zinc-400 uppercase">
                ID Card Mode
              </span>
              <span className="rounded-full bg-teal-50 px-2 py-0.5 text-[9px] font-bold text-teal-600">
                Dual Merged
              </span>
            </div>
            <div className="mt-0.5 text-xs font-bold text-zinc-900 font-mono">
              #NID-8472-01
            </div>
            <div className="mt-2 text-[9px] text-zinc-500">
              Front & Back stitched on single A4
            </div>
          </div>

          {/* Central 3D Smartphone Canvas */}
          <div
            ref={phoneRef}
            className="relative w-[280px] sm:w-[310px] aspect-[9/18.8] rounded-[44px] p-3 bg-zinc-950 shadow-2xl shadow-indigo-950/30 ring-1 ring-white/40 z-30 preserve-3d"
          >
            {/* Phone Screen Container */}
            <div className="relative overflow-hidden rounded-[36px] bg-white h-full flex flex-col justify-between text-zinc-900">
              {/* Top Speaker Notch */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 h-4 w-24 rounded-full bg-zinc-950 z-40 flex items-center justify-center">
                <div className="h-1.5 w-8 rounded-full bg-zinc-800" />
              </div>

              {/* App Screen Header inside phone */}
              <div className="pt-8 pb-2.5 px-4 bg-white border-b border-zinc-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-900">
                  <span className="text-zinc-400">←</span>
                  <span>Live Document Scanner</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[8px] font-bold text-emerald-600">ML Kit</span>
                </div>
              </div>

              {/* Viewfinder Map & Scanning Grid */}
              <div className="relative flex-1 bg-[#EEF2F6] p-3 flex flex-col justify-between overflow-hidden">
                {/* Laser scan line */}
                <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#5B4DF6] to-transparent shadow-[0_0_10px_#5B4DF6] animate-laser-beam pointer-events-none z-30" />

                {/* Simulated Document inside Viewfinder */}
                <div className="relative mx-auto my-auto w-full h-[85%] rounded-2xl bg-white border-2 border-[#5B4DF6]/80 p-3 shadow-md flex flex-col justify-between">
                  {/* Corner Targets */}
                  <div className="absolute top-1 left-1 h-3 w-3 border-t-2 border-l-2 border-[#5B4DF6]" />
                  <div className="absolute top-1 right-1 h-3 w-3 border-t-2 border-r-2 border-[#5B4DF6]" />
                  <div className="absolute bottom-1 left-1 h-3 w-3 border-b-2 border-l-2 border-[#5B4DF6]" />
                  <div className="absolute bottom-1 right-1 h-3 w-3 border-b-2 border-r-2 border-[#5B4DF6]" />

                  {/* Document Header */}
                  <div className="border-b border-zinc-100 pb-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-black text-zinc-900 tracking-wider">
                        CONSULTING INVOICE
                      </span>
                      <span className="text-[8px] bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded font-bold">
                        A4 DEWARPED
                      </span>
                    </div>
                    <div className="text-[8px] text-zinc-400 mt-0.5">Doc: #INV-2026-908 • 300 DPI</div>
                  </div>

                  {/* Body Content */}
                  <div className="space-y-1.5 py-1 text-[8px] text-zinc-700">
                    <div className="flex justify-between">
                      <span>Software Architecture Audit</span>
                      <span className="font-semibold">$2,400.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>On-Device Privacy Engine</span>
                      <span className="font-semibold">$650.00</span>
                    </div>
                    <div className="border-t border-dashed border-zinc-200 pt-1 flex justify-between font-bold text-zinc-900">
                      <span>Total Amount:</span>
                      <span>$3,050.00</span>
                    </div>
                  </div>

                  {/* Signature */}
                  <div className="pt-1 border-t border-zinc-100 flex justify-between items-center text-[7px] text-zinc-400">
                    <span className="font-serif italic font-bold text-zinc-800 text-[9px]">
                      Jonathan Vance
                    </span>
                    <span className="text-[#5B4DF6] font-bold">Corners Snapped ✓</span>
                  </div>
                </div>

                {/* Bottom Toggle Pills in Phone */}
                <div className="mt-2 grid grid-cols-2 gap-1 bg-zinc-200/80 p-1 rounded-xl text-[10px] font-semibold text-center">
                  <div className="bg-white rounded-lg py-1 text-zinc-900 shadow-xs">
                    Current Doc
                  </div>
                  <div className="py-1 text-zinc-500">Export PDF</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Floating Card 1 (Today's Scans: 124) */}
          <div
            ref={rightCard1Ref}
            className="hidden lg:block absolute right-6 xl:right-12 top-14 w-48 rounded-2xl bg-white/95 p-3.5 shadow-card-float backdrop-blur-md border border-white text-left z-20"
          >
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center font-bold text-xs">
                📄
              </div>
              <div>
                <span className="block text-[9px] text-zinc-400 font-medium">
                  Today&apos;s scans
                </span>
                <span className="text-sm font-black text-zinc-900">124</span>
              </div>
            </div>
          </div>

          {/* Right Floating Card 2 (Protected: 18) */}
          <div
            ref={rightCard2Ref}
            className="hidden lg:block absolute right-12 xl:right-18 top-44 w-44 rounded-2xl bg-white/95 p-3.5 shadow-card-float backdrop-blur-md border border-white text-left z-20"
          >
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs">
                🔒
              </div>
              <div>
                <span className="block text-[9px] text-zinc-400 font-medium">
                  AES-256 Encrypted
                </span>
                <span className="text-sm font-black text-zinc-900">18 files</span>
              </div>
            </div>
          </div>

          {/* Right Floating Card 3 (Storage saved: 45 MB) */}
          <div
            ref={rightCard3Ref}
            className="hidden lg:block absolute right-8 xl:right-14 bottom-24 w-48 rounded-2xl bg-white/95 p-3.5 shadow-card-float backdrop-blur-md border border-white text-left z-20"
          >
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg bg-indigo-100 text-[#5B4DF6] flex items-center justify-center font-bold text-xs">
                🛡️
              </div>
              <div>
                <span className="block text-[9px] text-zinc-400 font-medium">
                  Cloud Uploads
                </span>
                <span className="text-sm font-black text-emerald-600">0 Bytes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

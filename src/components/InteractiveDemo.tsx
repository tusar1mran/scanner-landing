"use client";

import React, { useState } from "react";
import {
  Sparkles,
  CheckCircle,
  FileText,
  CreditCard,
  Copy,
  Search,
  Check,
} from "lucide-react";

export default function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState<"filter" | "idcard" | "ocr">("filter");
  const [filterMode, setFilterMode] = useState<"bw" | "magic" | "grayscale" | "raw">("bw");
  const [copied, setCopied] = useState(false);

  const sampleOCRText = `INVOICE & PURCHASE ORDER
Order Reference: #PO-2026-90412
Date: November 17, 2026
Vendor: CloudScale Infrastructure Inc.
Client: StarConnect Enterprise Systems

Item Description                     Qty    Unit Price    Total (USD)
1. Enterprise Cloud Security Audit     1    $2,850.00      $2,850.00
2. Dedicated Privacy Mesh Node         3      $450.00      $1,350.00
---------------------------------------------------------------------
Subtotal:                                                 $4,200.00
VAT / Sales Tax (5%):                                       $210.00
Total Amount Payable:                                     $4,410.00

Payment Terms: Net 30 Days. Wire instructions verified.
Status: Authenticated & Digitally Verified.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleOCRText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="demo" className="py-24 sm:py-32 bg-[#080d10] border-t border-b border-white/10 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3.5 py-1 text-xs font-bold text-teal-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>INTERACTIVE SCAN LAB</span>
          </div>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
            Test the Processing Engine Live
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-400">
            Switch modes to observe how Doc Scanner corrects perspective, removes noise, and extracts text on the fly.
          </p>

          {/* Mode Switch Tabs (Behance floating tab style) */}
          <div className="mt-9 inline-flex p-1.5 rounded-2xl bg-[#0e161c] border border-white/10 shadow-xl">
            <button
              onClick={() => setActiveTab("filter")}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold transition-all ${
                activeTab === "filter"
                  ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/30"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Sparkles className="h-4 w-4" />
              <span>Smart Document Filters</span>
            </button>
            <button
              onClick={() => setActiveTab("idcard")}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold transition-all ${
                activeTab === "idcard"
                  ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/30"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <CreditCard className="h-4 w-4" />
              <span>ID Card Dual-Merge</span>
            </button>
            <button
              onClick={() => setActiveTab("ocr")}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold transition-all ${
                activeTab === "ocr"
                  ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/30"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <FileText className="h-4 w-4" />
              <span>Instant Neural OCR</span>
            </button>
          </div>
        </div>

        {/* Dynamic Interactive Stage */}
        <div className="mt-12 mx-auto max-w-4xl rounded-3xl border border-white/10 bg-[#0e161c]/90 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl">
          {activeTab === "filter" && (
            <div>
              {/* Filter Sub-selector Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <h3 className="font-extrabold text-lg text-white">
                    Adaptive Image Thresholding
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Select a filter below to see shadows and yellow tones vanish instantly.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {[
                    { id: "bw", label: "B&W Clean (Crisp)" },
                    { id: "magic", label: "Magic Color" },
                    { id: "grayscale", label: "Smooth Grayscale" },
                    { id: "raw", label: "Raw Shot (Unfiltered)" },
                  ].map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setFilterMode(f.id as "bw" | "magic" | "grayscale" | "raw")}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        filterMode === f.id
                          ? "bg-emerald-500 text-black shadow-md shadow-emerald-500/40"
                          : "bg-white/[0.04] text-zinc-300 hover:bg-white/[0.08] border border-white/10"
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Document Visual Stage */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Visual Document Box */}
                <div className="relative mx-auto w-full max-w-md rounded-2xl border-2 border-emerald-500/50 p-6 shadow-2xl bg-white transition-all duration-300">
                  <div
                    className={`transition-all duration-300 space-y-4 ${
                      filterMode === "bw"
                        ? "contrast-200 grayscale brightness-110"
                        : filterMode === "magic"
                        ? "saturate-150 contrast-125 brightness-105"
                        : filterMode === "grayscale"
                        ? "grayscale opacity-95"
                        : "bg-[#f9f3e5] p-2 rounded contrast-95 opacity-80"
                    }`}
                  >
                    <div className="flex justify-between items-start border-b border-zinc-300 pb-3">
                      <div>
                        <div className="text-sm font-black tracking-wider text-zinc-950">
                          ENTERPRISE MASTER AGREEMENT
                        </div>
                        <div className="text-[10px] text-zinc-500 font-mono">
                          Document ID: DOC-2026-US-4821
                        </div>
                      </div>
                      <div className="text-[9px] font-black bg-zinc-100 text-zinc-900 px-2 py-0.5 rounded uppercase">
                        {filterMode} Mode
                      </div>
                    </div>

                    <div className="text-xs text-zinc-800 leading-relaxed space-y-2">
                      <p>
                        This Master Services Agreement is entered into by and between the Client and the Service Provider. All deliverables are subject to strict non-disclosure terms.
                      </p>
                      <p className="text-[11px] text-zinc-600">
                        Warranty: 100% on-device data sovereignty guaranteed.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-zinc-200 flex justify-between items-center text-[11px]">
                      <div>
                        <span className="block text-[8px] text-zinc-400">Authorized Signature:</span>
                        <span className="font-serif italic font-bold text-zinc-950 text-xs">
                          Alexander Wright
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-emerald-700 font-bold text-[10px]">
                        <CheckCircle className="h-3.5 w-3.5" />
                        <span>High DPI Text</span>
                      </div>
                    </div>
                  </div>

                  {/* Corner indicator */}
                  <div className="absolute top-2 right-2 text-[9px] font-black text-emerald-950 bg-emerald-300/90 border border-emerald-400 px-2.5 py-0.5 rounded-md">
                    {filterMode === "bw"
                      ? "Noise & Shadow Eliminated"
                      : filterMode === "magic"
                      ? "Ink & Colored Stamps Preserved"
                      : filterMode === "grayscale"
                      ? "Smooth Gray Gradation"
                      : "Camera Flash & Cast Shadows"}
                  </div>
                </div>

                {/* Info summary */}
                <div className="space-y-4">
                  <div className="rounded-2xl bg-emerald-500/10 p-5 border border-emerald-500/20 text-emerald-200">
                    <h4 className="font-extrabold text-sm flex items-center gap-2 text-white">
                      <Sparkles className="h-4 w-4 text-emerald-400" />
                      Studio-Calibrated Kernels
                    </h4>
                    <p className="text-xs mt-1.5 leading-relaxed text-zinc-300">
                      Our custom color matrix balances white paper backgrounds without blowing out signatures or low-contrast ballpoint pen ink.
                    </p>
                  </div>

                  <ul className="space-y-2.5 text-xs text-zinc-300">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span>Converts yellow or dim indoor photos into pure white sheets</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span>Boosts contrast for crisp legibility when printing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span>Massively shrinks file size for instant WhatsApp and email sharing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "idcard" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-black text-2xl text-white">
                  Dual-Side ID Card Merger
                </h3>
                <p className="text-sm text-zinc-300 mt-2.5 leading-relaxed">
                  Never fumble with two separate image attachments again. Doc Scanner lets you capture both sides of any ID, passport, or credit card and merges them onto a single A4 page ready for official submission.
                </p>

                <div className="mt-6 space-y-3 text-xs text-zinc-300">
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold text-xs">
                      1
                    </div>
                    <span>Scan Front Side with auto edge snapping</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold text-xs">
                      2
                    </div>
                    <span>Flip card & scan Back Side</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold text-xs">
                      3
                    </div>
                    <span>Export single unified PDF with centered layout</span>
                  </div>
                </div>
              </div>

              {/* ID Card Graphic Mockup */}
              <div className="rounded-2xl border border-white/10 bg-[#080d10] p-6 shadow-2xl space-y-4">
                <div className="text-[10px] font-mono font-bold text-zinc-400 text-center uppercase tracking-widest">
                  Single A4 Composite Preview
                </div>

                {/* Front Side */}
                <div className="rounded-xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 to-teal-950/30 p-4 flex items-center gap-3">
                  <div className="h-11 w-9 rounded bg-zinc-800 border border-white/10 flex items-center justify-center text-[8px] font-bold text-zinc-400">
                    PHOTO
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="text-[11px] font-bold text-white">
                      National Driver License
                    </div>
                    <div className="text-[9px] text-zinc-400">Cardholder: Sarah Jenkins</div>
                    <div className="text-[8px] text-emerald-400 font-mono">ID: DL-894-019-223</div>
                  </div>
                  <span className="text-[9px] bg-emerald-500 text-black font-black px-2 py-0.5 rounded">
                    FRONT
                  </span>
                </div>

                {/* Back Side */}
                <div className="rounded-xl border border-teal-500/30 bg-gradient-to-r from-teal-950/40 to-emerald-950/30 p-4 flex items-center gap-3">
                  <div className="h-9 w-14 rounded bg-zinc-800 border border-white/10 flex items-center justify-center text-[7px] font-mono text-zinc-400">
                    |||||||||||||||
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="text-[9px] text-zinc-300">
                      Address: 482 Silicon Parkway, Austin, TX
                    </div>
                    <div className="text-[8px] text-zinc-400">Class: C • Endorsements: None</div>
                  </div>
                  <span className="text-[9px] bg-teal-500 text-black font-black px-2 py-0.5 rounded">
                    BACK
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "ocr" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-black text-2xl text-white">
                  Millisecond Neural Text Extraction
                </h3>
                <p className="text-sm text-zinc-300 mt-2.5 leading-relaxed">
                  Need to copy text from invoices, legal notices, or lecture notes? The offline Google ML Kit model parses characters instantly with 99.4% confidence without transferring a single byte over the web.
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-emerald-500/30 hover:opacity-90 transition-all active:scale-95"
                  >
                    <Copy className="h-3.5 w-3.5" />
                    <span>{copied ? "Copied to Clipboard! ✓" : "Copy Extracted Text"}</span>
                  </button>
                  <span className="text-xs text-zinc-400">
                    Offline ML Model
                  </span>
                </div>
              </div>

              {/* Extracted Text Box */}
              <div className="relative rounded-2xl border border-white/10 bg-[#080d10] p-5 shadow-2xl">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                    <Search className="h-3.5 w-3.5" />
                    Recognized Text Stream
                  </span>
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded font-mono">
                    Confidence: 99.4%
                  </span>
                </div>
                <pre className="mt-4 text-[11px] font-mono text-zinc-300 whitespace-pre-wrap leading-relaxed max-h-52 overflow-y-auto">
                  {sampleOCRText}
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

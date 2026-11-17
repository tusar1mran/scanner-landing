"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Is Doc Scanner truly free with zero watermarks?",
      a: "Yes, absolutely. Unlike commercial apps that stamp 'Scanned by...' on free exports, Doc Scanner produces clean, unbranded, professional-grade PDFs without charging any fees or subscription costs.",
    },
    {
      q: "Are my documents or photos ever uploaded to a remote cloud?",
      a: "Never. Doc Scanner operates entirely on a local-first, zero-cloud architecture. All camera feeds, processed images, OCR routines, and databases reside strictly on your smartphone's internal storage.",
    },
    {
      q: "How does the Dual-Side ID Card mode work?",
      a: "Switch to ID Card mode in the scanner. First, capture the front side of your ID or driver's license, then flip and capture the back. Doc Scanner automatically centers and stitches both sides onto a single A4 page.",
    },
    {
      q: "Can I extract text (OCR) without an active internet connection?",
      a: "Yes. Text recognition is powered by on-device Google ML Kit models that execute directly on your phone's processor. You can extract and copy text even when in full airplane mode.",
    },
    {
      q: "How does password protection work for exported PDFs?",
      a: "During the export step, check the 'Password Protect' option and type your chosen secret. The PDF is encrypted with standard AES encryption, making it unreadable without the correct passcode.",
    },
    {
      q: "Which Android versions are supported?",
      a: "Doc Scanner is optimized for Android 7.0 (Nougat) and higher, supporting both modern New Architecture runtime and legacy Android hardware seamlessly.",
    },
  ];

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#080d10] border-t border-b border-white/10 relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold text-emerald-400">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>COMMON INQUIRIES</span>
          </div>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-400">
            Everything you need to know about Doc Scanner features, privacy, and compatibility.
          </p>
        </div>

        {/* Accordion list */}
        <div className="mt-14 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#0e161c]/90 transition-all shadow-lg"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-6 text-left text-base font-bold text-white hover:text-emerald-400 transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-zinc-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-emerald-400" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-zinc-300 leading-relaxed border-t border-white/10">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

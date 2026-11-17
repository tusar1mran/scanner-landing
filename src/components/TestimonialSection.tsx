"use client";

import React, { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "Doc Scanner has completely replaced CamScanner for our entire team. The real-time edge detection, crisp B&W Clean filter, and 100% on-device privacy meant our compliance department approved it without hesitation. Zero watermarks and zero ads make it irreplaceable.",
      author: "Jon Sherman",
      role: "Head of Operations at LexisGlobal",
      avatar: "JS",
    },
    {
      quote:
        "The Dual-Side ID Card mode is an absolute game changer. We scan both sides of National IDs and passports directly onto a single, watermark-free A4 PDF in seconds. The on-device OCR is blazing fast even without an internet connection.",
      author: "Elena Rostova",
      role: "Director of Legal Practice at UrbanThread",
      avatar: "ER",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () =>
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const next = () =>
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  const t = testimonials[currentIndex];

  return (
    <section className="py-24 sm:py-32 bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Category Pill */}
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5B4DF6] tracking-wide cursor-pointer hover:underline">
          <span>Customer love</span>
          <ChevronRight className="h-3 w-3" />
        </div>

        {/* Heading */}
        <h2 className="mt-4 text-4xl sm:text-5xl font-black text-[#0F172A] tracking-tight">
          Trusted by thousands{" "}
          <span className="font-serif-italic font-normal text-[#1E1B4B] block sm:inline">
            of professionals
          </span>
        </h2>

        {/* Testimonial Card matching reference image */}
        <div className="mt-14 relative rounded-3xl bg-white p-8 sm:p-14 shadow-card-float border border-zinc-200/80 text-left">
          {/* Nav arrows top right */}
          <div className="flex items-center gap-2 justify-end mb-4">
            <button
              onClick={prev}
              className="h-9 w-9 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 flex items-center justify-center text-zinc-600 transition-colors shadow-xs"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              className="h-9 w-9 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 flex items-center justify-center text-zinc-600 transition-colors shadow-xs"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Quote Text */}
          <p className="text-base sm:text-lg text-zinc-700 leading-relaxed max-w-3xl font-medium">
            &ldquo;{t.quote}&rdquo;
          </p>

          {/* Author */}
          <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-[#5B4DF6] text-white flex items-center justify-center font-bold text-xs">
              {t.avatar}
            </div>
            <div>
              <div className="text-sm font-extrabold text-zinc-900">{t.author}</div>
              <div className="text-xs text-zinc-400">{t.role}</div>
            </div>
          </div>
        </div>

        {/* Stats Row beneath testimonial */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-6 text-center pt-8 border-t border-zinc-200/80">
          <div>
            <div className="text-2xl sm:text-3xl font-black text-zinc-900">120+</div>
            <div className="text-[11px] text-zinc-400 font-medium mt-0.5">
              Countries supported
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-zinc-900">250K+</div>
            <div className="text-[11px] text-zinc-400 font-medium mt-0.5">
              Active mobile installs
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-zinc-900">08M+</div>
            <div className="text-[11px] text-zinc-400 font-medium mt-0.5">
              Documents digitized
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-zinc-900">99.99%</div>
            <div className="text-[11px] text-zinc-400 font-medium mt-0.5">
              ML edge precision
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="text-2xl sm:text-3xl font-black text-emerald-600">0 Bytes</div>
            <div className="text-[11px] text-zinc-400 font-medium mt-0.5">
              Cloud uploads
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full pt-6 pb-4 px-4 sm:px-8 max-w-7xl mx-auto relative z-50">
      <div className="flex items-center justify-between">
        {/* Left Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
          <a href="#features" className="hover:text-zinc-950 transition-colors">
            Features
          </a>
          <a href="#edge-detection" className="hover:text-zinc-950 transition-colors">
            Edge Detection
          </a>
          <a href="#id-card" className="hover:text-zinc-950 transition-colors">
            ID Card Mode
          </a>
          <a href="#pricing" className="hover:text-zinc-950 transition-colors">
            Comparison
          </a>
        </nav>

        {/* Center Brand Logo (Doc // scanner) */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="h-9 w-9 rounded-xl bg-[#5B4DF6] text-white flex items-center justify-center font-black text-sm shadow-md shadow-[#5B4DF6]/30 transition-transform group-hover:scale-105">
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" opacity="0.3" />
              <path d="M3 4v4h2V6h2V4H3zm14 0v2h2v2h2V4h-4zM3 16v4h4v-2H5v-2H3zm16 2h-2v2h4v-4h-2v2z" />
            </svg>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold text-xl text-zinc-950 tracking-tight">
              Doc
            </span>
            <span className="text-zinc-400 font-normal text-lg">{"//"}</span>
            <span className="font-semibold text-lg text-zinc-700">scanner</span>
          </div>
        </a>

        {/* Right CTA Button (Pill style with arrow) */}
        <div className="hidden md:flex items-center">
          <a
            href="#download"
            className="inline-flex items-center gap-2 rounded-full bg-[#EEF2FF] hover:bg-[#E0E7FF] text-[#4338CA] px-5 py-2.5 text-xs font-bold transition-all hover:scale-105 active:scale-95 border border-[#C7D2FE]/60"
          >
            <span>Get APK free</span>
            <div className="h-4 w-4 rounded-full bg-[#4338CA] text-white flex items-center justify-center">
              <ArrowRight className="h-2.5 w-2.5" />
            </div>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-zinc-700 hover:bg-zinc-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mt-4 rounded-2xl bg-white p-6 shadow-xl border border-zinc-200 md:hidden flex flex-col gap-4">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-zinc-700 hover:text-[#5B4DF6]"
          >
            Features
          </a>
          <a
            href="#edge-detection"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-zinc-700 hover:text-[#5B4DF6]"
          >
            Edge Detection
          </a>
          <a
            href="#id-card"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-zinc-700 hover:text-[#5B4DF6]"
          >
            ID Card Mode
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-zinc-700 hover:text-[#5B4DF6]"
          >
            Comparison
          </a>
          <a
            href="#download"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#5B4DF6] text-white py-3 text-sm font-bold"
          >
            <span>Download APK Free</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      )}
    </header>
  );
}

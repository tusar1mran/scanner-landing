"use client";

import React from "react";
import { Download } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-20 pb-12 bg-white border-t border-zinc-200/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          {/* Brand info & download button */}
          <div className="md:col-span-5 space-y-6 text-left">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-xl bg-[#5B4DF6] text-white flex items-center justify-center font-black text-xs shadow-md">
                <svg
                  className="w-4 h-4 fill-current"
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
            </div>

            <p className="text-xs text-zinc-500 max-w-sm leading-relaxed">
              A privacy-first, 100% on-device mobile document scanner. Built for students, accountants, legal practitioners, and businesses who demand zero watermarks and zero cloud tracking.
            </p>

            <div>
              <a
                href="#download"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-800 px-4 py-2 text-xs font-bold transition-colors"
              >
                <Download className="h-3.5 w-3.5 text-zinc-600" />
                <span>Download APK free</span>
              </a>
            </div>
          </div>

          {/* Links Columns matching reference image */}
          <div className="md:col-span-7 grid grid-cols-3 gap-6 text-left text-xs">
            {/* Capabilities */}
            <div>
              <h4 className="font-bold text-zinc-900 mb-3">Capabilities</h4>
              <ul className="space-y-2 text-zinc-500">
                <li>
                  <a href="#edge-detection" className="hover:text-zinc-900">
                    Edge Detection
                  </a>
                </li>
                <li>
                  <a href="#id-card" className="hover:text-zinc-900">
                    ID Card Mode
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-zinc-900">
                    On-Device OCR
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-zinc-900">
                    AES-256 PDF Lock
                  </a>
                </li>
              </ul>
            </div>

            {/* Architecture */}
            <div>
              <h4 className="font-bold text-zinc-900 mb-3">Architecture</h4>
              <ul className="space-y-2 text-zinc-500">
                <li>
                  <a href="#pricing" className="hover:text-zinc-900">
                    100% Air-Gapped
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-zinc-900">
                    Local SQLite DB
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-zinc-900">
                    Zero Cloud Upload
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-zinc-900">
                    Biometric Lock
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold text-zinc-900 mb-3">Resources</h4>
              <ul className="space-y-2 text-zinc-500">
                <li>
                  <a href="#download" className="hover:text-zinc-900">
                    Download APK
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-zinc-900">
                    CamScanner Compare
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-zinc-900">
                    Open Source
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-zinc-900">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Giant Watermark Typography matching the bottom of reference image */}
        <div className="py-6 overflow-hidden select-none opacity-[0.06] pointer-events-none text-center">
          <div className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-widest uppercase text-zinc-900 whitespace-nowrap">
            Doc // scanner • Doc // scanner • Doc // scanner
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-zinc-100 text-center text-xs text-zinc-400">
          © 2026 All Rights Reserved, Doc // Scanner Mobile
        </div>
      </div>
    </footer>
  );
}

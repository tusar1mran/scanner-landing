"use client";

import React from "react";

export default function LogoCloud() {
  const logos = [
    { name: "Google ML Kit", icon: "❖" },
    { name: "Android 15 Ready", icon: "🤖" },
    { name: "SQLite Local Storage", icon: "⛁" },
    { name: "AES-256 Encryption", icon: "🔒" },
    { name: "React Native Turbo", icon: "⚛" },
    { name: "100% Air-Gapped", icon: "🛡" },
    { name: "Zero Trackers", icon: "✦" },
  ];

  return (
    <div className="py-12 border-t border-b border-zinc-200/70 bg-white/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-around gap-8 opacity-70 grayscale hover:grayscale-0 transition-all">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-zinc-600 font-bold text-xs sm:text-sm tracking-tight hover:text-zinc-950 transition-colors"
            >
              <span className="text-lg text-[#5B4DF6]">{logo.icon}</span>
              <span>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

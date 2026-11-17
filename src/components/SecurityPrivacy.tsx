"use client";

import React from "react";
import { ShieldCheck, HardDrive, ServerOff, EyeOff, Fingerprint } from "lucide-react";

export default function SecurityPrivacy() {
  const pillars = [
    {
      icon: ServerOff,
      title: "Zero Remote Servers",
      desc: "We do not host backend databases or sync servers. Every image, PDF, and metadata entry remains strictly on your device's physical storage.",
    },
    {
      icon: HardDrive,
      title: "Local Encrypted SQLite",
      desc: "Document indexes, tags, and custom folders run on a high-speed local SQLite database. Operates at 100% speed even in complete airplane mode.",
    },
    {
      icon: Fingerprint,
      title: "Biometric App Authentication",
      desc: "Lock the entire application behind your fingerprint or a secure PIN code so sensitive medical records or contracts remain strictly confidential.",
    },
    {
      icon: EyeOff,
      title: "No Ad Trackers or Telemetry",
      desc: "Unlike commercial scanner apps that harvest contact lists and location telemetry to serve behavioral ads, Doc Scanner is 100% tracker-free.",
    },
  ];

  return (
    <section id="security" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[36px] border border-emerald-500/20 bg-gradient-to-b from-[#0e171c] via-[#091114] to-[#0a1014] p-8 sm:p-16 shadow-2xl relative overflow-hidden">
          {/* Ambient light glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold text-emerald-400">
              <ShieldCheck className="h-4 w-4" />
              <span>SECURITY & PRIVACY COMMITMENT</span>
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
              Your Confidential Documents Never Leave Your Hands
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
              Why risk uploading passports, salary slips, and confidential tax receipts to unknown cloud servers? Doc Scanner was built on an absolute local-first security model.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-emerald-500/30"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

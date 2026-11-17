"use client";

import React from "react";
import { Check, X, ShieldCheck, Zap } from "lucide-react";

export default function Comparison() {
  const comparisonItems = [
    {
      feature: "Data Privacy & Storage",
      docScanner: "100% On-Device (Data never leaves your local hardware)",
      competitors: "Uploaded to third-party cloud servers with data tracking",
      highlight: true,
    },
    {
      feature: "Watermark on Free Exports",
      docScanner: "Zero Watermarks (Clean, studio-grade PDFs always)",
      competitors: "Ugly 'Scanned with...' watermarks unless you pay",
      highlight: true,
    },
    {
      feature: "Advertisements & Popups",
      docScanner: "0 Ads — Pristine, distraction-free interface",
      competitors: "Aggressive full-screen video ads and banner trackers",
      highlight: true,
    },
    {
      feature: "Mandatory Account / Login",
      docScanner: "None — Open app and start scanning immediately",
      competitors: "Forced phone number, email, or Google sign-in",
      highlight: false,
    },
    {
      feature: "Dual-Side ID Card Merger",
      docScanner: "Free & Unlimited",
      competitors: "Locked behind premium paid tiers",
      highlight: false,
    },
    {
      feature: "AES-256 PDF Password Protection",
      docScanner: "Included for Free",
      competitors: "Paywalled feature",
      highlight: false,
    },
    {
      feature: "Subscription & Licensing",
      docScanner: "100% Free & Open Source",
      competitors: "$49.99 to $99.99 per year recurring subscription",
      highlight: true,
    },
  ];

  return (
    <section id="comparison" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold text-emerald-400">
            <Zap className="h-3.5 w-3.5" />
            <span>UNCOMPROMISING TRANSPARENCY</span>
          </div>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
            Why Professionals Are Leaving CamScanner & Adobe Scan
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            See how Doc Scanner eliminates aggressive paywalls and protects your confidentiality.
          </p>
        </div>

        {/* Comparison Table Box */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-[#0e161c]/90 shadow-2xl backdrop-blur-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-[#0a1014]">
                  <th className="py-6 px-7 text-xs font-bold text-zinc-400 uppercase tracking-wider w-1/3">
                    Feature & Security Spec
                  </th>
                  <th className="py-6 px-7 text-sm font-black text-emerald-400 bg-emerald-500/10 w-1/3 border-x border-emerald-500/20">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-5 w-5 text-emerald-400" />
                      <span>Doc Scanner (Our App)</span>
                    </div>
                  </th>
                  <th className="py-6 px-7 text-xs font-bold text-zinc-400 uppercase tracking-wider w-1/3">
                    Legacy Commercial Scanners
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-sm">
                {comparisonItems.map((item, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-5 px-7 font-bold text-zinc-200">
                      {item.feature}
                    </td>

                    {/* Doc Scanner Column */}
                    <td className="py-5 px-7 font-medium text-white bg-emerald-500/[0.06] border-x border-emerald-500/20">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 rounded-full bg-emerald-500 text-black p-0.5 flex-shrink-0">
                          <Check className="h-3.5 w-3.5 stroke-[3]" />
                        </div>
                        <span className={item.highlight ? "font-bold text-emerald-300" : "text-zinc-200"}>
                          {item.docScanner}
                        </span>
                      </div>
                    </td>

                    {/* Competitors Column */}
                    <td className="py-5 px-7 text-zinc-400">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 rounded-full bg-rose-500/20 text-rose-400 p-0.5 flex-shrink-0 border border-rose-500/30">
                          <X className="h-3.5 w-3.5 stroke-[3]" />
                        </div>
                        <span>{item.competitors}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useRef } from "react";
import {
  CreditCard,
  Droplet,
  FileText,
  FolderPlus,
  GitMerge,
  Images,
  Layers,
  Lock,
  PenLine,
  QrCode,
  ScanLine,
  Type,
} from "lucide-react";
import { gsap, useIsoLayoutEffect, FULL_MOTION } from "@/lib/gsap";

const items = [
  { icon: ScanLine, label: "Smart Scan" },
  { icon: Layers, label: "Batch Scan" },
  { icon: CreditCard, label: "ID Card" },
  { icon: QrCode, label: "QR Code" },
  { icon: Images, label: "Import Images" },
  { icon: Type, label: "Extract Text" },
  { icon: FileText, label: "To PDF" },
  { icon: GitMerge, label: "Merge" },
  { icon: PenLine, label: "Sign" },
  { icon: Droplet, label: "Watermark" },
  { icon: FolderPlus, label: "Folders" },
  { icon: Lock, label: "App Lock" },
];

export default function ToolMarquee() {
  const track = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    const el = track.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add(FULL_MOTION, () => {
      const loop = gsap.to(el, { xPercent: -50, duration: 38, ease: "none", repeat: -1 });
      // Speed up briefly with scroll velocity, then ease back
      let resetId: ReturnType<typeof setTimeout>;
      const onWheel = () => {
        gsap.to(loop, { timeScale: 3, duration: 0.3 });
        clearTimeout(resetId);
        resetId = setTimeout(() => gsap.to(loop, { timeScale: 1, duration: 0.8 }), 160);
      };
      window.addEventListener("wheel", onWheel, { passive: true });
      return () => {
        window.removeEventListener("wheel", onWheel);
        clearTimeout(resetId);
      };
    });
    return () => mm.revert();
  }, []);

  const row = [...items, ...items];

  return (
    <div className="relative border-y border-black/5 bg-white py-6" aria-label="Tools included in Doc Scanner">
      <div className="mask-fade-x overflow-hidden">
        <div ref={track} className="flex w-max">
          {row.map(({ icon: Icon, label }, i) => (
            <span
              key={i}
              aria-hidden={i >= items.length}
              className="mr-3 flex items-center gap-2.5 whitespace-nowrap rounded-full border border-black/5 bg-[#F6F8F7] px-5 py-2.5 text-sm font-semibold text-zinc-700"
            >
              <Icon className="h-4 w-4 text-brand" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

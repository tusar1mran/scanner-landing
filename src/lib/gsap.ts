"use client";

import type React from "react";
import { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

/** Runs before paint on the client so GSAP "from" states never flash. */
export const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
export const FULL_MOTION = "(prefers-reduced-motion: no-preference)";

/**
 * Fades and lifts every [data-reveal] element inside `ref` as it scrolls into view.
 * Elements stay fully visible when the user prefers reduced motion.
 */
export function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add(FULL_MOTION, () => {
      const items = gsap.utils.toArray<HTMLElement>("[data-reveal]", el);
      gsap.set(items, { autoAlpha: 0, y: 40 });
      ScrollTrigger.batch(items, {
        start: "top 88%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, { autoAlpha: 1, y: 0, duration: 1, ease: "expo.out", stagger: 0.08 }),
      });
    });
    return () => mm.revert();
  }, [ref]);
}

export { gsap, ScrollTrigger, SplitText };

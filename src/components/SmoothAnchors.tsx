"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

/** Height of the fixed navbar plus breathing room. */
const NAV_OFFSET = 88;

/**
 * Intercepts clicks on in-page links (href="#...") anywhere on the page and
 * scrolls there with an eased GSAP tween instead of the browser's default jump.
 */
export default function SmoothAnchors() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link) return;

      const hash = link.getAttribute("href") ?? "";
      const target = hash === "#" || hash === "#top" ? null : document.querySelector<HTMLElement>(hash);
      if (hash !== "#" && hash !== "#top" && !target) return;

      e.preventDefault();

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const destination = target
        ? Math.max(0, target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET)
        : 0;
      const distance = Math.abs(destination - window.scrollY);
      // Longer trips take a little longer, but never feel sluggish.
      const duration = reduce ? 0 : gsap.utils.clamp(0.7, 1.6, distance / 2500);

      gsap.to(window, {
        scrollTo: { y: target ?? 0, offsetY: target ? NAV_OFFSET : 0, autoKill: true },
        duration,
        ease: "power3.inOut",
        overwrite: true,
        onComplete: () => {
          ScrollTrigger.update();
          // Move keyboard focus to the section for screen-reader and keyboard users.
          if (target) {
            if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
            target.focus({ preventScroll: true });
          }
        },
      });

      history.pushState(null, "", hash === "#" ? window.location.pathname : hash);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}

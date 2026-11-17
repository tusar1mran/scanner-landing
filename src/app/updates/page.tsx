import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import BrandMark from "@/components/BrandMark";
import { releases, type ChangeKind } from "@/lib/changelog";
import { APK_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Updates · Doc Scanner",
  description: "New features, improvements and bug fixes in Doc Scanner for Android.",
};

const badge: Record<ChangeKind, { label: string; cls: string }> = {
  new: { label: "New", cls: "bg-brand-soft text-brand-dark" },
  improved: { label: "Improved", cls: "bg-[#E6EFFE] text-[#2563EB]" },
  fixed: { label: "Fixed", cls: "bg-[#FEF3E2] text-[#B45309]" },
};

export default function UpdatesPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-black/5 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" aria-label="Doc Scanner home">
            <BrandMark />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium text-zinc-600 hover:bg-black/[0.04] hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">Updates</p>
        <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl">
          What&apos;s changed in <span className="font-serif-italic text-brand">Doc Scanner.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600">
          New features, improvements and bug fixes, newest first.
        </p>

        {releases.map((r) => (
          <article key={r.title} className="mt-16 border-t border-black/10 pt-10">
            <time className="text-sm font-semibold text-zinc-500">{r.date}</time>
            <h2 className="mt-2 text-2xl font-bold text-ink sm:text-3xl">{r.title}</h2>

            <div className="mt-8 grid gap-6">
              {r.groups.map((g) => (
                <section key={g.title} className="rounded-3xl border border-black/5 bg-white p-6 shadow-card sm:p-8">
                  <h3 className="text-lg font-bold text-ink">{g.title}</h3>
                  <ul className="mt-4 space-y-3">
                    {g.items.map((it) => (
                      <li key={it.text} className="flex gap-3 text-zinc-700">
                        <span
                          className={`mt-0.5 h-fit shrink-0 rounded-full px-2.5 py-0.5 text-xs font-bold ${badge[it.kind].cls}`}
                        >
                          {badge[it.kind].label}
                        </span>
                        <span className="leading-relaxed">{it.text}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}

              {r.planned && (
                <section className="rounded-3xl border border-dashed border-black/15 p-6 sm:p-8">
                  <h3 className="text-lg font-bold text-ink">Not in this update yet</h3>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-600">
                    {r.planned.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
          </article>
        ))}

        <div className="mt-16 flex flex-col items-start gap-4 rounded-3xl bg-ink p-8 text-white sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg font-semibold">Get the latest Doc Scanner for Android.</p>
          <a
            href={APK_URL}
            download
            className="group inline-flex items-center gap-3 rounded-full bg-brand px-6 py-3 font-bold text-white hover:bg-brand-dark"
          >
            Download APK <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </main>
    </div>
  );
}

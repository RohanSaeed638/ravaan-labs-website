"use client";

import { useContactModal } from "./ContactModal";

export default function CTASection() {
  const { open } = useContactModal();

  return (
    <section className="px-6 pb-20 pt-4">
      <div className="container-content !px-0">
        <div className="relative overflow-hidden rounded-2xl bg-surface px-8 py-12 sm:px-12">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-violet/10 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-bold text-ink sm:text-[28px]">
                Ready to build something amazing?
              </h2>
              <p className="mt-2 text-muted">
                Let&apos;s experiment, build and evolve ideas together.
              </p>
            </div>
            <button
              onClick={() => open("Let's talk about your project")}
              className="flex shrink-0 items-center gap-2 rounded-lg bg-brand-gradient-diag px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Let&apos;s Talk <span aria-hidden>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

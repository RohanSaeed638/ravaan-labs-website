"use client";

import { useContactModal } from "./ContactModal";

export default function Hero() {
  const { open } = useContactModal();

  return (
    <section className="relative overflow-hidden bg-cover bg-center h-[600px]" style={{ backgroundImage: `url('./ravaan-hero.png')` }}>
      <div className="container-content relative grid gap-12 pb-24 pt-16 lg:grid-cols-2 lg:items-center lg:pt-20">
        <div>
          <p className="mb-4 text-[13px] font-semibold tracking-wide text-brand-blue">
            Software &amp; AI Product Lab
          </p>
          <h1 className="text-[44px] font-bold leading-[1.08] text-white sm:text-[56px]">
            Ideas in
            <br />
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Motion.
            </span>
          </h1>
          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-white/60">
            We experiment, build and evolve AI-powered products and digital
            systems that move ideas forward.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <button
              onClick={() => open("Start a project")}
              className="flex items-center gap-2 rounded-lg bg-brand-gradient-diag px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Start a Project <span aria-hidden>→</span>
            </button>
            <a
              href="#products"
              className="rounded-lg border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5"
            >
              Explore Our Work
            </a>
          </div>
        </div>

        {/* <div className="relative flex justify-center lg:justify-end" aria-hidden>
          <svg
            viewBox="0 0 480 480"
            className="w-full max-w-[440px] drop-shadow-[0_0_60px_rgba(124,58,237,0.35)]"
          >
            <defs>
              <linearGradient id="heroR" x1="80" y1="60" x2="400" y2="420" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#22D3EE" />
                <stop offset="0.5" stopColor="#3B7CFF" />
                <stop offset="1" stopColor="#7C3AED" />
              </linearGradient>
              <linearGradient id="heroRibbon" x1="0" y1="300" x2="480" y2="380" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#22D3EE" stopOpacity="0" />
                <stop offset="0.5" stopColor="#3B7CFF" stopOpacity="0.8" />
                <stop offset="1" stopColor="#7C3AED" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M160 400V80h115c58 0 100 34 100 84 0 36-20 63-53 76l68 160h-73l-58-140h-34v140h-65Zm65-196h48c26 0 42-14 42-36 0-22-16-35-42-35h-48v71Z"
              fill="url(#heroR)"
            />
            <path
              d="M20 340c110 30 180-40 260-20s120 60 200 20"
              stroke="url(#heroRibbon)"
              strokeWidth="6"
              fill="none"
            />
            <ellipse cx="240" cy="410" rx="170" ry="14" fill="url(#heroRibbon)" opacity="0.5" />
          </svg>
        </div> */}
      </div>
    </section>
  );
}

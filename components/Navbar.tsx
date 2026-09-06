"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useContactModal } from "./ContactModal";

const links = [
  { label: "Home", href: "#" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Experiments", href: "#experiments" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { open } = useContactModal();

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-navy-900/95 backdrop-blur">
      <div className="container-content flex h-[72px] items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <Image src="/logo-mark.svg" alt="" width={32} height={32} aria-hidden />
          <span className="leading-none">
            <span className="block text-[15px] font-bold tracking-wide text-white">
              RAVAAN
            </span>
            <span className="block text-[10px] tracking-[0.25em] text-white/50">
              LABS
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className={`relative text-sm text-white/80 transition hover:text-white ${
                i === 0 ? "text-white" : ""
              }`}
            >
              {link.label}
              {i === 0 && (
                <span className="absolute -bottom-[26px] left-0 h-[2px] w-full bg-brand-gradient-diag" />
              )}
            </a>
          ))}
        </nav>

        <button
          onClick={() => open("Let's talk about your project")}
          className="hidden items-center gap-1.5 rounded-lg bg-brand-gradient-diag px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 lg:flex"
        >
          Let&apos;s Talk <span aria-hidden>→</span>
        </button>

        <button
          className="text-white lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-navy-900 px-6 pb-6 lg:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/80"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false);
                open("Let's talk about your project");
              }}
              className="mt-2 rounded-lg bg-brand-gradient-diag px-4 py-2.5 text-center text-sm font-medium text-white"
            >
              Let&apos;s Talk →
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

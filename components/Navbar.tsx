"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useContactModal } from "./ContactModal";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { open } = useContactModal();
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-navy-900/95 backdrop-blur">
      <div className="container-content flex h-[72px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo-mark-main.png"
            alt="Ravaan Labs"
            width={140}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative text-sm transition hover:text-white ${
                  active ? "text-white" : "text-white/80"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-[26px] left-0 h-[2px] w-full bg-brand-gradient-diag" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <Link
            href="/contact"
            className={`text-sm transition hover:text-white ${
              isActive("/contact") ? "text-white" : "text-white/80"
            }`}
          >
            Contact
          </Link>
          <button
            onClick={() => open("Let's talk about your project")}
            className="flex items-center gap-1.5 rounded-lg bg-brand-gradient-diag px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
          >
            Let&apos;s Talk <span aria-hidden>→</span>
          </button>
        </div>

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
            {[...links, { label: "Contact", href: "/contact" }].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm ${
                  isActive(link.href) ? "text-white" : "text-white/80"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false);
                open("Let's talk about your project");
              }}
              className="mt-2 rounded-lg bg-brand-gradient-diag px-6 py-3 text-center text-sm font-medium text-white"
            >
              Let&apos;s Talk →
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

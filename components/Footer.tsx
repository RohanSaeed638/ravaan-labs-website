import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/about#team" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Product Development", href: "/services" },
      { label: "AI Engineering", href: "/services" },
      { label: "Full-Stack Engineering", href: "/services" },
      { label: "Cloud & DevOps", href: "/services" },
      { label: "Backend & APIs", href: "/services" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Uraan", href: "/products" },
      { label: "Roadmap", href: "/products#roadmap" },
      { label: "Pricing", href: "/products#pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Case Studies", href: "/work" },
      { label: "Insights", href: "/blog" },
      { label: "FAQs", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

const socials = [
  {
    icon: Github,
    href: "https://github.com/Ravaan-Labs",
    label: "Ravaan Labs on GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/ravaan-labs/",
    label: "Ravaan Labs on LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:contact@ravaanlabs.com",
    label: "Email Ravaan Labs",
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 pt-16">
      <div className="container-content grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo-mark-main.png"
              alt="Ravaan Labs"
              width={140}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
            We are a software &amp; AI product lab that turns ideas into
            intelligent products and powerful digital experiences.
          </p>
          <div className="mt-5 flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/60 transition hover:bg-white/10 hover:text-white"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-semibold text-white">{col.title}</h4>
            <ul className="mt-4 flex flex-col gap-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container-content flex flex-col items-center justify-center gap-2 py-5 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Ravaan Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

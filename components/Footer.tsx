import Image from "next/image";
import { Github, Linkedin, Twitter, Youtube, Mail } from "lucide-react";

const columns = [
  {
    title: "Company",
    links: ["About Us", "Careers", "Blog", "Contact"],
  },
  {
    title: "Services",
    links: [
      "Product Development",
      "AI Engineering",
      "Full-Stack Engineering",
      "Cloud & DevOps",
      "Backend & APIs",
    ],
  },
  {
    title: "Products",
    links: ["Uraan", "Roadmap", "Pricing"],
  },
  {
    title: "Resources",
    links: ["Case Studies", "Insights", "FAQs", "Privacy Policy", "Terms of Service"],
  },
];

const socials = [Github, Linkedin, Twitter, Youtube, Mail];

export default function Footer() {
  return (
    <footer className="bg-navy-900 pt-16">
      <div className="container-content grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <Image src="/logo-mark.svg" alt="" width={30} height={30} aria-hidden />
            <span className="leading-none">
              <span className="block text-[14px] font-bold tracking-wide text-white">
                RAVAAN
              </span>
              <span className="block text-[9px] tracking-[0.25em] text-white/50">
                LABS
              </span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
            We are a software &amp; AI product lab that turns ideas into
            intelligent products and powerful digital experiences.
          </p>
          <div className="mt-5 flex gap-3">
            {socials.map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
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
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-white/50 transition hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container-content flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Ravaan Labs. All rights reserved.</p>
          <p>
            Made with <span aria-hidden>❤️</span> in Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}

import { Map, Tag, Sparkles } from "lucide-react";

const products = [
  {
    icon: Map,
    title: "Roadmap",
    description: "Plan, track, and stay aligned with confidence.",
    href: "/products#roadmap",
  },
  {
    icon: Tag,
    title: "Pricing",
    description: "Transparent, straightforward pricing plans.",
    href: "/products#pricing",
  },
  {
    icon: Sparkles,
    title: "Coming Soon",
    description: "Exciting new products in the pipeline.",
    href: "#",
  },
];

export default function MoreProducts() {
  return (
    <section id="roadmap" className="bg-surface py-24">
      <div className="container-content">
        <p className="text-[13px] font-semibold text-brand-blue">More Products</p>
        <h2 className="mt-3 max-w-md text-3xl font-bold leading-tight text-ink sm:text-[34px]">
          Additional tools and solutions we&apos;re building.
        </h2>

        <div id="pricing" className="mt-12 grid gap-5 sm:grid-cols-3">
          {products.map(({ icon: Icon, title, description, href }) => (
            <a
              key={title}
              href={href}
              className="rounded-xl border border-gray-200/70 bg-white p-6 transition hover:border-brand-blue/40 hover:shadow-[0_8px_30px_rgba(59,124,255,0.08)]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue/10">
                <Icon className="text-brand-blue" size={20} strokeWidth={1.75} />
              </div>
              <h3 className="font-semibold text-ink">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

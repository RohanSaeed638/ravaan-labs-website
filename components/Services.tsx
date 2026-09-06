import { Box, Network, Code2, Cloud, Database, Rocket } from "lucide-react";

const services = [
  {
    icon: Box,
    title: "Product Development",
    description: "MVPs to scalable products built with modern technologies.",
  },
  {
    icon: Network,
    title: "AI & LLM Engineering",
    description: "Intelligent systems, RAG, agents and AI integrations.",
  },
  {
    icon: Code2,
    title: "Full-Stack Engineering",
    description: "Web & mobile apps with robust, secure and clean code.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Scalable infrastructure, CI/CD, automation and monitoring.",
  },
  {
    icon: Database,
    title: "Backend & APIs",
    description: "High-performance APIs, microservices and system architecture.",
  },
  {
    icon: Rocket,
    title: "Product Strategy",
    description: "From idea validation to roadmap and go-to-market strategy.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-surface py-24">
      <div className="container-content">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-[13px] font-semibold text-brand-blue">What we do</p>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-[38px]">
            End-to-end. From idea to impact.
          </h2>
          <p className="mt-4 text-muted">
            We combine strategy, design, engineering and AI to build products
            that scale.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-gray-200/70 bg-white p-7 transition hover:border-brand-blue/40 hover:shadow-[0_8px_30px_rgba(59,124,255,0.08)]"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-brand-blue/10">
                <Icon className="text-brand-blue" size={22} strokeWidth={1.75} />
              </div>
              <h3 className="text-[17px] font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

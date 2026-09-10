import { Box, Network, Code2, Cloud, Database, MessagesSquare } from "lucide-react";

export const services = [
  {
    icon: Box,
    title: "Product Development",
    description: "MVPs to scalable products built with modern technologies.",
  },
  {
    icon: Network,
    title: "AI Engineering",
    description: "Custom AI models, LLM integration & intelligent systems.",
  },
  {
    icon: Code2,
    title: "Full-Stack Engineering",
    description: "Modern, responsive web & mobile applications.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Scalable infrastructure, CI/CD, monitoring and automation.",
  },
  {
    icon: Database,
    title: "Backend & APIs",
    description: "Secure, scalable and high-performance backend systems.",
  },
  {
    icon: MessagesSquare,
    title: "Technical Consulting",
    description: "Strategy and product advisory to de-risk your roadmap.",
  },
];

export default function Services({
  id = "services",
  eyebrow = "What we do",
  title = "End-to-end. From idea to impact.",
  subtitle = "We combine strategy, design, engineering and AI to build products that scale.",
  bg = "bg-surface",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  bg?: string;
}) {
  return (
    <section id={id} className={`${bg} py-24`}>
      <div className="container-content">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-[13px] font-semibold text-brand-blue">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-[38px]">
            {title}
          </h2>
          <p className="mt-4 text-muted">{subtitle}</p>
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

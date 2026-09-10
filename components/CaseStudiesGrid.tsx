import { Brain, Layers, CloudCog, ArrowRight } from "lucide-react";

const caseStudies = [
  {
    icon: Brain,
    tag: "AI Engineering",
    title: "Intelligent Document Processing",
    description:
      "Built an AI-powered document processing system that reduced manual review time by 80%.",
    gradient: "from-[#1B2A6B] via-[#2451C4] to-[#22C4F5]",
  },
  {
    icon: Layers,
    tag: "Full-Stack",
    title: "Scalable SaaS Platform",
    description:
      "Developed a modern SaaS platform with real-time features and seamless scalability.",
    gradient: "from-[#2A1B6B] via-[#4A1FA0] to-[#7B3FE4]",
  },
  {
    icon: CloudCog,
    tag: "Cloud & DevOps",
    title: "Infrastructure Migration",
    description:
      "Migrated legacy infrastructure to the cloud, improving reliability and reducing costs.",
    gradient: "from-[#0F3B6B] via-[#1E63A8] to-[#3E7BFA]",
  },
];

export default function CaseStudiesGrid() {
  return (
    <section className="bg-white py-24">
      <div className="container-content">
        <p className="text-[13px] font-semibold text-brand-blue">
          Featured Case Studies
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {caseStudies.map(({ icon: Icon, tag, title, description, gradient }) => (
            <a
              key={title}
              href="#"
              className="group overflow-hidden rounded-xl border border-gray-200/70 bg-white transition hover:border-brand-blue/40 hover:shadow-[0_8px_30px_rgba(59,124,255,0.08)]"
            >
              <div
                className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${gradient}`}
              >
                <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle,white_1px,transparent_1px)] [background-size:20px_20px]" />
                <Icon className="relative text-white" size={44} strokeWidth={1.5} />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold text-brand-blue">{tag}</p>
                <h3 className="mt-2 text-[17px] font-semibold text-ink">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue">
                  View case study
                  <ArrowRight
                    size={14}
                    className="transition group-hover:translate-x-0.5"
                  />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

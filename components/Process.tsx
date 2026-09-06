import { FlaskConical, Code2, TrendingUp, Target } from "lucide-react";

const steps = [
  {
    icon: FlaskConical,
    number: "01",
    title: "Experiment",
    description: "We explore, validate and design the right solution.",
  },
  {
    icon: Code2,
    number: "02",
    title: "Build",
    description: "We build with precision, quality and scalability.",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Evolve",
    description: "We iterate, improve and grow with your product.",
  },
  {
    icon: Target,
    number: "04",
    title: "Impact",
    description: "We deliver results that create real impact.",
  },
];

export default function Process() {
  return (
    <section className="bg-surface py-24">
      <div className="container-content">
        <p className="text-[13px] font-semibold text-brand-blue">Our approach</p>
        <h2 className="mt-3 max-w-md text-3xl font-bold leading-tight text-ink sm:text-[34px]">
          A proven process to build products that last.
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, number, title, description }, i) => (
            <div key={title} className="relative">
              <div className="h-full rounded-xl border border-gray-200/70 bg-white p-6">
                <div className="mb-4 flex items-center justify-between">
                  <Icon className="text-brand-blue" size={22} strokeWidth={1.75} />
                  <span className="text-xs font-medium text-gray-300">{number}</span>
                </div>
                <h3 className="font-semibold text-ink">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {description}
                </p>
              </div>
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute right-[-14px] top-1/2 hidden -translate-y-1/2 text-gray-300 lg:block"
                >
                  &middot;&middot;&middot;
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Compass, Eye, Heart } from "lucide-react";

const values = [
  {
    icon: Compass,
    title: "Our Mission",
    description: "Build technology that empowers people and businesses.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To be a global leader in AI-powered engineering.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "Curiosity, ownership, collaboration and impact.",
  },
];

export default function OurStory() {
  return (
    <section className="bg-white py-24">
      <div className="container-content">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-2xl bg-navy-900">
            <Image
              src="/ravaan-team.png"
              alt="Ravaan Labs"
              width={700}
              height={500}
              className="h-full w-full object-cover opacity-80"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/10 to-transparent" /> */}
          </div>

          <div>
            <p className="text-[13px] font-semibold text-brand-blue">Our Story</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-ink sm:text-[34px]">
              From a simple idea to a mission-driven team.
            </h2>
            <p className="mt-4 text-muted">
              Ravaan Labs was founded with a clear vision — to help businesses
              turn ideas into intelligent products using modern technology,
              AI, and engineering excellence.
            </p>
            <p className="mt-4 text-muted">
              Today, we work with startups and enterprises alike, engineering
              scalable, reliable, and future-ready solutions.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {values.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-gray-200/70 bg-surface p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue/10">
                <Icon className="text-brand-blue" size={20} strokeWidth={1.75} />
              </div>
              <h3 className="font-semibold text-ink">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

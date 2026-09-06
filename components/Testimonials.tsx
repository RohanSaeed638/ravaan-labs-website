"use client";

import { useState } from "react";

const testimonials = [
  {
    quote:
      "Ravaan Labs transformed our idea into a scalable product. Their execution, communication and ownership are exceptional.",
    name: "Adeel Malik",
    role: "CEO, Workdd",
  },
  {
    quote:
      "They are highly skilled, proactive and genuinely care about the success of the product.",
    name: "Sarah Ahmed",
    role: "Founder, Droplink",
  },
  {
    quote:
      "Our go-to engineering partner for complex projects. Highly recommended!",
    name: "Usman Tariq",
    role: "CTO, Zayn",
  },
];

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient text-xs font-semibold text-white">
      {initials}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-24">
      <div className="container-content">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,280px)_1fr] lg:items-start">
          <div>
            <p className="text-[13px] font-semibold text-brand-blue">
              What our clients say
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-ink">
              Trusted by founders and teams worldwide.
            </h2>
          </div>

          <div>
            <div className="grid gap-5 sm:grid-cols-3">
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  className={`rounded-xl border p-6 transition ${
                    i === active
                      ? "border-brand-blue/40 shadow-[0_8px_30px_rgba(59,124,255,0.1)]"
                      : "border-gray-200/70"
                  }`}
                >
                  <p aria-hidden className="mb-3 text-2xl leading-none text-brand-blue/30">
                    &ldquo;
                  </p>
                  <p className="text-[14px] leading-relaxed text-ink/80">
                    {t.quote}
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <Avatar name={t.name} />
                    <div>
                      <p className="text-sm font-semibold text-ink">{t.name}</p>
                      <p className="text-xs text-muted">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-center gap-2 sm:justify-start">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active ? "w-6 bg-brand-blue" : "w-1.5 bg-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

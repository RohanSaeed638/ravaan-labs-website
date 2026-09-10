import { Feather, Check } from "lucide-react";

const features = [
  "Intuitive dashboard",
  "Powerful integrations",
  "Built for scale",
];

function MetricPanel() {
  const bars = [40, 65, 50, 80, 60, 95, 72];
  return (
    <div className="rounded-2xl border-[6px] border-navy-800 bg-navy-900 p-6 shadow-2xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-white/50">Active Users</p>
          <div className="mt-1 flex items-end gap-2">
            <span className="text-3xl font-bold text-white">24,892</span>
            <span className="mb-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-xs font-medium text-emerald-400">
              +12%
            </span>
          </div>
        </div>
        <div className="h-9 w-9 rounded-full bg-brand-gradient" />
      </div>

      <div className="mt-6 flex h-28 items-end gap-2">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-md bg-brand-gradient-diag"
            style={{ height: `${h}%`, opacity: 0.5 + (i / bars.length) * 0.5 }}
          />
        ))}
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3 text-center">
        {[
          ["24", "Learning Units"],
          ["12", "Completed"],
          ["8", "In Progress"],
        ].map(([num, label]) => (
          <div key={label} className="rounded-lg bg-white/5 py-3">
            <p className="text-base font-semibold text-white">{num}</p>
            <p className="text-[10px] text-white/40">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FeaturedProduct() {
  return (
    <section className="bg-white py-24">
      <div className="container-content grid items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="text-[13px] font-semibold text-brand-blue">
            Featured Product
          </p>
          <div className="mt-3 flex items-center gap-2">
            <Feather className="text-brand-blue" size={26} />
            <span className="text-2xl font-bold text-ink">Uraan</span>
          </div>
          <p className="mt-3 max-w-md text-muted">
            The all-in-one platform to streamline your operations and scale
            faster.
          </p>
          <ul className="mt-5 flex flex-col gap-2.5">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2.5 text-sm text-ink/80">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-blue/10">
                  <Check className="text-brand-blue" size={12} strokeWidth={3} />
                </span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-brand-gradient-diag px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Explore Uraan <span aria-hidden>→</span>
          </a>
        </div>

        <MetricPanel />
      </div>
    </section>
  );
}

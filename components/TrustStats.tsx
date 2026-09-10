import { stats } from "./StatsBar";

export default function TrustStats() {
  return (
    <section className="border-b border-gray-100 bg-white py-10">
      <div className="container-content">
        <p className="mb-6 text-xs font-medium tracking-wide text-muted">
          Trusted by industry leaders
        </p>
        <div className="grid grid-cols-2 gap-y-6 sm:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-3">
              <Icon className="text-brand-blue" size={24} strokeWidth={1.75} />
              <div>
                <p className="text-lg font-bold text-ink">{value}</p>
                <p className="text-[13px] text-muted">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Globe2, Rocket, Users, TrendingUp } from "lucide-react";

const stats = [
  { icon: Globe2, value: "25+", label: "Countries Served" },
  { icon: Rocket, value: "50+", label: "Projects Delivered" },
  { icon: Users, value: "98%", label: "Client Satisfaction" },
  { icon: TrendingUp, value: "5+", label: "Years of Experience" },
];

export default function StatsBar() {
  return (
    <section className="bg-navy-900 py-10">
      <div className="container-content grid grid-cols-2 gap-y-8 sm:grid-cols-4">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex items-center gap-3">
            <Icon className="text-brand-blue" size={26} strokeWidth={1.75} />
            <div>
              <p className="text-xl font-bold text-white">{value}</p>
              <p className="text-[13px] text-white/50">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

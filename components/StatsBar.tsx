import { Rocket, Users, Globe2, Award } from "lucide-react";

export const stats = [
  { icon: Rocket, value: "10+", label: "Products Launched" },
  { icon: Users, value: "25+", label: "Happy Clients" },
  { icon: Globe2, value: "5+", label: "Countries" },
  { icon: Award, value: "99%", label: "Client Satisfaction" },
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

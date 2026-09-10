const team = [
  {
    name: "Rohan Saeed",
    role: "CEO",
    blurb: "Building the future, one product at a time.",
  },
  {
    name: "Ayesha Khan",
    role: "CTO",
    blurb: "Turning ambitious ideas into elegant engineering.",
  },
  {
    name: "Imran Ali",
    role: "Lead Engineer",
    blurb: "Clean code, big impact.",
  },
  {
    name: "Sara Fatima",
    role: "Product Lead",
    blurb: "User empathy meets technical depth.",
  },
];

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");
  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-gradient text-lg font-semibold text-white">
      {initials}
    </div>
  );
}

export default function TeamGrid() {
  return (
    <section id="team" className="bg-surface py-24">
      <div className="container-content">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-[13px] font-semibold text-brand-blue">Our Team</p>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-[38px]">
            Meet the people behind Ravaan Labs.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map(({ name, role, blurb }) => (
            <div
              key={name}
              className="rounded-xl border border-gray-200/70 bg-white p-6 text-center transition hover:border-brand-blue/40 hover:shadow-[0_8px_30px_rgba(59,124,255,0.08)]"
            >
              <div className="flex justify-center">
                <Avatar name={name} />
              </div>
              <h3 className="mt-4 font-semibold text-ink">{name}</h3>
              <p className="text-xs font-medium text-brand-blue">{role}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

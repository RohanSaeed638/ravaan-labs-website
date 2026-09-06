import { Feather } from "lucide-react";

function DashboardScreen({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex h-full flex-col bg-navy-900 p-4">
      <div className="flex items-center justify-between">
        <p className="text-[13px] font-medium text-white">
          Hi, Rohan <span aria-hidden>👋</span>
        </p>
        <div className="h-6 w-6 rounded-full bg-brand-gradient" />
      </div>
      <p className="mt-1 text-[11px] text-white/50">
        Your personalized roadmap is ready.
      </p>
      <button className="mt-3 w-fit rounded-md bg-brand-gradient-diag px-3 py-1.5 text-[11px] font-medium text-white">
        Continue Learning
      </button>

      <div className="mt-4 rounded-lg bg-white/5 p-3">
        <div className="flex items-center justify-between text-[11px] text-white/70">
          <span>Roadmap Progress</span>
          <span>72%</span>
        </div>
        <div className="mt-2 h-1.5 w-full rounded-full bg-white/10">
          <div className="h-1.5 w-[72%] rounded-full bg-brand-gradient-diag" />
        </div>
      </div>

      {!compact && (
        <div className="mt-3 rounded-lg bg-white/5 p-3">
          <p className="text-[11px] text-white/70">Next Up</p>
          <p className="mt-1 text-[12px] font-medium text-white">
            System Design Basics
          </p>
          <p className="mt-1 text-[10px] text-white/40">
            2.7/4 weeks &middot; 4h left this sitting
          </p>
        </div>
      )}

      <div className="mt-3 grid grid-cols-3 gap-2 text-center">
        {[
          ["24", "Learning Units"],
          ["12", "Completed"],
          ["8", "In Progress"],
        ].map(([num, label]) => (
          <div key={label} className="rounded-lg bg-white/5 py-2">
            <p className="text-[15px] font-semibold text-white">{num}</p>
            <p className="text-[9px] text-white/40">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProductShowcase() {
  return (
    <section id="products" className="bg-white py-24">
      <div className="container-content grid items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="text-[13px] font-semibold text-brand-blue">
            Our flagship product
          </p>
          <div className="mt-3 flex items-center gap-2">
            <Feather className="text-brand-blue" size={26} />
            <span className="text-2xl font-bold text-ink">Uraan</span>
          </div>
          <p className="mt-3 text-[15px] font-medium text-ink/80">
            AI-powered career and learning platform.
          </p>
          <p className="mt-3 max-w-md text-muted">
            Personalized roadmaps, smart recommendations and an AI mentor to
            help learners achieve their goals faster.
          </p>
          <a
            href="#"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-brand-gradient-diag px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Explore Uraan <span aria-hidden>→</span>
          </a>
        </div>

        <div className="relative flex justify-center">
          {/* laptop */}
          <div className="w-full max-w-[440px]">
            <div className="rounded-t-xl border-[6px] border-b-0 border-navy-800 bg-navy-900 p-1 shadow-2xl">
              <div className="aspect-[16/10] overflow-hidden rounded-sm">
                <DashboardScreen />
              </div>
            </div>
            <div className="h-3 rounded-b-xl bg-gray-300" />
            <div className="mx-auto h-1.5 w-28 rounded-b-md bg-gray-400" />
          </div>

          {/* phone */}
          <div className="absolute -right-2 bottom-[-24px] w-[120px] sm:right-[-8px] sm:w-[140px]">
            <div className="overflow-hidden rounded-[20px] border-[5px] border-navy-800 bg-navy-900 shadow-2xl">
              <div className="aspect-[9/18.5]">
                <DashboardScreen compact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

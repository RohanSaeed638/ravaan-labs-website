"use client";

import { useMemo, useState } from "react";
import { Search, Brain, Server, Rocket, Cloud, Bot, BookOpen } from "lucide-react";

const posts = [
  {
    icon: Brain,
    category: "AI & Tech",
    title: "The Future of AI in Product Development",
    date: "Sep 12, 2025",
    gradient: "from-[#1B2A6B] via-[#2451C4] to-[#22C4F5]",
  },
  {
    icon: Server,
    category: "Engineering",
    title: "Building Scalable Backend Systems with FastAPI",
    date: "Sep 5, 2025",
    gradient: "from-[#2A1B6B] via-[#4A1FA0] to-[#7B3FE4]",
  },
  {
    icon: Rocket,
    category: "Product",
    title: "Product Strategy for Early-Stage Startups",
    date: "Aug 28, 2025",
    gradient: "from-[#0F3B6B] via-[#1E63A8] to-[#3E7BFA]",
  },
  {
    icon: Cloud,
    category: "Engineering",
    title: "Why Cloud Native Matters in 2025",
    date: "Aug 20, 2025",
    gradient: "from-[#1B2A6B] via-[#2451C4] to-[#22C4F5]",
  },
  {
    icon: Bot,
    category: "AI & Tech",
    title: "The Rise of AI Agents in Business",
    date: "Aug 15, 2025",
    gradient: "from-[#2A1B6B] via-[#4A1FA0] to-[#7B3FE4]",
  },
  {
    icon: BookOpen,
    category: "Company",
    title: "Lessons from Building Uraan",
    date: "Aug 8, 2025",
    gradient: "from-[#0F3B6B] via-[#1E63A8] to-[#3E7BFA]",
  },
];

const categories = ["All", "AI & Tech", "Engineering", "Product", "Company"];

export default function BlogExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesQuery = p.title.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <section className="bg-white py-24">
      <div className="container-content">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full max-w-sm">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
              size={16}
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full rounded-lg border border-gray-200 py-2.5 pl-9 pr-3 text-sm text-ink outline-none focus:border-brand-blue"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
                  category === c
                    ? "bg-brand-gradient-diag text-white"
                    : "bg-surface text-muted hover:text-ink"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="mt-14 text-center text-muted">
            No articles match your search.
          </p>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map(({ icon: Icon, category, title, date, gradient }) => (
              <a
                key={title}
                href="#"
                className="group overflow-hidden rounded-xl border border-gray-200/70 bg-white transition hover:border-brand-blue/40 hover:shadow-[0_8px_30px_rgba(59,124,255,0.08)]"
              >
                <div
                  className={`relative flex h-40 items-center justify-center bg-gradient-to-br ${gradient}`}
                >
                  <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle,white_1px,transparent_1px)] [background-size:20px_20px]" />
                  <Icon className="relative text-white" size={36} strokeWidth={1.5} />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold text-brand-blue">
                    {category}
                  </p>
                  <h3 className="mt-2 text-[15px] font-semibold leading-snug text-ink">
                    {title}
                  </h3>
                  <p className="mt-3 text-xs text-muted">{date}</p>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

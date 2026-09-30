"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, ArrowRight, Clock3 } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { blogs } from "@/lib/blogs_2";
import { blogCategories } from "@/lib/blogCategories";

const categories = [
  { value: "all", label: "All" },
  { value: "ai-tech", label: "AI & Tech" },
  { value: "engineering", label: "Engineering" },
  { value: "product", label: "Product" },
  { value: "company", label: "Company" },
];

export default function BlogExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const filtered = useMemo(() => {
    return blogs
      .filter((blog) => blog.status === "published")
      .filter((blog) => {
        const matchesCategory =
          category === "all" || blog.category === category;

        const search = query.trim().toLowerCase();

        const matchesQuery =
          !search ||
          blog.title.toLowerCase().includes(search) ||
          blog.excerpt.toLowerCase().includes(search) ||
          blog.tags.some((tag) =>
            tag.toLowerCase().includes(search)
          );

        return matchesCategory && matchesQuery;
      })
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() -
          new Date(a.publishedAt).getTime()
      );
  }, [query, category]);

  return (
    <section className="bg-white py-24">
      <div className="container-content">

        {/* Search + Categories */}

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
              className="w-full rounded-lg border border-gray-200 py-2.5 pl-9 pr-3 text-sm text-ink outline-none transition focus:border-brand-blue"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item.value}
                onClick={() => setCategory(item.value)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
                  category === item.value
                    ? "bg-brand-gradient-diag text-white"
                    : "bg-surface text-muted hover:text-ink"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

        </div>

        {/* Blogs */}

        {filtered.length === 0 ? (
          <div className="mt-16 text-center">
            <p className="font-medium text-ink">
              No articles found
            </p>

            <p className="mt-1 text-sm text-muted">
              Try another search or category.
            </p>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {filtered.map((blog) => {
              const config =
                blogCategories[blog.category];

              const Icon = config.icon;

              return (
                <Link
                  key={blog.id}
                  href={`/blog/${blog.slug}`}
                  className="group overflow-hidden rounded-xl border border-gray-200/70 bg-white transition duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-[0_12px_35px_rgba(59,124,255,0.10)]"
                >

                  {/* IMAGE / CATEGORY ART */}

                  {blog.featuredImage ? (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={blog.featuredImage}
                        alt={blog.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                  ) : (
                    <div
                      className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${config.gradient}`}
                    >
                      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle,white_1px,transparent_1px)] [background-size:20px_20px]" />

                      <div className="absolute h-28 w-28 rounded-full bg-white/10 blur-2xl" />

                      <Icon
                        className="relative text-white"
                        size={42}
                        strokeWidth={1.4}
                      />
                    </div>
                  )}

                  {/* CONTENT */}

                  <div className="p-5">

                    <div className="flex items-center justify-between">

                      <p className="text-xs font-semibold text-brand-blue">
                        {config.label}
                      </p>

                      <div className="flex items-center gap-1 text-[11px] text-muted">
                        <Clock3 size={12} />
                        {blog.readingTime} min
                      </div>

                    </div>

                    <h3 className="mt-2 line-clamp-2 text-[16px] font-semibold leading-snug text-ink transition group-hover:text-brand-blue">
                      {blog.title}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">
                      {blog.excerpt}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">

                      <p className="text-xs text-muted">
                        {formatDate(blog.publishedAt)}
                      </p>

                      <span className="flex items-center gap-1 text-xs font-medium text-brand-blue">
                        Read article

                        <ArrowRight
                          size={13}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </span>

                    </div>

                  </div>

                </Link>
              );
            })}

          </div>
        )}

      </div>
    </section>
  );
}
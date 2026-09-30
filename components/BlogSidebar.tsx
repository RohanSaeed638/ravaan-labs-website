import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { blogCategories } from "@/lib/blogCategories";
import { Blog } from "@/types/blog";

export function BlogSidebar({
  blog,
  recentBlogs,
}: {
  blog: Blog;
  recentBlogs: Blog[];
}) {
  return (
    <aside className="hidden lg:block">

      <div className="sticky top-24 space-y-8">

        {/* TABLE OF CONTENTS */}
        <div className="rounded-xl border border-slate-200 bg-white p-5">

          <h3 className="text-sm font-semibold text-slate-950">
            Table of Contents
          </h3>

          <nav className="mt-4 space-y-3">

            {blog.sections
              .filter((section) => section.heading)
              .map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex gap-3 text-sm leading-6 text-slate-500 transition hover:text-blue-600"
                >
                  <span className="font-medium text-blue-600">
                    {index + 1}.
                  </span>

                  {section.heading?.replace(
                    /^\d+\.\s*/,
                    ""
                  )}
                </a>
              ))}

          </nav>

        </div>


        {/* RECENT BLOGS */}
        <div>

          <div className="mb-4 flex items-center justify-between">

            <h3 className="text-sm font-semibold text-slate-950">
              Recent Posts
            </h3>

            <Link
              href="/blog"
              className="text-xs font-medium text-blue-600 hover:text-blue-700"
            >
              View all
            </Link>

          </div>

          <div className="space-y-5">

            {recentBlogs.map((item) => {

              const config =
                blogCategories[item.category];

              return (
                <Link
                  key={item.id}
                  href={`/blog/${item.slug}`}
                  className="group flex gap-3"
                >

                  <div
                    className={`
                      h-16 w-20 shrink-0 rounded-lg
                      bg-gradient-to-br
                      ${config.gradient}
                    `}
                  />

                  <div className="min-w-0">

                    <p className="line-clamp-2 text-sm font-semibold leading-5 text-slate-800 transition group-hover:text-blue-600">
                      {item.title}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      {formatDate(item.publishedAt)}
                    </p>

                  </div>

                </Link>
              );
            })}

          </div>

        </div>


        {/* NEWSLETTER */}
        <div className="rounded-xl bg-slate-950 p-5 text-white">

          <h3 className="font-semibold">
            Stay in the loop
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Insights on AI, engineering and building better
            digital products.
          </p>

          <input
            type="email"
            placeholder="you@example.com"
            className="mt-4 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm outline-none placeholder:text-slate-500 focus:border-blue-500"
          />

          <button className="mt-3 w-full rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-2.5 text-sm font-semibold">
            Subscribe
          </button>

        </div>

      </div>

    </aside>
  );
}
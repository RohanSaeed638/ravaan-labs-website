import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  UserRound,
} from "lucide-react";
import { BlogSection } from "@/components/BlogSection";
import { BlogSidebar } from "@/components/BlogSidebar";
import {formatDate} from "@/lib/utils";
import { blogs } from "@/lib/blogs";
import { blogCategories } from "@/lib/blogCategories";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPage({
  params,
}: BlogPageProps) {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  const category = blogCategories[blog.category];
  const CategoryIcon = category.icon;

  const recentBlogs = blogs
    .filter(
      (item) =>
        item.slug !== blog.slug &&
        item.status === "published"
    )
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HERO */}
      <section className="relative overflow-hidden text-white">

        {/* CATEGORY BACKGROUND */}
        <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${category.image})`,
            }}
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030B1D]/95 via-[#061532]/80 to-[#071A45]/35" />

        {/* SUBTLE BOTTOM FADE */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/25 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-blue-100 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          <div className="max-w-4xl">

            <div className="mb-5 flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm backdrop-blur">
                <CategoryIcon size={15} />

                {category.label}
              </span>
            </div>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              {blog.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
              {blog.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-blue-100">

              <span className="flex items-center gap-2">
                <UserRound size={16} />
                {blog.author.name}
              </span>

              <span className="flex items-center gap-2">
                <CalendarDays size={16} />
                {formatDate(blog.publishedAt)}
              </span>

              <span className="flex items-center gap-2">
                <Clock3 size={16} />
                {blog.readingTime} min read
              </span>

            </div>
          </div>
        </div>
      </section>

        

      {/* ARTICLE */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_320px]">

          {/* CONTENT */}
          <article className="min-w-0">

            <div className="mx-auto max-w-3xl">

              {blog.sections.map((section) => (
                <BlogSection
                  key={section.id}
                  section={section}
                />
              ))}


              {/* TAGS */}
              <div className="mt-14 border-t border-slate-200 pt-8">

                <p className="mb-4 text-sm font-semibold text-slate-900">
                  Topics
                </p>

                <div className="flex flex-wrap gap-2">

                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700"
                    >
                      {tag}
                    </span>
                  ))}

                </div>

              </div>


              {/* CTA */}
              <div className="mt-12 overflow-hidden rounded-2xl bg-gradient-to-r from-[#071A45] via-[#173DAB] to-[#6D28D9] p-8 text-white">

                <p className="text-sm font-medium text-blue-200">
                  Ravaan Labs
                </p>

                <h3 className="mt-2 text-2xl font-semibold">
                  Have an idea? Let&apos;s build it together.
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100">
                  We help teams transform ideas into intelligent
                  products using modern engineering and AI.
                </p>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-blue-900 transition hover:bg-blue-50"
                >
                  Start a Project

                  <ArrowRight size={16} />
                </Link>

              </div>

            </div>

          </article>


          {/* SIDEBAR */}
          <BlogSidebar
            blog={blog}
            recentBlogs={recentBlogs}
          />

        </div>

      </section>

    </main>
  );
}
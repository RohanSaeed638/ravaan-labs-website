import type {
  Blog,
  BlogSection as BlogSectionType,
} from "@/types/blog";

export function BlogSection({
  section,
}: {
  section: BlogSectionType;
}) {
  return (
    <section
      id={section.id}
      className="mb-12 scroll-mt-24"
    >
      {section.heading && (
        <h2 className="mb-5 text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
          {section.heading}
        </h2>
      )}

      {section.paragraphs && (
        <div className="space-y-5">
          {section.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-[17px] leading-8 text-slate-600"
            >
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {section.bullets && (
        <ul className="mt-6 space-y-3">
          {section.bullets.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-[16px] leading-7 text-slate-600"
            >
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />

              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {section.code && (
        <pre className="mt-7 overflow-x-auto rounded-xl bg-[#071329] p-6 text-sm leading-6 text-blue-100">
          <code>{section.code}</code>
        </pre>
      )}

      {section.quote && (
        <blockquote className="mt-8 rounded-xl border border-blue-100 bg-blue-50/70 p-6">
          <p className="text-lg font-medium leading-8 text-blue-950">
            “{section.quote.text}”
          </p>

          {section.quote.author && (
            <footer className="mt-3 text-sm text-blue-700">
              — {section.quote.author}
            </footer>
          )}
        </blockquote>
      )}

      {section.image && (
        <figure className="mt-8">
          <img
            src={section.image.src}
            alt={section.image.alt}
            className="w-full rounded-xl"
          />

          {section.image.caption && (
            <figcaption className="mt-2 text-center text-sm text-slate-500">
              {section.image.caption}
            </figcaption>
          )}
        </figure>
      )}
    </section>
  );
}
// import type {
//   Blog,
//   BlogSection as BlogSectionType,
// } from "@/types/blog";

// export function BlogSection({
//   section,
// }: {
//   section: BlogSectionType;
// }) {
//   return (
//     <section
//       id={section.id}
//       className="mb-12 scroll-mt-24"
//     >
//       {section.heading && (
//         <h2 className="mb-5 text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
//           {section.heading}
//         </h2>
//       )}

//       {section.paragraphs && (
//         <div className="space-y-5">
//           {section.paragraphs.map((paragraph, index) => (
//             <p
//               key={index}
//               className="text-[17px] leading-8 text-slate-600"
//             >
//               {paragraph}
//             </p>
//           ))}
//         </div>
//       )}

//       {section.bullets && (
//         <ul className="mt-6 space-y-3">
//           {section.bullets.map((item) => (
//             <li
//               key={item}
//               className="flex gap-3 text-[16px] leading-7 text-slate-600"
//             >
//               <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />

//               <span>{item}</span>
//             </li>
//           ))}
//         </ul>
//       )}

//       {section.code && (
//         <pre className="mt-7 overflow-x-auto rounded-xl bg-[#071329] p-6 text-sm leading-6 text-blue-100">
//           <code>{section.code}</code>
//         </pre>
//       )}

//       {section.quote && (
//         <blockquote className="mt-8 rounded-xl border border-blue-100 bg-blue-50/70 p-6">
//           <p className="text-lg font-medium leading-8 text-blue-950">
//             “{section.quote.text}”
//           </p>

//           {section.quote.author && (
//             <footer className="mt-3 text-sm text-blue-700">
//               — {section.quote.author}
//             </footer>
//           )}
//         </blockquote>
//       )}

//       {section.image && (
//         <figure className="mt-8">
//           <img
//             src={section.image.src}
//             alt={section.image.alt}
//             className="w-full rounded-xl"
//           />

//           {section.image.caption && (
//             <figcaption className="mt-2 text-center text-sm text-slate-500">
//               {section.image.caption}
//             </figcaption>
//           )}
//         </figure>
//       )}
//     </section>
//   );
// }

import { BlogSection as BlogSectionType } from "@/types/blog";

interface Props {
  section: BlogSectionType;
}

export function BlogSection({ section }: Props) {
  const blocks = section.blocks ?? [];
  if (!section.blocks) {
  console.error("Blog section missing blocks:", section);
  }
  return (
    <section
      id={section.id}
      className="mb-12 scroll-mt-24"
    >
      {section.heading && (
        <h2 className="mb-5 text-2xl font-bold tracking-tight text-slate-900">
          {section.heading}
        </h2>
      )}

      <div className="space-y-5">
        {blocks.map((block, index) => {
          switch (block.type) {
            case "paragraph":
              return (
                <p
                  key={index}
                  className="text-[16px] leading-8 text-slate-600"
                >
                  {block.content}
                </p>
              );

            case "code":
              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl border border-slate-800 bg-[#0B1120]"
                >
                  {block.language && (
                    <div className="border-b border-white/10 px-4 py-2 text-xs font-medium uppercase tracking-wide text-slate-400">
                      {block.language}
                    </div>
                  )}

                  <pre className="overflow-x-auto p-5 text-sm leading-6 text-slate-200">
                    <code>{block.content}</code>
                  </pre>
                </div>
              );

            case "list":
              return (
                <ul
                  key={index}
                  className="space-y-2 pl-5 text-[16px] leading-7 text-slate-600"
                >
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="list-disc pl-1"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              );

            case "diagram":
              return (
                <pre
                  key={index}
                  className="overflow-x-auto rounded-xl border border-blue-100 bg-blue-50/60 p-5 font-mono text-sm leading-6 text-slate-700"
                >
                  {block.content}
                </pre>
              );

            case "quote":
              return (
                <blockquote
                  key={index}
                  className="border-l-4 border-brand-blue bg-blue-50 px-5 py-4 text-lg font-medium italic text-slate-700"
                >
                  {block.content}
                </blockquote>
              );

            default:
              return null;
          }
        })}
      </div>
    </section>
  );
}
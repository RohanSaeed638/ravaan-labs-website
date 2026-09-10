import { ReactNode } from "react";
import Image from "next/image";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  imgsrc,
  bgPosition = "center",
  compact = true,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  imgsrc?: string;
  bgPosition?: string;
  compact?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900 h-[500px]">
      <Image
        src={`${imgsrc || "/ravaan-hero.png"}`}
        alt=""
        fill
        priority
        aria-hidden
        style={{ objectFit: "cover", objectPosition: bgPosition }}
      />

      <div
        className={`container-content relative grid gap-10 ${
          compact ? "py-16 lg:py-20" : "py-20 lg:py-24"
        } `}
      >
        <div>
          <p className="mb-4 text-[13px] font-semibold tracking-wide text-brand-blue">
            {eyebrow}
          </p>
          <h1 className="max-w-xl text-[34px] font-bold leading-[1.15] text-white sm:text-[42px]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-white/65">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

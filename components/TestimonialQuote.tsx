export default function TestimonialQuote() {
  return (
    <section className="bg-surface py-20">
      <div className="container-content">
        <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200/70 bg-white p-10 text-center">
          <p aria-hidden className="text-4xl leading-none text-brand-blue/30">
            &ldquo;
          </p>
          <p className="mt-2 text-lg leading-relaxed text-ink/80">
            Ravaan Labs delivered beyond our expectations. Their technical
            expertise and commitment to quality made the entire process
            seamless.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient text-xs font-semibold text-white">
              AR
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-ink">Ayesha Rahman</p>
              <p className="text-xs text-muted">CTO, NovaTech</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

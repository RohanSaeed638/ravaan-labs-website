const companies = [
  "workdd",
  "ZAYN",
  "QOTU",
  "droplink",
  "hoora",
  "stackly",
  "venturz",
  "teammate",
];

export default function LogoStrip() {
  return (
    <section className="border-b border-gray-100 bg-white py-10">
      <div className="container-content">
        <p className="mb-6 text-xs font-medium tracking-wide text-muted">
          Trusted by startups &amp; businesses worldwide
        </p>
        <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
          {companies.map((name) => (
            <span
              key={name}
              className="text-lg font-semibold text-gray-400 grayscale transition hover:text-gray-600"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Mail, MapPin, Github, Linkedin } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-3.5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10">
          <Mail className="text-brand-blue" size={18} />
        </span>
        <div>
          <h3 className="text-sm font-semibold text-ink">Email</h3>
          <p className="text-sm text-brand-blue">contact@ravaanlabs.com</p>
          <p className="mt-0.5 text-xs text-muted">
            We typically respond within 24 hours.
          </p>
        </div>
      </div>

      <div className="flex gap-3.5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10">
          <MapPin className="text-brand-blue" size={18} />
        </span>
        <div>
          <h3 className="text-sm font-semibold text-ink">Location</h3>
          <p className="text-sm text-ink/80">Remote / Global</p>
          <p className="mt-0.5 text-xs text-muted">
            We work with clients worldwide.
          </p>
        </div>
      </div>

      <div className="flex gap-3.5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10">
          <Github className="text-brand-blue" size={18} />
        </span>
        <div>
          <h3 className="text-sm font-semibold text-ink">Follow Us</h3>
          <div className="mt-1.5 flex gap-2">
            <a
              href="https://github.com/Ravaan-Labs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ravaan Labs on GitHub"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-surface text-muted transition hover:bg-brand-blue/10 hover:text-brand-blue"
            >
              <Github size={15} />
            </a>
            <a
              href="https://www.linkedin.com/company/ravaan-labs/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ravaan Labs on LinkedIn"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-surface text-muted transition hover:bg-brand-blue/10 hover:text-brand-blue"
            >
              <Linkedin size={15} />
            </a>
            <a
              href="mailto:contact@ravaanlabs.com"
              aria-label="Email Ravaan Labs"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-surface text-muted transition hover:bg-brand-blue/10 hover:text-brand-blue"
            >
              <Mail size={15} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

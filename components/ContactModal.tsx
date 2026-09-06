"use client";

import { useState, createContext, useContext, useCallback } from "react";
import { X, Loader2, CheckCircle2 } from "lucide-react";

type ModalState = {
  open: (subject?: string) => void;
};

const ContactModalContext = createContext<ModalState | null>(null);

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) throw new Error("useContactModal must be used within ContactModalProvider");
  return ctx;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [subject, setSubject] = useState("Let's talk");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const open = useCallback((s?: string) => {
    setSubject(s || "Let's talk");
    setStatus("idle");
    setIsOpen(true);
  }, []);

  const close = () => {
    setIsOpen(false);
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, subject }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <ContactModalContext.Provider value={{ open }}>
      {children}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/70 px-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
          onClick={close}
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white p-7 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-5 flex items-start justify-between">
              <h3 id="contact-modal-title" className="text-xl font-semibold text-ink">
                {subject}
              </h3>
              <button
                onClick={close}
                aria-label="Close"
                className="rounded-full p-1 text-muted hover:bg-surface hover:text-ink"
              >
                <X size={20} />
              </button>
            </div>

            {status === "success" ? (
              <div className="flex flex-col items-center gap-3 py-6 text-center">
                <CheckCircle2 className="text-brand-blue" size={40} />
                <p className="text-ink font-medium">Message sent.</p>
                <p className="text-sm text-muted">
                  We&apos;ll get back to you within one business day.
                </p>
                <button
                  onClick={close}
                  className="mt-2 rounded-lg bg-brand-gradient-diag px-5 py-2 text-sm font-medium text-white"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-ink">
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-ink outline-none focus:border-brand-blue"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-ink">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-ink outline-none focus:border-brand-blue"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-ink">
                    Project details
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2 text-sm text-ink outline-none focus:border-brand-blue"
                    placeholder="Tell us a bit about what you're building"
                  />
                </div>
                {status === "error" && (
                  <p className="text-sm text-red-600">
                    Something went wrong. Please try again, or email us directly.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-1 flex items-center justify-center gap-2 rounded-lg bg-brand-gradient-diag px-5 py-2.5 text-sm font-medium text-white disabled:opacity-70"
                >
                  {status === "loading" && <Loader2 size={16} className="animate-spin" />}
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </ContactModalContext.Provider>
  );
}

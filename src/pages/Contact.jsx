// src/pages/Contact.jsx
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    // Replace with your real submission endpoint
    await new Promise((r) => setTimeout(r, 1000));

    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 2000);
  };

  return (
    <main className="w-full overflow-hidden">
      <section className="relative min-h-screen w-full bg-[#024b3a] text-white">
        <div className="w-full px-4 py-10 md:px-10 lg:px-16">
          {/* Background circles */}
          <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full border border-white/5" />
          <div className="pointer-events-none absolute -right-52 -bottom-52 h-[28rem] w-[28rem] rounded-full border border-white/5" />

          {/* Main card */}
          <div
            className="
              relative z-10 mx-auto w-full max-w-5xl rounded-[2.5rem]
              bg-gradient-to-r from-slate-50/95 to-slate-200/95
              px-6 py-6 text-slate-900 shadow-2xl sm:px-10 sm:py-8
            "
          >
            {/* Top bar */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-[11px] font-medium text-slate-500 sm:text-xs">
              <div className="flex items-center gap-2">
                <span>Contact</span>
                <span className="h-1 w-1 rounded-full bg-slate-400" />
                <span>Let&apos;s talk</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>Typically replies within 24 hours</span>
              </div>
            </div>

            {/* Heading */}
            <div className="mt-8 space-y-3 text-left">
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Get Your{" "}
                <span className="italic text-[#B18072]">Free Quote Today!</span>
              </h2>
              <p className="text-sm text-slate-600 sm:text-base">
                Share a few details about your project, and I&apos;ll get back to
                you with ideas, timelines, and next steps.
              </p>
            </div>

            {/* Form + contact details */}
            <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,1.6fr)_minmax(260px,1fr)]">
              {/* Form panel */}
              <form
                onSubmit={handleSubmit}
                className="
                  space-y-5 rounded-2xl border border-slate-200 bg-white/90
                  p-5 text-slate-900 shadow-sm md:p-6
                "
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-xs font-medium uppercase tracking-wide text-slate-700">
                      Your Name *
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#B18072]"
                      placeholder="Ex. John Doe"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium uppercase tracking-wide text-slate-700">
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#B18072]"
                      placeholder="example@gmail.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium uppercase tracking-wide text-slate-700">
                    Subject *
                  </label>
                  <input
                    required
                    value={form.subject}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                    className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#B18072]"
                    placeholder="Enter subject"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium uppercase tracking-wide text-slate-700">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#B18072]"
                    placeholder="Enter here..."
                  />
                </div>

                {/* Send button */}
                <div className="pt-1">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={status === "loading"}
                    type="submit"
                    className="
                      group inline-flex w-full items-center justify-center
                      rounded-full bg-[#B18072] py-1 pl-1 pr-4 text-sm font-semibold
                      text-[#024b3a] shadow-lg shadow-black/40 transition
                      md:w-auto
                    "
                  >
                    <span
                      className="
                        mr-3 flex h-9 w-9 items-center justify-center rounded-full
                        bg-white text-base font-bold text-[#024b3a]
                        transition-transform duration-200 group-hover:translate-x-0.5
                      "
                    >
                      →
                    </span>
                    <span>
                      {status === "loading"
                        ? "Sending…"
                        : status === "success"
                        ? "Sent!"
                        : "Send Message"}
                    </span>
                  </motion.button>
                </div>
              </form>

              {/* Contact info panel */}
              <div className="flex items-stretch">
                <div className="flex w-full flex-col justify-between rounded-2xl border border-slate-200 bg-[#01352a] px-6 py-6 text-sm text-white shadow-sm sm:px-8 sm:py-8">
                  <div className="space-y-6">
                    {/* Address */}
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#024b3a] text-white/90">
                          <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M12 21s-5-5.1-5-9.3A5 5 0 0 1 12 6a5 5 0 0 1 5 5.7C17 15.9 12 21 12 21z" />
                            <circle cx="12" cy="11" r="1.8" />
                          </svg>
                        </span>
                        <h3 className="text-base font-semibold tracking-wide">
                          Address
                        </h3>
                      </div>
                      <p className="mt-2 text-sm text-white/80">
                        EMATechSolutions
                        <br />
                        Lagos, Nigeria
                      </p>
                    </div>

                    {/* Contact */}
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#024b3a] text-white/90">
                          <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M4 5h16v10H5.5L4 16.5z" />
                            <path d="M6 7.5 12 11l6-3.5" />
                          </svg>
                        </span>
                        <h3 className="text-base font-semibold tracking-wide">
                          Contact
                        </h3>
                      </div>
                      <div className="mt-2 space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-white/80">
                            <svg
                              viewBox="0 0 24 24"
                              className="h-3 w-3"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H8l2 5-2 1a10.5 10.5 0 0 0 5 5l1-2 5 2v1.5A2.5 2.5 0 0 1 16.5 21C9.6 20.6 4 15 4 7.5z" />
                            </svg>
                          </span>
                          <div>
                            <span className="text-white/60">Phone: </span>
                            <a
                              href="tel:+2349123823413"
                              className="text-[#B18072] transition-colors hover:text-[#f3c3ac]"
                            >
                              +234 912 382 3413
                            </a>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-white/80">
                            <svg
                              viewBox="0 0 24 24"
                              className="h-3 w-3"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <rect x="3" y="5" width="18" height="14" rx="2" />
                              <path d="M3 9.5 12 14l9-4.5" />
                            </svg>
                          </span>
                          <div>
                            <span className="text-white/60">Email: </span>
                            <a
                              href="mailto:ajideemmanuel92@gmail.com"
                              className="text-[#B18072] transition-colors hover:text-[#f3c3ac]"
                            >
                              ajideemmanuel92@gmail.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Stay Connected */}
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#024b3a] text-white/90">
                          <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="18" cy="5" r="3" />
                            <circle cx="6" cy="12" r="3" />
                            <circle cx="18" cy="19" r="3" />
                            <path d="M8.5 13.5 15.5 17.5" />
                            <path d="M15.5 6.5 8.5 10.5" />
                          </svg>
                        </span>
                        <h3 className="text-base font-semibold tracking-wide">
                          Stay Connected
                        </h3>
                      </div>

                      <div className="mt-3 flex flex-wrap gap-3">
                        {/* Facebook */}
                        <a
                          href="#"
                          aria-label="Facebook"
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#024b3a] text-white transition hover:bg-[#B18072]"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect
                              x="4"
                              y="4"
                              width="16"
                              height="16"
                              rx="3"
                              ry="3"
                            />
                            <path d="M13 20v-6h2.2L16 11h-3V9.5A1.5 1.5 0 0 1 14.5 8H16V6h-2.5A3.5 3.5 0 0 0 10 9.5V11H8v3h2v6z" />
                          </svg>
                        </a>

                        {/* LinkedIn */}
                        <a
                          href="#"
                          aria-label="LinkedIn"
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#024b3a] text-white transition hover:bg-[#B18072]"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect
                              x="4"
                              y="4"
                              width="16"
                              height="16"
                              rx="2.5"
                              ry="2.5"
                            />
                            <path d="M7.2 17v-6.2" />
                            <circle cx="7.2" cy="7.1" r="0.9" />
                            <path d="M11 17v-3c0-1.3.8-2.2 2.1-2.2 1.2 0 1.9.8 1.9 2.2V17" />
                          </svg>
                        </a>

                        {/* Twitter / X */}
                        <a
                          href="#"
                          aria-label="Twitter / X"
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#024b3a] text-white transition hover:bg-[#B18072]"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 5l14 14" />
                            <path d="M19 5 9.5 14.5 5 19" />
                          </svg>
                        </a>

                        {/* WhatsApp */}
                        <a
                          href="#"
                          aria-label="WhatsApp"
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#024b3a] text-white transition hover:bg-[#B18072]"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5.5 20.5 7 17.5A7.3 7.3 0 1 1 12 19a7.4 7.4 0 0 1-3.6-.9z" />
                            <path d="M9.5 10.5c.2-.2.4-.4.6-.4.1 0 .3 0 .4.2l.7 1.1c.1.1.1.3 0 .4l-.3.5c.3.5.7 1 1.1 1.3.3.3.8.6 1.2.8l.5-.3c.1-.1.3-.1.4 0l1.1.7c.2.1.2.3.2.4 0 .2-.2.5-.4.6-.3.2-.8.3-1.3.3-1.1 0-2.2-.5-3.1-1.3-.9-.8-1.7-1.9-2.1-3-.1-.4-.2-.8-.2-1.1 0-.4.1-.8.3-1 .1-.1.2-.2.3-.3z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  <p className="mt-6 text-xs text-white/60">
                    I'm available for freelance projects, collaborations, and
                    full‑time opportunities.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom highlight section */}
            <div className="mt-10 grid gap-6 rounded-2xl border border-slate-200 bg-white/90 px-6 py-6 text-sm text-slate-900 shadow-sm md:grid-cols-3 md:px-8 md:py-7">
              {/* Reasonable Prices */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#B18072]/20 text-[#B18072]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 7a2 2 0 0 1 2-2h6l7 7-8 8-7-7V7z" />
                    <circle cx="9" cy="9" r="1.6" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Reasonable Prices</h4>
                  <p className="mt-1 text-xs text-slate-600">
                    Quality design and development at fair, transparent rates.
                  </p>
                </div>
              </div>

              {/* Timely Project Delivery */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#B18072]/20 text-[#B18072]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="7" />
                    <path d="M12 8v4l3 2" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Timely Project Delivery</h4>
                  <p className="mt-1 text-xs text-slate-600">
                    Structured processes that keep your project on schedule.
                  </p>
                </div>
              </div>

              {/* Professional Team */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#B18072]/20 text-[#B18072]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="9" cy="9" r="2.3" />
                    <circle cx="15" cy="9" r="2.3" />
                    <path d="M4.5 18c0-2 1.7-3.6 3.8-3.6H9c1 0 1.9.3 2.6.9" />
                    <path d="M19.5 18c0-2-1.7-3.6-3.8-3.6H15" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Professional Team</h4>
                  <p className="mt-1 text-xs text-slate-600">
                    A reliable partner focused on clear communication and results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
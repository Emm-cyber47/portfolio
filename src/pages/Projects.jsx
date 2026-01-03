// src/pages/Projects.jsx
import { useState } from "react";

const projects = [
  {
    title: "Developer Portfolio",
    stack: "React, Vite, Tailwind",
    link: "https://example.com/portfolio",
    repo: "https://github.com/you/dev-portfolio",
    description:
      "Personal portfolio showcasing projects, skills, and a custom design system built with Tailwind.",
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "TaskFlow – Task Manager",
    stack: "React, TypeScript, Firebase",
    link: "https://example.com/taskflow",
    repo: "https://github.com/you/taskflow",
    description:
      "A productivity app for managing tasks, deadlines, and teams with real‑time sync and offline support.",
    image:
      "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "EMATech Shop – E‑commerce",
    stack: "Laravel, MySQL, Blade",
    link: "https://example.com/ematech-shop",
    repo: "https://github.com/you/ematech-shop",
    description:
      "Full‑stack store with product management, cart, checkout, and secure payments.",
    image:
      "https://images.pexels.com/photos/3943745/pexels-photo-3943745.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Client Analytics Dashboard",
    stack: "React, Laravel API",
    link: "https://example.com/dashboard",
    repo: "https://github.com/you/client-dashboard",
    description:
      "Analytics dashboard with charts, filters, role‑based access, and API‑driven insights for clients.",
    image:
      "https://images.pexels.com/photos/1181317/pexels-photo-1181317.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "EMATech Mobile",
    stack: "React Native, Expo",
    link: "https://example.com/ematech-mobile",
    repo: "https://github.com/you/ematech-mobile",
    description:
      "Cross‑platform mobile app for tracking projects, notifications, and quick actions on the go.",
    image:
      "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Landing Page Collection",
    stack: "HTML, Tailwind, Animations",
    link: "https://example.com/landing-collection",
    repo: "https://github.com/you/landing-collection",
    description:
      "A set of high‑converting landing pages with smooth animations and reusable Tailwind components.",
    image:
      "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const openModal = (project) => setActiveProject(project);
  const closeModal = () => setActiveProject(null);

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
                <span>Selected work</span>
                <span className="h-1 w-1 rounded-full bg-slate-400" />
                <span>Projects</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>
                  {projects.length} project{projects.length !== 1 && "s"}
                </span>
              </div>
            </div>

            {/* Intro text */}
            <div className="mt-8 space-y-4">
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Recent <span className="text-[#B18072]">Projects</span>
              </h2>
              <p className="text-sm text-slate-600 sm:text-base">
                A snapshot of products I&apos;ve shipped — from clean front‑end
                interfaces to full‑stack platforms. Each build focuses on clarity,
                performance, and scalability.
              </p>

              <div className="mt-4 space-y-3 text-xs text-slate-500 sm:text-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#024b3a]/10 text-[#024b3a]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 5h18M7 12h10M10 19h4" />
                    </svg>
                  </span>
                  <span>Modern stacks: React, Tailwind, Laravel, REST APIs.</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#B18072]/15 text-[#B18072]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 12h3l3 7 4-14 3 7h5" />
                    </svg>
                  </span>
                  <span>
                    Pixel‑perfect, responsive layouts for desktop and mobile.
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12.5 9.5 17 19 7.5" />
                    </svg>
                  </span>
                  <span>
                    Built with attention to UX, performance, and maintainability.
                  </span>
                </div>
              </div>
            </div>

            {/* Projects grid */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <article
                  key={p.title}
                  className="
                    group flex flex-col justify-between rounded-2xl border
                    border-slate-200 bg-white/90 p-4 text-sm shadow-sm
                    transition hover:-translate-y-1 hover:shadow-xl
                  "
                >
                  <div>
                    {/* Thumbnail */}
                    <div className="mb-3 overflow-hidden rounded-xl border border-slate-200/80 bg-slate-100">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="h-32 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                      />
                    </div>

                    {/* Icon + title */}
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-[#024b3a] text-[#fefefe] shadow">
                          <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect x="3" y="4" width="7" height="7" rx="1.5" />
                            <rect x="14" y="4" width="7" height="7" rx="1.5" />
                            <rect x="3" y="13" width="7" height="7" rx="1.5" />
                            <path d="M14 13h4.5A1.5 1.5 0 0 1 20 14.5V20" />
                          </svg>
                        </div>
                        <h3 className="text-[13px] font-semibold text-slate-900 sm:text-sm">
                          {p.title}
                        </h3>
                      </div>
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600">
                        {p.stack}
                      </span>
                    </div>

                    <p className="text-xs leading-relaxed text-slate-600 sm:text-[13px]">
                      {p.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="mt-4 flex items-center justify-between text-xs">
                    <button
                      type="button"
                      onClick={() => openModal(p)}
                      className="
                        inline-flex items-center gap-1 rounded-full border
                        border-[#B18072] px-3 py-1 text-[11px] font-semibold
                        text-[#B18072] transition hover:bg-[#B18072]
                        hover:text-[#024b3a]
                      "
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="4" width="18" height="14" rx="2" />
                        <path d="M3 10h18" />
                      </svg>
                      <span>Preview</span>
                    </button>

                    <span className="text-[11px] text-slate-500">
                      Screens &amp; links inside
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Modal preview */}
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6">
            <div
              className="
                relative max-h-[90vh] w-full max-w-3xl overflow-y-auto
                rounded-3xl bg-slate-50 text-slate-900 shadow-2xl
              "
            >
              {/* Close button */}
              <button
                type="button"
                onClick={closeModal}
                className="
                  sticky left-full top-3 mr-3 flex h-8 w-8 -translate-x-3
                  items-center justify-center rounded-full bg-slate-200
                  text-slate-700 shadow hover:bg-slate-300
                "
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
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>

              <div className="grid gap-6 px-5 pb-6 pt-2 sm:px-7 sm:pb-7 sm:pt-3 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.2fr)]">
                {/* Screenshot */}
                <div className="flex flex-col gap-3">
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                    <img
                      src={activeProject.image}
                      alt={activeProject.title}
                      className="h-64 w-full object-cover sm:h-72"
                    />
                  </div>
                  <p className="text-[11px] text-slate-500 sm:text-xs">
                    Screenshot preview. More views and details can be added here
                    if needed.
                  </p>
                </div>

                {/* Details & links */}
                <div className="flex flex-col justify-between gap-4">
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                        Project
                      </p>
                      <h3 className="mt-1 text-xl font-semibold">
                        {activeProject.title}
                      </h3>
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-700">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 7h16M4 12h10M4 17h7" />
                      </svg>
                      <span>{activeProject.stack}</span>
                    </div>

                    <p className="text-sm leading-relaxed text-slate-600">
                      {activeProject.description}
                    </p>
                  </div>

                  <div className="mt-2 flex flex-wrap gap-3 text-xs">
                    <a
                      href={activeProject.link}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex flex-1 items-center justify-center gap-1
                        rounded-full bg-[#B18072] px-4 py-2 text-[11px]
                        font-semibold text-[#024b3a] shadow-md transition
                        hover:bg-[#c9917e]
                      "
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 17 17 7" />
                        <path d="M9 7h8v8" />
                      </svg>
                      <span>View Live</span>
                    </a>

                    <a
                      href={activeProject.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex flex-1 items-center justify-center gap-1
                        rounded-full border border-slate-300 px-4 py-2
                        text-[11px] font-semibold text-slate-700 transition
                        hover:border-[#024b3a] hover:text-[#024b3a]
                      "
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 18c-4 1.5-4-2.5-6-3m12 5v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 17 2.5 5.07 5.07 0 0 0 16.91 2s-1.09-.35-3.58 1.35a12.38 12.38 0 0 0-7.33 0C3.51 2.15 2.42 2.5 2.42 2.5A5.44 5.44 0 0 0 1 6.62c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 6.5 17.13V21" />
                      </svg>
                      <span>View Repo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
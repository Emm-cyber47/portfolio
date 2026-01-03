// src/pages/About.jsx
import resume from "../assets/resume.pdf";

export default function About() {
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
                <span>Profile</span>
                <span className="h-1 w-1 rounded-full bg-slate-400" />
                <span>About me</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>Open to opportunities</span>
              </div>
            </div>

            {/* Content */}
            <div className="mt-8 space-y-6">
              {/* Heading + short tagline */}
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold sm:text-3xl">
                  Hi, I&apos;m <span className="text-[#B18072]">Emmanuel Ajide</span>
                </h2>
                <p className="text-sm font-medium text-slate-600 sm:text-base">
                  Full‑Stack Developer &amp; Mobile App Developer focused on
                  building thoughtful, scalable digital experiences.
                </p>
              </div>

              {/* Main story */}
              <div className="space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base">
                <p>
                  I&apos;m a Full‑Stack Developer and Mobile App Developer
                  who enjoys building real products that solve real problems. My
                  journey into tech started with curiosity and grew into a passion
                  for creating applications that are fast, intuitive, and scalable.
                </p>
                <p>
                  I&apos;ve worked on projects ranging from school management
                  systems to web dashboards and mobile apps, handling both frontend
                  and backend development. With skills in React, Laravel, Node.js,
                  and React Native, I enjoy taking ideas from concept to production.
                </p>
                <p>
                  Beyond coding, I have a strong eye for UI/UX design, which helps
                  me bridge the gap between functionality and great user experience.
                  I&apos;m always learning, always improving, and always building.
                </p>
              </div>

              {/* Quick highlights */}
              <div className="mt-2 grid gap-4 text-xs text-slate-600 sm:text-sm sm:grid-cols-3">
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#024b3a]/10 text-[#024b3a]">
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
                  <div>
                    <p className="font-semibold text-slate-800">
                      End‑to‑end builder
                    </p>
                    <p className="mt-1">
                      Comfortable owning products from idea, to architecture, to
                      deployment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#B18072]/15 text-[#B18072]">
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
                  <div>
                    <p className="font-semibold text-slate-800">
                      Web &amp; mobile focused
                    </p>
                    <p className="mt-1">
                      React for the web, React Native for mobile, with APIs powered
                      by Laravel / Node.js.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600">
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
                  <div>
                    <p className="font-semibold text-slate-800">
                      UX‑minded engineering
                    </p>
                    <p className="mt-1">
                      I care about how things feel, not just how they work —
                      blending UI/UX with solid engineering.
                    </p>
                  </div>
                </div>
              </div>

              {/* Call-to-action */}
              <div className="mt-6">
                <a
                  href={resume}
                  download
                  className="
                    inline-flex items-center gap-2 rounded-full bg-[#B18072]
                    px-6 py-2 text-sm font-semibold text-[#024b3a] shadow-md
                    transition hover:bg-[#c9917e]
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
                    <path d="M12 3v11" />
                    <path d="M8.5 10.5 12 14l3.5-3.5" />
                    <path d="M5 19h14" />
                  </svg>
                  <span>Get my resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
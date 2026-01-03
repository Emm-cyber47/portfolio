// src/pages/Skills.jsx
const skills = [
  {
    label: "HTML/CSS",
    level: "Expert",
    percent: 98,
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    label: "JavaScript",
    level: "Advanced",
    percent: 92,
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    label: "React (Web & Native)",
    level: "Advanced",
    percent: 90,
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    label: "PHP / Laravel",
    level: "Advanced",
    percent: 88,
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },
  {
    label: "Bootstrap / Tailwind",
    level: "Advanced",
    percent: 90,
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    label: "UI/UX (Figma)",
    level: "Advanced",
    percent: 94,
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
];

export default function Skills() {
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
                <span>Capabilities</span>
                <span className="h-1 w-1 rounded-full bg-slate-400" />
                <span>Skills</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>Always improving</span>
              </div>
            </div>

            {/* Intro content */}
            <div className="mt-8 space-y-4">
              <h2 className="text-2xl font-semibold sm:text-3xl">
                My Work <span className="text-[#B18072]">Skills</span>
              </h2>
              <p className="text-sm text-slate-600 sm:text-base">
                A blend of front‑end, back‑end, and product skills I use to ship
                fast, reliable, and user‑friendly experiences for web and mobile.
              </p>
            </div>

            {/* Skills grid */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((s) => (
                <div
                  key={s.label}
                  className="
                    flex flex-col items-center rounded-2xl border border-slate-200
                    bg-white/90 px-5 py-6 text-center text-sm shadow-sm
                    transition hover:-translate-y-1 hover:shadow-xl
                  "
                >
                  {/* Icon */}
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-black/5">
                    <img
                      src={s.icon}
                      alt={s.label}
                      className="h-9 w-9 object-contain"
                    />
                  </div>

                  {/* Text */}
                  <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                    {s.label}
                  </h3>
                  <p className="mt-1 text-[11px] uppercase tracking-wide text-slate-500">
                    {s.level}
                  </p>

                  {/* Progress bar with percentage */}
                  <div className="relative mt-5 w-full max-w-xs">
                    <div className="h-3 w-full rounded-full bg-slate-200" />
                    <div
                      className="absolute left-0 top-0 h-3 rounded-full bg-[#B18072]"
                      style={{ width: `${s.percent}%` }}
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-[11px] font-semibold text-white">
                      {s.percent}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
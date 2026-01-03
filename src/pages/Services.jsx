// src/pages/Services.jsx
export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Building responsive, high-performance web applications with React, Laravel, and modern frameworks.",
      iconBg: "bg-[#024b3a]",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M8 9.5 6.5 12 8 14.5M11 9.5 12.5 12 11 14.5" />
          <path d="M15 14h3" />
        </svg>
      ),
    },
    {
      title: "Mobile Development",
      description:
        "Creating native and cross-platform mobile apps with React Native and modern tooling.",
      iconBg: "bg-[#B18072]",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="7" y="3" width="10" height="18" rx="2" />
          <path d="M11 18h2" />
        </svg>
      ),
    },
    {
      title: "UI/UX Design",
      description:
        "Designing intuitive interfaces and seamless user experiences with Figma and design thinking.",
      iconBg: "bg-slate-800",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="8" height="7" rx="1.5" />
          <rect x="13" y="4" width="8" height="7" rx="1.5" />
          <rect x="3" y="13" width="8" height="7" rx="1.5" />
          <path d="M13 13h2a4 4 0 0 1 4 4v3" />
        </svg>
      ),
    },
    {
      title: "Full-Stack Solutions",
      description:
        "End-to-end development from backend APIs to frontend interfaces, fully integrated and optimized.",
      iconBg: "bg-slate-700",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="6" rx="2" />
          <rect x="3" y="14" width="18" height="6" rx="2" />
          <path d="M7 7h.01M7 17h.01" />
        </svg>
      ),
    },
    {
      title: "Technical Consulting",
      description:
        "Strategic guidance on architecture, technology selection, and best practices for your projects.",
      iconBg: "bg-indigo-600",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18h6" />
          <path d="M10 21h4" />
          <path d="M12 3a6 6 0 0 0-3 11.2V16h6v-1.8A6 6 0 0 0 12 3Z" />
        </svg>
      ),
    },
    {
      title: "Performance & Optimization",
      description:
        "Improving app speed, SEO, and overall performance with proven optimization techniques.",
      iconBg: "bg-emerald-600",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="7" />
          <path d="M12 12 16 8" />
          <path d="M8 12h.01" />
        </svg>
      ),
    },
  ];

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
                <span>What I do</span>
                <span className="h-1 w-1 rounded-full bg-slate-400" />
                <span>Services</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>Let&apos;s build something</span>
              </div>
            </div>

            {/* Intro content */}
            <div className="mt-8 space-y-4">
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Services <span className="text-[#B18072]">I provide</span>
              </h2>
              <p className="text-sm text-slate-600 sm:text-base">
                I offer a comprehensive range of services to help you design,
                develop, and launch digital products that actually move the needle
                — from idea validation to fully shipped applications.
              </p>
            </div>

            {/* Services grid */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="
                    group flex flex-col gap-3 rounded-2xl border border-slate-200
                    bg-white/90 p-5 text-sm shadow-sm transition
                    hover:-translate-y-1 hover:shadow-xl
                  "
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`
                        flex h-9 w-9 items-center justify-center rounded-2xl
                        text-xs font-semibold text-white shadow
                        ${service.iconBg}
                      `}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-xs leading-relaxed text-slate-600 sm:text-[13px]">
                    {service.description}
                  </p>

                  <span className="mt-1 text-[11px] font-medium text-[#B18072] opacity-0 transition-opacity group-hover:opacity-100">
                    Tailored to your product and business needs.
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
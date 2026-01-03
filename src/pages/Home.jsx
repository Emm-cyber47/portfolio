// src/pages/Home.jsx
import { Link } from "react-router-dom";
import picture from "../assets/picture.jpeg"; // adjust extension if needed

export default function Home() {
  const now = new Date();
  const dateString = now.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
  }); // e.g. "11 Dec"
  const timeString = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const navItems = [
    {
      label: "Home",
      to: "/",
      side: "left",
      iconBg: "bg-gradient-to-br from-[#2456ff] to-[#4f8dff]",
      icon: (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5 10v9h5v-5h4v5h5v-9" />
        </svg>
      ),
    },
    {
      label: "About",
      to: "/about",
      side: "left",
      iconBg: "bg-gradient-to-br from-[#a020f0] to-[#e044ff]",
      icon: (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="9" r="3" />
          <path d="M6 19c0-2.5 2.2-4.5 6-4.5s6 2 6 4.5" />
        </svg>
      ),
    },
    {
      label: "Services",
      to: "/services",
      side: "left",
      iconBg: "bg-slate-700",
      icon: (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="2.3" />
          <path d="M19.4 12.9a7.3 7.3 0 0 0 0-1.8l-1.6-.4a4.4 4.4 0 0 0-.7-1.2l.8-1.4a7 7 0 0 0-1.3-1.3l-1.4.8c-.4-.3-.8-.5-1.2-.7l-.4-1.6a7.3 7.3 0 0 0-1.8 0l-.4 1.6a4.4 4.4 0 0 0-1.2.7l-1.4-.8a7 7 0 0 0-1.3 1.3l.8 1.4c-.3.4-.5.8-.7 1.2l-1.6.4a7.3 7.3 0 0 0 0 1.8l1.6.4c.2.4.4.9.7 1.2l-.8 1.4a7 7 0 0 0 1.3 1.3l1.4-.8c.4.3.8.5 1.2.7l.4 1.6c.6.1 1.2.1 1.8 0l.4-1.6c.4-.2.9-.4 1.2-.7l1.4.8a7 7 0 0 0 1.3-1.3l-.8-1.4c.3-.4.5-.8.7-1.2z" />
        </svg>
      ),
    },
    {
      label: "Skills",
      to: "/skills",
      side: "left",
      iconBg: "bg-slate-900",
      icon: (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3.5 13.4 7l3.6 1.4L13.4 9.8 12 13.3 10.6 9.8 7 8.4 10.6 7z" />
          <path d="M6 14.5 6.7 16l1.8.7L6.7 17.4 6 19l-.7-1.6L3.5 16.7 5.3 16z" />
          <path d="M17 14.5 17.7 16l1.8.7-1.8.7L17 19l-.7-1.6-1.8-.7 1.8-.7z" />
        </svg>
      ),
    },
    {
      label: "Projects",
      to: "/projects",
      side: "right",
      iconBg: "bg-slate-200 text-slate-900",
      icon: (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 7.5A1.5 1.5 0 0 1 4.5 6H9l2 2h8.5A1.5 1.5 0 0 1 21 9.5v7A1.5 1.5 0 0 1 19.5 18h-15A1.5 1.5 0 0 1 3 16.5z" />
        </svg>
      ),
    },
    {
      label: "Contact",
      to: "/contact",
      side: "right",
      iconBg: "bg-[#B18072]",
      icon: (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
          <path d="m5 8 7 4 7-4" />
        </svg>
      ),
    },
  ];

  const leftItems = navItems.filter((n) => n.side === "left");
  const rightItems = navItems.filter((n) => n.side === "right");

  return (
    <section
      className="
        relative flex min-h-screen w-full items-center justify-center
        overflow-hidden bg-[#024b3a] px-4 py-10 text-white
        md:px-10 lg:px-16
      "
    >
      {/* Background circles */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full border border-white/5" />
      <div className="pointer-events-none absolute -right-52 -bottom-52 h-[28rem] w-[28rem] rounded-full border border-white/5" />

      {/* Main card */}
      <div
        className="
          relative z-10 w-full max-w-5xl rounded-[2.5rem]
          bg-gradient-to-r from-slate-50/95 to-slate-200/95
          text-slate-900 shadow-2xl px-6 py-6 sm:px-10 sm:py-8
        "
      >
        {/* Top bar: greeting + date / time + weather */}
        <div className="flex items-center justify-between text-[11px] font-medium text-slate-500 sm:text-xs">
          <div className="flex items-center gap-2">
            <span>Good morning</span>
            <span className="h-1 w-1 rounded-full bg-slate-400" />
            <span>{dateString}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 rounded-full bg-slate-500" />
            <span>{timeString}</span>
            <span className="h-1 w-1 rounded-full bg-slate-400" />
            <span>22°</span>
          </div>
        </div>

        {/* Content row similar to the design */}
        <div className="mt-8 grid items-center gap-6 md:grid-cols-[minmax(0,1.15fr)_auto_minmax(0,1.15fr)]">
          {/* Left nav column */}
          <div className="flex flex-col gap-4">
            {leftItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="
                  flex items-center gap-3 rounded-2xl bg-white/90 px-3 py-2
                  text-xs font-medium text-slate-800 shadow-md
                  transition hover:-translate-y-0.5 hover:shadow-lg
                "
              >
                <div
                  className={`
                    flex h-9 w-9 items-center justify-center rounded-2xl
                    text-xs font-semibold text-white shadow
                    ${item.iconBg}
                  `}
                >
                  {item.icon}
                </div>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Center circle + photo */}
          <div className="relative flex justify-center">
            <div className="relative h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80">
              {/* Circular backdrop */}
              <div className="absolute inset-0 rounded-full bg-[#B18072]" />

              {/* Photo perfectly clipped inside the circle */}
              <div className="absolute inset-[10%] overflow-hidden rounded-full border-4 border-[#024b3a]">
                <img
                  src={picture}
                  alt="Portrait"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Right side: greeting + tagline + right nav column */}
          <div className="flex flex-col items-stretch gap-6">
            <div className="text-center md:text-right">
              <p className="text-2xl font-semibold sm:text-3xl">
                Hi, I&apos;m Emmanuel Ajide
              </p>
              <p className="mt-2 text-sm font-medium text-[#B18072]">
                Web Dev • Mobile App
              </p>
              <p className="mt-3 text-xs text-slate-500 sm:text-sm">
                I build scalable products, move fast, and take ownership from
                idea to launch.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {rightItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="
                    flex items-center gap-3 rounded-2xl bg-white/90 px-3 py-2
                    text-xs font-medium text-slate-800 shadow-md
                    transition hover:-translate-y-0.5 hover:shadow-lg
                    flex-row-reverse text-right
                  "
                >
                  <div
                    className={`
                      flex h-9 w-9 items-center justify-center rounded-2xl
                      text-xs font-semibold text-white shadow
                      ${item.iconBg}
                    `}
                  >
                    {item.icon}
                  </div>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// export default function Footer() {
//   return (
//     <footer className="border-t border-neutral-200/50 dark:border-neutral-800">
//       <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-neutral-500">
//         © {new Date().getFullYear()} Emmanuel Ajide M. | All Rights Reserved.
//       </div>
//     </footer>
//   );
// }


// src/components/Footer.jsx (or wherever your Footer lives)
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200/50 dark:border-neutral-800">
      <div
        className="
          mx-auto flex max-w-6xl flex-col items-center justify-between
          gap-4 px-4 py-6 text-sm text-neutral-600 dark:text-neutral-400
          sm:flex-row
        "
      >
        {/* Left: text */}
        <p>
          © {year} Emmanuel Ajide M. | All Rights Reserved.
        </p>

        {/* Right: social icons */}
        <div className="flex items-center gap-3">
          <span className="hidden text-xs uppercase tracking-[0.18em] text-neutral-400 sm:inline">
            Connect with me
          </span>

          {/* WhatsApp */}
          <a
            href="#"
            aria-label="WhatsApp"
            className="
              flex h-9 w-9 items-center justify-center rounded-full
              border border-neutral-200 bg-neutral-50 text-neutral-600
              transition hover:border-[#B18072] hover:bg-[#B18072]/10
              hover:text-[#B18072] dark:border-neutral-700 dark:bg-neutral-900
              dark:text-neutral-300
            "
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

          {/* LinkedIn */}
          <a
            href="#"
            aria-label="LinkedIn"
            className="
              flex h-9 w-9 items-center justify-center rounded-full
              border border-neutral-200 bg-neutral-50 text-neutral-600
              transition hover:border-[#B18072] hover:bg-[#B18072]/10
              hover:text-[#B18072] dark:border-neutral-700 dark:bg-neutral-900
              dark:text-neutral-300
            "
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
            className="
              flex h-9 w-9 items-center justify-center rounded-full
              border border-neutral-200 bg-neutral-50 text-neutral-600
              transition hover:border-[#B18072] hover:bg-[#B18072]/10
              hover:text-[#B18072] dark:border-neutral-700 dark:bg-neutral-900
              dark:text-neutral-300
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
              <path d="M5 5l14 14" />
              <path d="M19 5 9.5 14.5 5 19" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="#"
            aria-label="Facebook"
            className="
              flex h-9 w-9 items-center justify-center rounded-full
              border border-neutral-200 bg-neutral-50 text-neutral-600
              transition hover:border-[#B18072] hover:bg-[#B18072]/10
              hover:text-[#B18072] dark:border-neutral-700 dark:bg-neutral-900
              dark:text-neutral-300
            "
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
              <rect x="4" y="4" width="16" height="16" rx="3" ry="3" />
              <path d="M13 20v-6h2.2L16 11h-3V9.5A1.5 1.5 0 0 1 14.5 8H16V6h-2.5A3.5 3.5 0 0 0 10 9.5V11H8v3h2v6z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
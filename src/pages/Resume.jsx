export default function Resume() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-semibold">Resume</h2>
      <p className="mt-2 text-neutral-600 dark:text-neutral-300">
        Download or view my latest resume.
      </p>

      <div className="mt-6 flex gap-3">
        <a
          href="../assests/resume.pdf"
          download
          className="px-4 py-2 rounded-md bg-brand text-white hover:bg-brand-dark transition"
        >
          Download PDF
        </a>
        <a
          href="../assests/resume.pdf"
          target="_blank"
          className="px-4 py-2 rounded-md border hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
        >
          View in new tab
        </a>
      </div>

      <div className="mt-8 rounded-xl border overflow-hidden">
        <iframe src="../assests/resume.pdf" className="w-full h-[700px]" title="Resume" />
      </div>
    </section>
  );
}

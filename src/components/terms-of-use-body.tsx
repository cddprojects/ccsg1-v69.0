import Link from "next/link";
import {
  termsOfUseIntro,
  termsOfUseMeta,
  termsOfUseSections,
} from "@/lib/terms-of-use-content";

function renderText(text: string, email?: string) {
  if (!email) {
    return <p className="text-base leading-relaxed text-slate-600">{text}</p>;
  }

  const parts = text.split(email);
  return (
    <p className="text-base leading-relaxed text-slate-600">
      {parts[0]}
      <span className="font-medium text-slate-800">{email}</span>
      {parts[1] ?? ""}
    </p>
  );
}

export function TermsOfUseBody() {
  return (
    <div className="lg:grid lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-14 xl:gap-16">
      <aside className="mb-10 lg:sticky lg:top-28 lg:mb-0 lg:self-start">
        <nav
          aria-label="Table of contents"
          className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            On this page
          </p>
          <ol className="mt-4 space-y-2 text-sm">
            {termsOfUseSections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="block rounded-lg py-1.5 pl-2 text-slate-600 transition-colors hover:bg-brand-50 hover:text-brand-800"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </aside>

      <article className="min-w-0">
        <header className="border-b border-slate-200/80 pb-8">
          <h1 className="font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">
            {termsOfUseMeta.title}
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            Last updated: {termsOfUseMeta.lastUpdated}
          </p>
          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
            {termsOfUseIntro}
          </p>
        </header>

        <div className="divide-y divide-slate-200/80">
          {termsOfUseSections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-28 py-8 sm:py-10"
            >
              <h2 className="font-serif text-xl font-semibold text-slate-900 sm:text-2xl">
                {section.title}
              </h2>
              <div className="mt-4">
                {renderText(
                  section.text,
                  "email" in section ? section.email : undefined,
                )}
              </div>
            </section>
          ))}
        </div>

        <div className="border-t border-slate-200/80 pt-8">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-brand-600 px-6 py-3 text-sm font-medium text-white shadow-md shadow-brand-600/20 transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Back to Homepage
          </Link>
        </div>
      </article>
    </div>
  );
}

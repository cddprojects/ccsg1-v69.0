import Link from "next/link";
import {
  privacyPolicyIntro,
  privacyPolicyMeta,
  privacyPolicySections,
} from "@/lib/privacy-policy-content";

function renderParagraph(text: string, email?: string) {
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

export function PrivacyPolicyBody() {
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
            {privacyPolicySections.map((section) => (
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
            {privacyPolicyMeta.title}
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            Last updated: {privacyPolicyMeta.lastUpdated} · {privacyPolicyMeta.brand}
          </p>
          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
            {privacyPolicyIntro}
          </p>
        </header>

        <div className="divide-y divide-slate-200/80">
          {privacyPolicySections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-28 py-8 sm:py-10"
            >
              <h2 className="font-serif text-xl font-semibold text-slate-900 sm:text-2xl">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4">
                {section.blocks.map((block, index) => {
                  if (block.type === "paragraph") {
                    return (
                      <div key={index}>
                        {renderParagraph(block.text, "email" in block ? block.email : undefined)}
                      </div>
                    );
                  }
                  if (block.type === "list") {
                    return (
                      <ul
                        key={index}
                        className="list-disc space-y-2 pl-5 text-base leading-relaxed text-slate-600"
                      >
                        {block.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    );
                  }
                  if (block.type === "contact") {
                    return (
                      <div
                        key={index}
                        className="rounded-xl border border-slate-200/80 bg-slate-50/80 p-4 text-sm text-slate-600"
                      >
                        {block.lines.map((line) => (
                          <p key={line.label} className="mt-2 first:mt-0">
                            <span className="font-medium text-slate-800">{line.label}: </span>
                            {line.value}
                          </p>
                        ))}
                      </div>
                    );
                  }
                  return null;
                })}
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

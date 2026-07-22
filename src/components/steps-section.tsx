"use client";

import { ArrowRight, ClipboardCheck, Send, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { stepsCards, siteImages } from "@/lib/content";
import { MotionItem, MotionSection, MotionStagger } from "@/components/motion-section";
import { SectionHeading, SectionShell } from "@/components/ui/section-shell";
import { SectionImage } from "@/components/ui/section-image";

const stepMeta: Record<string, { icon: LucideIcon; label: string }> = {
  "1": { icon: Send, label: "Step 1" },
  "2": { icon: ClipboardCheck, label: "Step 2" },
  "3": { icon: ArrowRight, label: "Step 3" },
};

export function StepsSection() {
  return (
    <SectionShell id="steps" variant="muted">
      <MotionSection>
        <SectionHeading
          title="How the application process works"
          description="Unitel Match provides an application pathway for current remote-friendly role categories. Company-specific screening, role details, and hiring decisions remain with the relevant hiring company."
        />

        <SectionImage
          src={siteImages.steps}
          alt="Singapore applicants reviewing remote work opportunities on laptops"
          className="mt-8 aspect-[16/9] w-full rounded-2xl shadow-md ring-1 ring-slate-900/5 sm:mt-10 sm:rounded-3xl lg:aspect-[21/9]"
          sizes="100vw"
        />

        <MotionStagger className="mt-10 sm:mt-12">
          <div
            role="list"
            className="flex flex-col gap-2 lg:grid lg:grid-cols-3 lg:gap-6"
          >
            {stepsCards.map((card, index) => {
              const meta = stepMeta[card.step];
              const Icon = meta.icon;
              const isLast = index === stepsCards.length - 1;

              return (
                <MotionItem
                  key={card.step}
                  className="relative flex flex-col lg:min-h-[280px]"
                >
                  <article
                    role="listitem"
                    className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm ring-1 ring-slate-900/[0.04] transition-shadow hover:shadow-md sm:rounded-3xl lg:hover:border-brand-200/80"
                  >
                    <div className="h-1.5 w-full shrink-0 bg-gradient-to-r from-brand-600 via-brand-500 to-brand-400" />

                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <div className="flex items-center justify-between gap-3">
                        <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
                          {meta.label}
                        </span>
                        <span
                          className="font-serif text-2xl font-semibold leading-none text-brand-600/20 sm:text-3xl"
                          aria-hidden
                        >
                          {card.step}
                        </span>
                      </div>

                      <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-md shadow-brand-600/20">
                        <Icon className="h-5 w-5" strokeWidth={2} />
                      </div>

                      <h3 className="mt-4 font-serif text-xl font-semibold text-slate-900">
                        {card.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 sm:text-[0.9375rem]">
                        {card.description}
                      </p>
                    </div>
                  </article>

                  {index < stepsCards.length - 1 ? (
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-3 top-[42%] z-10 hidden -translate-y-1/2 lg:flex"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-200 bg-white text-brand-600 shadow-sm">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  ) : null}

                  {!isLast ? (
                    <div
                      aria-hidden
                      className="mx-auto my-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-200/80 bg-white text-brand-600 shadow-sm lg:hidden"
                    >
                      <ArrowRight className="h-4 w-4 rotate-90" />
                    </div>
                  ) : null}
                </MotionItem>
              );
            })}
          </div>
        </MotionStagger>

        <div className="mt-10 flex flex-col items-center gap-2 text-center sm:mt-12">
          <p className="text-sm text-slate-500">
            Submit your application at any time when you are ready.
          </p>
          <Link
            href="#hero-form"
            className="text-sm font-medium text-brand-700 underline underline-offset-4 hover:text-brand-800"
            onClick={(event) => {
              const el = document.getElementById("hero-form");
              if (!el) return;
              event.preventDefault();
              el.scrollIntoView({ behavior: "smooth", block: "start" });
              if (window.location.hash !== "#hero-form") {
                history.pushState(null, "", "#hero-form");
              }
            }}
          >
            Apply Now
          </Link>
        </div>
      </MotionSection>
    </SectionShell>
  );
}

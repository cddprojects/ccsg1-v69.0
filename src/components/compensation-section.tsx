"use client";

import { compensationBullets } from "@/lib/content";
import { MotionSection } from "@/components/motion-section";
import { SectionShell } from "@/components/ui/section-shell";

export function CompensationSection() {
  return (
    <SectionShell variant="muted">
      <MotionSection className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
        <header className="lg:w-[42%] lg:shrink-0">
          <h2 className="font-serif text-[1.75rem] font-semibold text-slate-900 sm:text-4xl">
            How compensation is usually confirmed
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Compensation may differ depending on the company, role scope, schedule,
            skills, experience, and work arrangement. Pay may be hourly,
            task-based, shift-based, or project-based.
          </p>
        </header>

        <aside className="w-full rounded-2xl border border-slate-200/80 border-l-4 border-l-brand-600 bg-white p-5 sm:p-8 lg:flex-1">
          <h3 className="font-serif text-xl font-semibold text-slate-900">
            When pay details are provided
          </h3>
          <ul className="mt-5 space-y-4">
            {compensationBullets.map((bullet) => (
              <li
                key={bullet}
                className="flex gap-3 text-sm leading-relaxed text-slate-600 sm:text-base"
              >
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </aside>
      </MotionSection>
    </SectionShell>
  );
}

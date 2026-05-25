"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import { eligibilityItems } from "@/lib/content";
import { MotionSection } from "@/components/motion-section";
import { SectionHeading, SectionShell } from "@/components/ui/section-shell";

export function EligibilitySection() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <SectionShell id="eligibility">
      <MotionSection>
        <SectionHeading
          title="Who can take part"
          description="Before applying, review these general points. Individual roles may have additional criteria set by hiring companies."
        />

        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200/80 bg-white sm:mt-12 sm:rounded-3xl">
          {eligibilityItems.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `${baseId}-panel-${index}`;
            const buttonId = `${baseId}-button-${index}`;
            const isFirst = index === 0;

            return (
              <div
                key={item.title}
                className={isFirst ? "" : "border-t border-slate-200/80"}
              >
                <button
                  id={buttonId}
                  type="button"
                  className="flex w-full min-h-[3.25rem] items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-slate-50/80 sm:min-h-14 sm:px-8 sm:py-5"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(index)}
                >
                  <span className="pr-2 font-serif text-lg font-semibold text-slate-900">
                    {item.title}
                  </span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200/80 bg-white text-brand-700 transition-transform duration-200 ${
                      isOpen ? "rotate-180 border-brand-200 bg-brand-50" : ""
                    }`}
                    aria-hidden
                  >
                    <ChevronDown className="h-5 w-5" />
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600 sm:px-8 sm:pb-6 sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </MotionSection>
    </SectionShell>
  );
}

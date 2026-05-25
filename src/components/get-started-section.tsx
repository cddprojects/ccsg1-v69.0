"use client";

import { getStartedCards, siteImages } from "@/lib/content";
import { MotionItem, MotionSection, MotionStagger } from "@/components/motion-section";
import { SectionHeading, SectionShell } from "@/components/ui/section-shell";
import { SectionImage } from "@/components/ui/section-image";

export function GetStartedSection() {
  return (
    <SectionShell>
      <MotionSection>
        <SectionImage
          src={siteImages.getStarted}
          alt="Clean home workspace with laptop ready for remote work"
          className="mb-8 aspect-[16/7] w-full rounded-2xl shadow-md sm:mb-10 sm:rounded-3xl"
          sizes="100vw"
        />
        <SectionHeading
          title="Before you submit your profile"
          description="These are practical basics that often matter for remote-friendly work. Individual opportunities may still include additional company requirements."
        />

        <MotionStagger className="mt-8 space-y-3 sm:mt-10">
          {getStartedCards.map((card) => (
            <MotionItem key={card.step}>
              <article className="flex gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 sm:gap-5 sm:p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-600 font-serif text-base font-semibold text-white">
                  {card.step}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-serif text-lg font-semibold text-slate-900">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    {card.description}
                  </p>
                </div>
              </article>
            </MotionItem>
          ))}
        </MotionStagger>
      </MotionSection>
    </SectionShell>
  );
}

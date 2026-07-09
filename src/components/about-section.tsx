"use client";

import { aboutCards, siteImages } from "@/lib/content";
import { MotionItem, MotionSection, MotionStagger } from "@/components/motion-section";
import { SectionHeading, SectionShell } from "@/components/ui/section-shell";
import { SectionImage } from "@/components/ui/section-image";

export function AboutSection() {
  return (
    <SectionShell id="about">
      <MotionSection>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
          <div className="lg:w-[45%] lg:shrink-0">
            <SectionHeading
              title="Built for a simpler remote-job application journey"
              description="Browse Flex keeps the application journey organized, practical, and transparent so applicants can understand the role categories before a hiring company begins its own review."
            />
            <SectionImage
              src={siteImages.about}
              alt="Team collaborating in a modern office"
              className="mt-8 aspect-[16/10] w-full rounded-2xl shadow-md sm:rounded-3xl"
              sizes="(max-width: 1024px) 100vw, 420px"
            />
          </div>

          <MotionStagger className="flex flex-1 flex-col divide-y divide-slate-200/80 overflow-hidden rounded-2xl border border-slate-200/80 bg-white sm:rounded-3xl">
            {aboutCards.map((card) => (
              <MotionItem key={card.id}>
                <article className="flex flex-col gap-3 p-5 sm:flex-row sm:items-start sm:gap-5 sm:p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-600 font-serif text-base font-semibold text-white">
                    {card.id}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif text-lg font-semibold text-slate-900 sm:text-xl">
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
        </div>
      </MotionSection>
    </SectionShell>
  );
}

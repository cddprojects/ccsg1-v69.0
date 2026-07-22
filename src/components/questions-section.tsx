"use client";

import { MotionSection } from "@/components/motion-section";
import { brandSupportEmail } from "@/lib/brand";
import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/ui/section-shell";

export function QuestionsSection() {
  return (
    <SectionShell>
      <MotionSection>
        <div className="flex flex-col gap-6 rounded-2xl border border-brand-200/40 bg-brand-50/50 px-5 py-8 sm:rounded-3xl sm:px-10 sm:py-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <h2 className="font-serif text-[1.75rem] font-semibold text-slate-900 sm:text-3xl">
              Questions before you apply?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              For general questions about how Unitel Match works, contact support for
              platform-related questions. Hiring decisions remain with third-party
              hiring companies.
            </p>
          </div>
          <Button
            href={`mailto:${brandSupportEmail}`}
            variant="outline"
            className="w-full shrink-0 sm:w-auto"
          >
            Ask a Question
          </Button>
        </div>
      </MotionSection>
    </SectionShell>
  );
}

"use client";

import { BookOpen, Eye, MessageCircle, Shield } from "lucide-react";
import { confidenceItems } from "@/lib/content";
import { MotionItem, MotionSection, MotionStagger } from "@/components/motion-section";
import { SectionHeading, SectionShell } from "@/components/ui/section-shell";

const icons = [BookOpen, Shield, Eye, MessageCircle];

export function ConfidenceSection() {
  return (
    <SectionShell>
      <MotionSection>
        <div className="lg:grid lg:grid-cols-5 lg:gap-12">
          <SectionHeading
            title="Know what to check before moving forward"
            description="Remote roles can differ in schedule, tools, verification, and pay terms. Matching Remote keeps the guidance practical so you can review each opportunity carefully."
            className="lg:col-span-2"
          />

          <MotionStagger className="mt-8 flex flex-col lg:col-span-3 lg:mt-0">
            {confidenceItems.map((item, index) => {
              const Icon = icons[index];
              return (
                <MotionItem key={item.title}>
                  <article className="flex gap-4 border-b border-slate-200/80 py-5 first:pt-0 last:border-b-0 sm:py-6">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-serif text-lg font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </MotionItem>
              );
            })}
          </MotionStagger>
        </div>
      </MotionSection>
    </SectionShell>
  );
}

"use client";

import { Clock, MapPin, Wallet } from "lucide-react";
import { roleCards } from "@/lib/content";
import { MotionItem, MotionSection, MotionStagger } from "@/components/motion-section";
import { Button } from "@/components/ui/button";
import { SectionHeading, SectionShell } from "@/components/ui/section-shell";

export function RolesSection() {
  return (
    <SectionShell id="roles" variant="muted">
      <MotionSection>
        <SectionHeading
          title="Current remote-friendly role categories"
          description="These role categories are currently accepting applications from Singapore-based applicants. Final role availability, pay, schedule, screening, and hiring decisions are confirmed by the relevant hiring company."
        />

        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-brand-200/50 bg-brand-600 px-5 py-6 text-white sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-8">
          <p className="text-sm leading-relaxed text-brand-50 sm:text-base">
            Choose a role category that fits your background and submit your application online.
          </p>
          <Button
            href="#hero-form"
            variant="outline"
            className="w-full shrink-0 border-white/40 bg-white text-brand-700 sm:w-auto"
          >
            Apply Now
          </Button>
        </div>

        <MotionStagger className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2">
          {roleCards.map((role) => (
            <MotionItem key={role.title} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm sm:rounded-3xl">
                <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    {"activeBadge" in role && role.activeBadge && (
                      <span className="rounded-md bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700 ring-1 ring-green-200">
                        {role.activeBadge}
                      </span>
                    )}
                    <span className="rounded-md bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700">
                      {role.profileFit}
                    </span>
                    {role.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-3 font-serif text-lg font-semibold text-slate-900 sm:text-xl">
                    {role.title}
                  </h3>
                  <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
                    <li className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {role.place}
                    </li>
                    <li className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {role.hours}
                    </li>
                    <li className="inline-flex items-center gap-1">
                      <Wallet className="h-3.5 w-3.5" />
                      {role.pay}
                    </li>
                  </ul>
                  <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-slate-600 sm:line-clamp-none sm:text-base">
                    {role.description}
                  </p>
                  <div className="mt-3 rounded-xl bg-slate-50 px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Supporting note
                    </p>
                    <p className="mt-1 line-clamp-2 text-sm text-slate-600 sm:line-clamp-none">
                      {role.supportingNote}
                    </p>
                  </div>
                  <Button href="#hero-form" className="mt-auto w-full min-h-12 pt-4 sm:pt-5">
                    Apply for this role
                  </Button>
                </div>
              </article>
            </MotionItem>
          ))}
        </MotionStagger>
      </MotionSection>
    </SectionShell>
  );
}

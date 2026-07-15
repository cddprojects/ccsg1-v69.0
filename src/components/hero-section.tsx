"use client";

import { useRouter } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import {
  consentText,
  formSectionDescription,
  heroBullets,
  heroStats,
  jobPositions,
  siteImages,
} from "@/lib/content";
import { brandTagline } from "@/lib/brand";
import { MotionSection } from "@/components/motion-section";
import { Button } from "@/components/ui/button";
import { ReadMore } from "@/components/ui/read-more";
import { SectionImage } from "@/components/ui/section-image";

export function HeroSection() {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
      <div className="mesh-gradient pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:gap-y-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
            <div className="relative w-full shrink-0 overflow-hidden rounded-2xl shadow-lg sm:rounded-3xl lg:w-[40%] lg:max-w-md lg:self-stretch lg:min-h-0">
              <SectionImage
                src={siteImages.hero}
                alt="Person working remotely on a laptop at home"
                priority
                objectPosition="58% 42%"
                className="aspect-[16/10] h-full min-h-full w-full lg:aspect-auto"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            <div className="flex min-w-0 flex-1 flex-col">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                {brandTagline}
              </p>
              <h1 className="mt-4 font-serif text-[1.875rem] font-semibold text-slate-900 sm:text-4xl lg:text-[2.75rem]">
                Apply for remote-friendly part-time roles in Singapore
              </h1>
              <ReadMore
                className="mt-5"
                text="Browse Flex helps Singapore-based applicants apply for active remote-friendly role categories shared by hiring partners. Current role categories include remote admin support, customer support, merchant support, e-commerce store operations, online sales support, and AI content support. Role availability, responsibilities, pay, screening, and final hiring decisions are confirmed by the relevant hiring company."
                collapsedLines={4}
                fullFrom="lg"
              />

              <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {heroBullets.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white/90 px-3 py-2.5 text-sm text-slate-700"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row">
                <Button href="#hero-form" className="w-full sm:w-auto">
                  Apply Now
                </Button>
                <Button href="#roles" variant="outline" className="w-full sm:w-auto">
                  View Current Roles
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
            <div className="hidden shrink-0 lg:block lg:w-[40%] lg:max-w-md" aria-hidden />
            <dl className="grid min-w-0 flex-1 grid-cols-3 gap-3 border-t border-slate-200/80 pt-6 lg:mt-0 lg:pt-8">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-serif text-xl font-semibold text-brand-700 sm:text-2xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-0.5 text-xs leading-snug text-slate-600 sm:text-sm">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <MotionSection delay={0.08} id="hero-form" className="mt-12 lg:mt-14">
          <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-lg sm:rounded-3xl">
            <div className="border-b border-slate-100 bg-slate-50/90 px-5 py-5 sm:px-8">
              <h2 className="font-serif text-xl font-semibold text-slate-900 sm:text-2xl">
                Apply for remote-friendly roles
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {formSectionDescription}
              </p>
            </div>

            <form
              className="space-y-4 px-5 py-6 sm:px-8 sm:py-8"
              onSubmit={(e) => {
                e.preventDefault();
                router.push("/thank-you");
              }}
            >
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full min-h-12 rounded-xl border border-slate-200 bg-white px-4 py-3 text-base outline-none ring-brand-500/30 focus:ring-2 sm:text-sm"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full min-h-12 rounded-xl border border-slate-200 bg-white px-4 py-3 text-base outline-none ring-brand-500/30 focus:ring-2 sm:text-sm"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  WhatsApp Number
                </label>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <select className="min-h-12 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base sm:w-28 sm:text-sm">
                    <option>+65</option>
                    <option>+60</option>
                    <option>+62</option>
                    <option>+63</option>
                  </select>
                  <input
                    type="tel"
                    className="min-h-12 w-full flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-base outline-none ring-brand-500/30 focus:ring-2 sm:text-sm"
                    placeholder="Phone number"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Job Position Preferred
                </label>
                <select className="w-full min-h-12 rounded-xl border border-slate-200 bg-white px-4 py-3 text-base sm:text-sm">
                  {jobPositions.map((role) => (
                    <option key={role}>{role}</option>
                  ))}
                </select>
              </div>

              <label className="flex items-start gap-3 text-sm leading-relaxed text-slate-600">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300"
                />
                {consentText}
              </label>

              <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 px-4 py-5 text-center text-xs text-slate-500">
                reCAPTCHA placeholder
              </div>

              <Button type="submit" className="w-full min-h-12 text-base">
                Submit Application
              </Button>
            </form>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}

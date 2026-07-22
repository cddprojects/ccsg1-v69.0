"use client";

import { useRouter } from "next/navigation";
import {
  consentText,
  formSectionDescription,
  jobPositions,
} from "@/lib/content";
import { MotionSection } from "@/components/motion-section";
import { Button } from "@/components/ui/button";

export function RegistrationSection() {
  const router = useRouter();

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionSection delay={0.08} id="hero-form">
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

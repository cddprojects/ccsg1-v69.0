"use client";

import Script from "next/script";
import { formSectionDescription } from "@/lib/content";
import { MotionSection } from "@/components/motion-section";

export function RegistrationSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionSection delay={0.08}>
          <div
            id="hero-form"
            className="scroll-mt-20 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-lg sm:scroll-mt-24 sm:rounded-3xl"
          >            <div className="border-b border-slate-100 bg-slate-50/90 px-5 py-5 sm:px-8">
              <h2 className="font-serif text-xl font-semibold text-slate-900 sm:text-2xl">
                Apply for remote-friendly roles
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {formSectionDescription}
              </p>
            </div>

            <div className="px-5 py-6 sm:px-8 sm:py-8">
              <div
                data-cddform="cc-sg10-singapore10"
                data-origin="www.unitelmatch.com"
              ></div>
            </div>
          </div>
        </MotionSection>
      </div>

      <Script
        src="https://staging.chatfromforms.com/form-embed.js?v=0.1"
        strategy="afterInteractive"
      />
    </section>
  );
}

"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";
import { formSectionDescription } from "@/lib/content";
import { MotionSection } from "@/components/motion-section";

export function RegistrationSection() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;
    // Embed posts setIFrameHeight to protocol://data-origin — must match this page
    el.setAttribute("data-origin", window.location.host);
  }, []);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionSection delay={0.08}>
          <div
            id="hero-form"
            className="scroll-mt-20 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-lg sm:scroll-mt-24 sm:rounded-3xl"
          >
            <div className="border-b border-slate-100 bg-slate-50/90 px-5 py-5 sm:px-8">
              <h2 className="font-serif text-xl font-semibold text-slate-900 sm:text-2xl">
                Apply for remote-friendly roles
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {formSectionDescription}
              </p>
            </div>

            <div className="px-0 py-1 sm:px-3 sm:py-3">
              <div
                ref={mountRef}
                id="cdd-form-mount"
                data-cddform="cc-sg10-singapore10"
                data-origin="www.unitelmatch.com"
                className="cdd-form-embed w-full min-h-[200px]"
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

import { CheckCircle2 } from "lucide-react";
import {
  heroBullets,
  heroStats,
  siteImages,
} from "@/lib/content";
import { brandTagline } from "@/lib/brand";
import { Button } from "@/components/ui/button";
import { SectionImage } from "@/components/ui/section-image";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
      <div className="mesh-gradient pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
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
            <h1 className="mt-4 font-serif text-[1.875rem] font-semibold leading-[42px] text-slate-900 sm:text-4xl sm:leading-[48px] lg:text-[2.75rem] lg:leading-[56px]">
              Apply for remote-friendly part-time roles in Singapore
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Explore opportunities across customer support, administration, digital support and more. Submit your details to be considered for suitable roles.
            </p>

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
              <Button href="#roles" variant="outline" className="w-full sm:w-auto">
                View Role Categories
              </Button>
              <Button href="#hero-form" className="w-full sm:w-auto">
                Apply Now
              </Button>
            </div>

            <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-slate-200/80 pt-6">
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
      </div>
    </section>
  );
}

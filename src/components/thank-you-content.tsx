import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brandSupportEmail, brandTagline } from "@/lib/brand";

export function ThankYouContent() {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-700">
        <CheckCircle2 className="h-8 w-8" strokeWidth={2} />
      </div>

      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
        {brandTagline}
      </p>
      <h1 className="mt-4 font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">
        Thank you for your application
      </h1>
      <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
        Your application has been received. Browse Flex may review your submitted
        details against current remote-friendly role categories shared by hiring
        partners.
      </p>

      <div className="mt-10 rounded-2xl border border-slate-200/80 bg-white p-6 text-left shadow-sm sm:p-8">
        <h2 className="font-serif text-lg font-semibold text-slate-900 sm:text-xl">
          What may happen next
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
          If your application appears relevant to a suitable role category, you may be
          contacted about screening, role details, work arrangements, verification, or
          next steps. Company-specific hiring decisions remain with the relevant hiring
          company.
        </p>
        <div className="mt-4 rounded-xl bg-slate-50 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Current role categories
          </p>
          <p className="mt-1 text-sm text-slate-600">
            Current role categories may include remote admin support, customer support,
            online merchant support, e-commerce store operations, online sales support, and AI
            content support.
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-amber-200/60 bg-amber-50/60 px-5 py-4 text-sm leading-relaxed text-slate-600">
        <span className="font-semibold text-slate-800">Important: </span>
        Submitting an application does not guarantee an interview, job offer, placement,
        or earnings. Please review any opportunity details carefully before accepting a
        role or sharing additional sensitive information.
      </div>

      <p className="mt-8 text-sm leading-relaxed text-slate-600">
        Questions about your submission?{" "}
        <span className="font-medium text-slate-800">{brandSupportEmail}</span>
      </p>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Button href="/" className="w-full sm:w-auto">
          Back to Homepage
        </Button>
        <Button href="/#roles" variant="outline" className="w-full sm:w-auto">
          View Current Roles
        </Button>
      </div>
    </div>
  );
}

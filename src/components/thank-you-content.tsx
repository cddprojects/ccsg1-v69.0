import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brandSupportEmail } from "@/lib/brand";

const nextSteps = [
  "Your details are received for profile review.",
  "Your information may be compared with current or upcoming remote-friendly categories.",
  "If a hiring company considers your profile relevant, it may contact you about next steps.",
] as const;

export function ThankYouContent() {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-700">
        <CheckCircle2 className="h-8 w-8" strokeWidth={2} />
      </div>

      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
        MATCHING REMOTE - SINGAPORE
      </p>
      <h1 className="mt-4 font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">
        Thank you for your interest
      </h1>
      <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
        Your profile submission has been received. Matching Remote will use your
        information for category review and may share relevant details with
        third-party hiring companies when appropriate. Hiring decisions remain
        with those companies.
      </p>

      <div className="mt-10 rounded-2xl border border-slate-200/80 bg-white p-6 text-left shadow-sm sm:p-8">
        <h2 className="font-serif text-lg font-semibold text-slate-900 sm:text-xl">
          What may happen next
        </h2>
        <ul className="mt-4 space-y-3">
          {nextSteps.map((step) => (
            <li key={step} className="flex gap-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-8 text-sm leading-relaxed text-slate-600">
        Questions about your submission?{" "}
        <span className="font-medium text-slate-800">{brandSupportEmail}</span>
      </p>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Button href="/" className="w-full sm:w-auto">
          Back to Homepage
        </Button>
        <Button href="/#steps" variant="outline" className="w-full sm:w-auto">
          See the process
        </Button>
      </div>
    </div>
  );
}

import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { brandName, brandSupportEmail } from "@/lib/brand";
import { footerQuickLinks } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="flex flex-col gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <BrandLogo size="md" />
              <span className="font-serif text-xl font-semibold text-white">
                {brandName}
              </span>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-400">
              Remote-friendly role application pathway for Singapore-based applicants
              exploring current role categories shared by hiring partners.
            </p>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 text-xs leading-relaxed text-slate-400">
              <p className="font-semibold text-slate-200">Disclaimer</p>
              <p className="mt-2">
                {brandName} provides an application pathway and general process information.
                It does not employ applicants directly unless expressly stated. Role availability,
                compensation, verification, onboarding, and hiring outcomes are determined by
                the relevant hiring company.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 border-t border-slate-800 pt-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <p className="text-sm font-semibold text-white">Quick links</p>
              <ul className="mt-3 space-y-2 text-sm">
                {footerQuickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="inline-block py-1 hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">Legal</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link href="/privacy-policy" className="inline-block py-1 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-use" className="inline-block py-1 hover:text-white">
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">Support</p>
              <p className="mt-3 text-sm text-brand-200">{brandSupportEmail}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                <span className="block font-medium text-slate-300">
                  Business Correspondence Address
                </span>
                Ang Mo Kio Avenue 3, 569933, Ang Mo Kio
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {brandName}. All rights reserved.
          </p>
          <a href="#" className="inline-block py-2 hover:text-slate-300">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}

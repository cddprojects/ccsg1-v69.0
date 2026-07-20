import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TermsOfUseBody } from "@/components/terms-of-use-body";

export const metadata: Metadata = {
  title: "Terms of Use | Unitel Match",
  description:
    "Terms governing use of the Unitel Match website and application information pages.",
};

export default function TermsOfUsePage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <TermsOfUseBody />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

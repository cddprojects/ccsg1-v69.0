import type { Metadata } from "next";
import { PrivacyPolicyBody } from "@/components/privacy-policy-body";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Privacy Policy | Browse Flex",
  description:
    "How Browse Flex collects, uses, and protects personal data for Singapore-based applicants under the PDPA.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <PrivacyPolicyBody />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

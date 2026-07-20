import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThankYouContent } from "@/components/thank-you-content";

export const metadata: Metadata = {
  title: "Thank You | Unitel Match",
  description:
    "Your Unitel Match application has been received. Learn what may happen next.",
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <ThankYouContent />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

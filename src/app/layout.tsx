import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import { brandPageTitleSuffix } from "@/lib/brand";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: brandPageTitleSuffix,
  description:
    "Flexible remote-work profile support for Singapore-based applicants exploring remote-friendly categories through third-party hiring companies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="purple"
      className={`${inter.variable} ${libreBaskerville.variable} scroll-smooth`}
    >
      <body
        className={`${inter.variable} ${libreBaskerville.variable} min-h-screen bg-white font-sans text-slate-800 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

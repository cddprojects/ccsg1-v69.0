"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { brandName } from "@/lib/brand";
import { navLinks } from "@/lib/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/60 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6 lg:px-8">
        <Link href="#" className="flex min-w-0 items-center gap-2">
          <BrandLogo />
          <span className="truncate font-serif text-lg font-semibold text-slate-900 sm:text-xl">
            {brandName}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate-600 transition-colors hover:text-brand-700"
            >
              {link.label}
            </Link>
          ))}
          <Button href="#hero-form" className="px-5 py-2.5 text-sm">
            Get updates
          </Button>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-3 text-base text-slate-700 active:bg-slate-50"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button href="#hero-form" className="mt-3 w-full min-h-12" onClick={() => setOpen(false)}>
            Get updates
          </Button>
        </nav>
      ) : null}
    </header>
  );
}

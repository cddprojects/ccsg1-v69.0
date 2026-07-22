"use client";

import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  children: ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
};

const base =
  "inline-flex items-center justify-center rounded-xl px-6 py-3 min-h-11 touch-manipulation text-sm font-medium transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]";

const variants = {
  primary:
    "bg-brand-600 text-white shadow-lg shadow-brand-600/25 hover:bg-brand-700",
  outline:
    "border border-slate-200/80 bg-white/70 text-slate-800 backdrop-blur-sm hover:border-brand-200 hover:text-brand-700",
  ghost: "text-slate-700 hover:bg-slate-100",
};

function scrollToHash(href: string, event?: MouseEvent<HTMLAnchorElement>) {
  if (!href.startsWith("#") || href.length < 2) return false;
  const el = document.getElementById(href.slice(1));
  if (!el) return false;
  event?.preventDefault();
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  if (window.location.hash !== href) {
    history.pushState(null, "", href);
  }
  return true;
}

export function Button({
  href,
  variant = "primary",
  className = "",
  children,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        onClick={(event) => {
          onClick?.();
          scrollToHash(href, event);
        }}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

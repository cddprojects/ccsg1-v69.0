"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

type ReadMoreProps = {
  text: string;
  className?: string;
  /** Lines shown before expand (mobile / tablet) */
  collapsedLines?: 3 | 4 | 5;
  label?: string;
  /** Viewport and up: show full text with no toggle */
  fullFrom?: "lg" | "xl" | "never";
};

export function ReadMore({
  text,
  className = "",
  collapsedLines = 4,
  label = "Read full overview",
  fullFrom = "lg",
}: ReadMoreProps) {
  const [open, setOpen] = useState(false);

  const clampClass =
    collapsedLines === 3
      ? "line-clamp-3"
      : collapsedLines === 5
        ? "line-clamp-5"
        : "line-clamp-4";

  const fullBreakpoint =
    fullFrom === "xl" ? "xl:line-clamp-none" : fullFrom === "never" ? "" : "lg:line-clamp-none";

  const toggleHidden =
    fullFrom === "xl" ? "xl:hidden" : fullFrom === "never" ? "" : "lg:hidden";

  const isCollapsible = fullFrom !== "never";

  return (
    <div className={className}>
      <p
        className={`text-base leading-relaxed text-slate-600 sm:text-lg ${
          isCollapsible && !open
            ? `${clampClass} ${fullBreakpoint} overflow-hidden`
            : ""
        }`}
      >
        {text}
      </p>

      {isCollapsible ? (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`mt-3 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-brand-700 transition-colors hover:text-brand-800 ${toggleHidden}`}
          aria-expanded={open}
        >
          {open ? "Show less" : label}
          <ChevronDown
            className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
            aria-hidden
          />
        </button>
      ) : null}
    </div>
  );
}

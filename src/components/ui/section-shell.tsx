import type { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "muted";
};

export function SectionShell({
  id,
  children,
  className = "",
  variant = "default",
}: SectionShellProps) {
  const bg = variant === "muted" ? "bg-slate-50" : "bg-white";

  return (
    <section id={id} className={`${bg} py-16 sm:py-20 lg:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  title,
  description,
  align = "left",
  className = "",
  titleClassName = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <header className={`max-w-3xl lg:max-w-none ${alignClass} ${className}`}>
      <h2
        className={`font-serif text-[1.75rem] font-semibold text-slate-900 sm:text-3xl lg:text-4xl ${titleClassName}`}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  );
}

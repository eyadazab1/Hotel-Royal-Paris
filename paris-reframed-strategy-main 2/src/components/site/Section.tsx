import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  children,
  className = "",
}: {
  eyebrow?: string;
  title?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32 ${className}`}>
      {(eyebrow || title) && (
        <header className="mb-14 max-w-4xl md:mb-20">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          {title && (
            <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-[1.02] text-balance md:text-6xl">
              {title}
            </h2>
          )}
          <div className="mt-8 h-px w-24 bg-gradient-to-r from-brass via-foreground/20 to-transparent" />
        </header>
      )}
      {children}
    </section>
  );
}

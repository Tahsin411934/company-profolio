import type { ReactNode } from "react";
export function SectionHeader({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="eyebrow">{label}</p>
      <h2 id={id} className="section-title mt-4">
        {title}
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
        {children}
      </p>
    </div>
  );
}

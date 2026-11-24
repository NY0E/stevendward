import type { Metadata } from "next";
import CatalogRow from "@/components/CatalogRow";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Learning systems, enablement tools, and technical education projects by Steve Ward.",
};

const departments: { prefix: string; label: string }[] = [
  { prefix: "CS", label: "Agents & software" },
  { prefix: "LRN", label: "Learning systems" },
  { prefix: "STR", label: "Short-term rental tools" },
  { prefix: "MED", label: "Media" },
];

function courseNumber(code: string): number {
  return parseInt(code.split(" ")[1] ?? "0", 10) || 0;
}

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-site px-6 py-16 sm:py-20">
      <p className="eyebrow">Course catalog</p>
      <h1 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight sm:text-4xl">
        Every project here exists to teach somebody something.
      </h1>
      <p className="mt-5 max-w-prose text-lg leading-relaxed text-graphite">
        Different audiences, different formats, same job: take something hard
        and build the system that makes it learnable.
      </p>

      {departments.map((d) => {
        const rows = projects
          .filter((p) => p.code.startsWith(`${d.prefix} `))
          .sort((a, b) => courseNumber(a.code) - courseNumber(b.code));
        if (rows.length === 0) return null;
        return (
          <section key={d.prefix} className="mt-12" aria-labelledby={`dept-${d.prefix}`}>
            <h2 id={`dept-${d.prefix}`} className="eyebrow mb-2">
              {d.prefix} &middot; {d.label}
            </h2>
            <div>
              {rows.map((p) => (
                <CatalogRow key={p.slug} project={p} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

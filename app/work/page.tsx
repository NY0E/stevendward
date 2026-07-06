import type { Metadata } from "next";
import CatalogRow from "@/components/CatalogRow";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Learning systems, enablement tools, and technical education projects by Steve Ward.",
};

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

      <div className="mt-12">
        {projects.map((p) => (
          <CatalogRow key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}

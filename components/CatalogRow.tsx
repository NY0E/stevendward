import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function CatalogRow({ project }: { project: Project }) {
  return (
    <article className="group border-b border-rule py-8 first:border-t">
      <div className="grid gap-3 sm:grid-cols-[7rem_1fr]">
        <p className="eyebrow pt-1">{project.code}</p>
        <div>
          <h3 className="font-display text-2xl font-semibold leading-snug">
            <Link
              href={`/work/${project.slug}`}
              className="transition-colors group-hover:text-ballpoint"
            >
              {project.title}
            </Link>
          </h3>
          <p className="mt-2 max-w-prose text-graphite">{project.oneLiner}</p>
          <dl className="mt-4 flex flex-wrap gap-x-8 gap-y-1 font-mono text-xs text-graphite">
            <div className="flex gap-2">
              <dt className="uppercase tracking-wider">For</dt>
              <dd>{project.audience}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="uppercase tracking-wider">Format</dt>
              <dd>{project.format}</dd>
            </div>
          </dl>
        </div>
      </div>
    </article>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.oneLiner,
  };
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-site px-6 py-16 sm:py-20">
      <p className="eyebrow">{project.code}</p>
      <h1 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight sm:text-4xl">
        {project.title}
      </h1>
      <p className="mt-5 max-w-prose text-lg leading-relaxed text-graphite">
        {project.oneLiner}
      </p>

      <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-2 border-y border-rule py-4 font-mono text-xs text-graphite">
        <div className="flex gap-2">
          <dt className="uppercase tracking-wider">For</dt>
          <dd>{project.audience}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="uppercase tracking-wider">Format</dt>
          <dd>{project.format}</dd>
        </div>
      </dl>

      <div className="mt-10 max-w-prose space-y-4 text-lg leading-relaxed">
        <p className="text-graphite">
          Full case study in progress: the problem, the learners, the design
          decisions, and what happened.
        </p>
        {project.liveUrl && (
          <p>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline font-medium"
            >
              Try it live
            </a>
          </p>
        )}
      </div>

      <p className="mt-16">
        <Link href="/work" className="link-underline text-sm">
          Back to the catalog
        </Link>
      </p>
    </div>
  );
}

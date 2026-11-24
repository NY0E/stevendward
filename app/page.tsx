import Link from "next/link";
import { projects } from "@/lib/projects";

const credentials = [
  "MPA",
  "PMP",
  "FAA Part 107",
  "Amateur Extra (NY0E)",
  "Oracle Cloud AI Foundations",
];

function teaser(text: string): string {
  const first = text.split(". ")[0];
  return first.endsWith(".") ? first : `${first}.`;
}

export default function HomePage() {
  const picks = projects.filter((p) => p.caseStudy).slice(0, 3);

  return (
    <div className="mx-auto max-w-site px-6">
      {/* Hero */}
      <section className="py-20 sm:py-28">
        <div className="grid gap-8 sm:grid-cols-[minmax(0,42rem)_auto] sm:gap-14">
          <div>
            <p className="eyebrow">Steve Ward · Kansas City, MO</p>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
              I build <span className="mark-hilite">learning systems</span>{" "}
              that teach people hard things.
            </h1>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-graphite">
              Fifteen years teaching at universities and training rooms around
              the world, now applied to healthcare IT by day and
              AI-powered learning tools by night. I design the whole stack:
              the curriculum, the product, and the code.
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/steve.jpg"
            alt="Steve Ward"
            width={208}
            height={208}
            className="order-first h-40 w-40 rounded-full border border-rule object-cover sm:order-none sm:h-52 sm:w-52"
            style={{ objectPosition: "center 25%" }}
          />
        </div>
        <div className="mt-8">
          <Link href="/work" className="link-underline font-medium">
            Browse the course catalog
          </Link>
        </div>
      </section>

      {/* Selected work: a short teaser, not a rerun of the catalog */}
      <section aria-labelledby="selected-work">
        <h2 id="selected-work" className="eyebrow mb-2">
          Selected work
        </h2>
        <ul className="mt-4 border-y border-rule">
          {picks.map((p) => (
            <li key={p.slug} className="border-b border-rule last:border-b-0">
              <Link
                href={`/work/${p.slug}`}
                className="group grid gap-1 py-5 sm:grid-cols-[7rem_1fr] sm:gap-4"
              >
                <span className="eyebrow pt-1">{p.code}</span>
                <span>
                  <span className="font-display text-xl font-semibold leading-snug transition-colors group-hover:text-ballpoint">
                    {p.title}
                  </span>
                  <span className="mt-1 block max-w-prose text-graphite">
                    {teaser(p.oneLiner)}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/work"
          className="group mt-10 flex flex-wrap items-center justify-between gap-4 border-2 border-ink px-6 py-6 transition-colors hover:bg-hilite/40"
        >
          <span>
            <span className="font-display text-xl font-semibold leading-snug">
              {projects.length} projects in the full course catalog
            </span>
            <span className="mt-1 block max-w-prose text-graphite">
              Agents &amp; software, learning systems, rental tools, media —
              each one with the story of how it was built and what it taught.
            </span>
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-ballpoint group-hover:underline">
            Browse the catalog →
          </span>
        </Link>
      </section>

      {/* Proof strip */}
      <section className="py-14">
        <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-graphite">
          {credentials.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

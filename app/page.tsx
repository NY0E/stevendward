import Link from "next/link";
import CatalogRow from "@/components/CatalogRow";
import { projects } from "@/lib/projects";

const credentials = [
  "MPA",
  "PMP",
  "FAA Part 107",
  "Amateur Extra (NY0E)",
  "Oracle Cloud AI Foundations",
];

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="mx-auto max-w-site px-6">
      {/* Hero */}
      <section className="py-20 sm:py-28">
        <div className="grid gap-8 sm:grid-cols-[1fr_9rem] sm:gap-10">
          <div>
            <p className="eyebrow">Steve Ward · Kansas City, MO</p>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
              I build <span className="mark-hilite">learning systems</span>{" "}
              that teach people hard things.
            </h1>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-graphite">
              Fifteen years teaching at universities and training rooms across
              two continents, now applied to healthcare IT by day and
              AI-powered learning tools by night. I design the whole stack:
              the curriculum, the product, and the code.
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/steve.jpg"
            alt="Steve Ward"
            width={144}
            height={144}
            className="order-first h-36 w-36 justify-self-start rounded-full border border-rule object-cover sm:order-none sm:justify-self-end"
            style={{ objectPosition: "center 25%" }}
          />
        </div>
        <div className="mt-8">
          <Link href="/work" className="link-underline font-medium">
            Browse the course catalog
          </Link>
        </div>
      </section>

      {/* Featured work */}
      <section aria-labelledby="selected-work">
        <h2 id="selected-work" className="eyebrow mb-2">
          Selected work
        </h2>
        <div>
          {featured.map((p) => (
            <CatalogRow key={p.slug} project={p} />
          ))}
        </div>
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

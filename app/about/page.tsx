import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Fifteen years of teaching, applied to healthcare IT and AI-powered learning tools.",
};

const credentials = [
  {
    name: "MPA, University of Missouri",
    detail: "Community and organizational change",
  },
  {
    name: "PMP",
    detail: "Project Management Professional",
  },
  {
    name: "FAA Part 107",
    detail: "Certified remote pilot for commercial drone operations",
  },
  {
    name: "Amateur Extra, callsign NY0E",
    detail: "The highest class of US amateur radio license",
  },
  {
    name: "Oracle Cloud AI Foundations Associate",
    detail: "Cloud and AI fundamentals certification",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-site px-6 py-16 sm:py-20">
      <p className="eyebrow">About</p>
      <h1 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight sm:text-4xl">
        I have spent my career translating complex systems for the people who
        have to use them.
      </h1>

      <div className="mt-10 max-w-prose space-y-6 text-lg leading-relaxed">
        <p>
          For fifteen years that meant classrooms and training rooms: teaching
          political science at Chosun University in South Korea, coaching
          researchers on academic publishing, designing curriculum for programs
          spanning two continents, and explaining how governments work on live
          radio. Teaching sharpened one skill above all others, which is
          meeting people where they are and building them a bridge to where
          they need to be.
        </p>
        <p>
          Today I build those bridges in healthcare IT, working as an
          Integration Architect at Oracle Health. The audience changed. The job
          did not. Success still comes down to clear communication, careful
          sequencing, and making the technical accessible to everyone
          involved.
        </p>
        <p>
          Outside of work, I build and ship{" "}
          <span className="mark-hilite">AI-powered learning tools</span>. My
          NY0E suite helps aspiring amateur radio operators earn their licenses
          through Socratic AI tutoring, Morse code training, and exam prep
          apps I designed, coded, and deployed end to end.
        </p>
        <p>
          I also teach on camera. On{" "}
          <a
            href="https://www.youtube.com/@DadTechPOV"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline"
          >
            DadTechPOV
          </a>
          , I break down real technical projects in home networking, radio,
          and consumer tech for a general audience, because explaining
          something clearly in seven minutes is its own kind of curriculum
          design.
        </p>
        <p>
          The thread through all of it: technology should facilitate what
          people are trying to accomplish, not stand in their way. Whether the
          learner is a university freshman, a clinician, or a hobbyist
          studying for an FCC exam, my job is the same. Advocate for the end
          user, translate the techno-speak, and get out of the way.
        </p>
      </div>

      <section className="mt-16" aria-labelledby="credentials">
        <h2 id="credentials" className="eyebrow mb-6">
          Credentials
        </h2>
        <dl className="max-w-prose divide-y divide-rule border-y border-rule">
          {credentials.map((c) => (
            <div
              key={c.name}
              className="grid gap-1 py-4 sm:grid-cols-[16rem_1fr] sm:gap-4"
            >
              <dt className="font-medium">{c.name}</dt>
              <dd className="text-graphite">{c.detail}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}

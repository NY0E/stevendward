import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Steve Ward.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-site px-6 py-16 sm:py-20">
      <p className="eyebrow">Contact</p>
      <h1 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight sm:text-4xl">
        Office hours are flexible.
      </h1>
      <div className="mt-8 max-w-prose space-y-4 text-lg leading-relaxed">
        <p>
          The fastest way to reach me is email:{" "}
          <a
            href="mailto:wardstevendavid@gmail.com"
            className="link-underline font-medium"
          >
            wardstevendavid@gmail.com
          </a>
        </p>
        <p className="text-graphite">
          I am also on{" "}
          <a
            href="https://www.linkedin.com/in/wardstevend"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline"
          >
            LinkedIn
          </a>
          , and my code lives on{" "}
          <a
            href="https://github.com/NY0E"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </div>
  );
}

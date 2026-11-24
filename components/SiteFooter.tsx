const links = [
  { href: "mailto:wardstevendavid@gmail.com", label: "Email" },
  { href: "https://www.linkedin.com/in/wardstevend", label: "LinkedIn" },
  { href: "https://github.com/NY0E", label: "GitHub" },
  { href: "https://www.youtube.com/@firesidetechie", label: "YouTube" },
];

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-rule">
      <div className="mx-auto flex max-w-site flex-col gap-4 px-6 py-10 sm:flex-row sm:items-baseline sm:justify-between">
        <p className="font-mono text-xs text-graphite">
          © {new Date().getFullYear()} Steve Ward · Kansas City, MO
        </p>
        <ul className="flex gap-5">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-sm text-graphite transition-colors hover:text-ballpoint"
                {...(l.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

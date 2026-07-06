import Link from "next/link";

const nav = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-rule">
      <div className="mx-auto flex max-w-site items-baseline justify-between px-6 py-5">
        <Link
          href="/"
          className="font-mono text-sm font-medium tracking-wide text-ink"
        >
          Steve Ward
        </Link>
        <nav aria-label="Main">
          <ul className="flex gap-6">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-graphite transition-colors hover:text-ballpoint"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

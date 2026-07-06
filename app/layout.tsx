import type { Metadata } from "next";
import "@fontsource-variable/bitter";
import "@fontsource-variable/public-sans";
import "@fontsource-variable/red-hat-mono";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://stevendward.com"),
  title: {
    default: "Steve Ward · Technical Educator & Builder",
    template: "%s · Steve Ward",
  },
  description:
    "I build learning systems that teach people hard things. Fifteen years of teaching, applied to healthcare IT and AI-powered learning tools.",
  openGraph: {
    title: "Steve Ward · Technical Educator & Builder",
    description: "I build learning systems that teach people hard things.",
    url: "https://stevendward.com",
    siteName: "Steve Ward",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

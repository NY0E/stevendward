export type Project = {
  slug: string;
  code: string;
  title: string;
  oneLiner: string;
  audience: string;
  format: string;
  liveUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "ny0e-suite",
    code: "LRN 401",
    title: "NY0E Learning Suite",
    oneLiner:
      "A multi-app learning ecosystem that takes aspiring amateur radio operators from first question to licensed, including an AI tutor that refuses to just give away the answers.",
    audience: "Adult learners preparing for FCC license exams",
    format: "Web apps: AI Socratic tutor, Morse trainer, exam prep",
    liveUrl: "https://elmer.ny0e.com",
    featured: true,
  },
  {
    slug: "guest-guidebook",
    code: "ENB 210",
    title: "Guest Guidebook PWA",
    oneLiner:
      "A self-service guidebook for a two-unit hospitality operation that answers guest questions before they become 2am messages, with live weather and translation built in.",
    audience: "International short-stay guests, zero patience for app installs",
    format: "Progressive web app, offline-capable",
    featured: true,
  },
  {
    slug: "truth-sleuths",
    code: "CRT 150",
    title: "Truth Sleuths",
    oneLiner:
      "A game that teaches kids to spot logical fallacies by playing, not by memorizing definitions.",
    audience: "Kids and families",
    format: "Progressive web app, game-based learning",
    featured: true,
  },
  {
    slug: "dadtechpov",
    code: "MED 300",
    title: "DadTechPOV",
    oneLiner:
      "A YouTube channel breaking down real technical projects for a general audience: networking, radio, smart home, and the occasional glorious failure.",
    audience: "Curious general audience",
    format: "Video, long-form and shorts",
    liveUrl: "https://www.youtube.com/@DadTechPOV",
    featured: false,
  },
];

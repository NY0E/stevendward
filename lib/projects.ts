export type CaseSection = {
  heading: string;
  body: string[];
};

export type Project = {
  slug: string;
  code: string;
  title: string;
  oneLiner: string;
  audience: string;
  format: string;
  liveUrl?: string;
  featured: boolean;
  caseStudy?: CaseSection[];
};

export const projects: Project[] = [
  {
    slug: "accent-coach",
    code: "CS 250",
    title: "Accent Coach",
    oneLiner:
      "Clinical pronunciation scoring for a second-language nurse: voice drills in, phoneme-level scores out, coaching feedback in between. Consumer dictation tools erase accents by design; this pipeline measures where speech actually differs.",
    audience: "A working RN whose first language is Korean",
    format: "Telegram voice pipeline, Azure Speech scoring, AI coaching layer",
    featured: true,
    caseStudy: [
      {
        heading: "The problem",
        body: [
          "A registered nurse needed accent reduction for clinical communication. Two tools failed her by design: consumer dictation auto-corrects toward native speech, so it hides exactly the differences a learner needs to see, and generic pronunciation apps have no idea what a nurse actually needs to say.",
        ],
      },
      {
        heading: "What I built, by directing AI",
        body: [
          "A voice-to-coach pipeline: voice notes sent over Telegram, converted and scored through Azure's Pronunciation Assessment at phoneme and IPA level, then an agent coaching layer that turns raw scores into targeted drill feedback.",
          "Around the engine sits a Korean-L1 medical drill bank: ten sections, roughly forty drills, built around the vocabulary used on a hospital shift, not tourist phrases.",
        ],
      },
      {
        heading: "Guardrails",
        body: [
          "Audio never passes through iOS or consumer dictation. The scoring key and all configuration live locally, never in shared notes or chats. The coaching agent runs as a separate profile with its own trust boundary, and the learner controls what is saved.",
        ],
      },
      {
        heading: "How I measured it",
        body: [
          "Every drill session logs an overall score plus per-phoneme results. The baseline is captured: an early assessment scored 77.8 overall, with fluency already at 97 but specific drug-name phonemes scoring as low as 8 and 57. Repeated drills make the improvement curve measurable over time.",
        ],
      },
      {
        heading: "What happened",
        body: [
          "Working end to end and verified live: test clips score correctly, problem words are isolated at the phoneme level, and the learner is using it. Data is collecting; outcome claims wait for the data.",
        ],
      },
      {
        heading: "What I'd do next",
        body: [
          "Weekly trend reporting, a drill bank that grows from her real dictation errors, and connecting practice streaks to frequency.",
        ],
      },
    ],
  },
  {
    slug: "agent-infrastructure",
    code: "CS 260",
    title: "Agent Infrastructure",
    oneLiner:
      "Five AI assistants, one house, hard boundaries: separate agents for separate people and jobs, siloed containers, restricted backup keys, and a watchdog that phones me when a backup fails. The measure of the project is that nothing in it needs me anymore.",
    audience: "A household of four, including a second user with her own agent",
    format: "Multi-agent orchestration, containerization, automated backups, alerting",
    featured: true,
    caseStudy: [
      {
        heading: "The problem",
        body: [
          "Running multiple AI agents for different people and different jobs in one household: a personal mobile cockpit, a coaching agent for a second user, automation agents, shared memory. Naive setups leak one user's context into another's session, or leave backups and credentials dangling.",
        ],
      },
      {
        heading: "What I built, by directing AI",
        body: [
          "A multi-agent architecture with explicit trust boundaries: separate agent profiles per user and per job, and a fully siloed containerized agent for the second user, with no network ports, no shared mounts, capped CPU and memory, and her own API key with a monthly spend cap.",
          "Shared memory lives in one plain-text vault rather than a cloud sync, so there is a single source of truth and nothing to drift.",
          "Underneath it all, a three-machine backup chain: nightly staging with restricted read-only SSH keys, hardlink snapshots with integrity checks, and a watchdog that alerts a phone within five minutes of a failed backup, dead host, or stale snapshot.",
        ],
      },
      {
        heading: "Guardrails",
        body: [
          "Every secret has a defined location and never enters shared notes or chat. Remote access is VPN-only; nothing is port-forwarded. One agent's privacy rules were tested against scripted fake-data probes before going live, and the probes found real leaks, which were then fixed and re-tested to a clean pass.",
        ],
      },
      {
        heading: "How I measured it",
        body: [
          "Infrastructure honesty: restore tests with database integrity checks, seven of seven privacy probes passing, spend caps verified in the provider console. A standalone handbook documents every device, address, port, and schedule so the system runs without any AI involved.",
        ],
      },
      {
        heading: "What happened",
        body: [
          "Six automated services, three backup chains, and an alerting watchdog run unattended. The whole cost stack is held to about thirty dollars a month. The measure of this project is that nothing in it needs me anymore.",
        ],
      },
      {
        heading: "What I'd do next",
        body: [
          "A full restore drill onto clean hardware, and an off-site backup copy.",
        ],
      },
    ],
  },
  {
    slug: "sample-scan-agent",
    code: "CS 270",
    title: "Sample-Scan Agent",
    oneLiner:
      "An agent that scans product campaigns, pulls per-item diligence data, and delivers a ranked shortlist to my phone, then stops. The design point is the brakes, not the speed.",
    audience: "Solo operator running a product-review business",
    format: "Agent skill: browser research pipeline with hard action limits",
    featured: false,
    caseStudy: [
      {
        heading: "The problem",
        body: [
          "Product research for an influencer business meant hours of manual campaign scanning: checking identifiers, prices, ratings, and monthly sales for every candidate, over and over, before any asking or outreach could happen.",
        ],
      },
      {
        heading: "What I built, by directing AI",
        body: [
          "An agent skill that scans a product category, pulls per-item diligence data, and delivers a ranked shortlist to a phone. Then it stops. The interesting engineering is the boundary, not the scan.",
        ],
      },
      {
        heading: "Guardrails",
        body: [
          "The agent can look but never act. It is forbidden from accepting offers, messaging brands, or exposing credentials or addresses. An exclusions file controls what it skips. Its first runs happened only with the operator watching, in an isolated browser session that gets closed when the work is done.",
        ],
      },
      {
        heading: "How I measured it",
        body: [
          "The output is a ranked shortlist with source data per item, which a human acts on. The operator's decisions become ground truth for judging future ranking quality. Baseline: two hand-run scans delivered five-item ranked shortlists with diligence data attached.",
        ],
      },
      {
        heading: "What happened",
        body: [
          "Installed and enabled, verified on real scans. Scheduled autonomy is deliberately withheld until trial runs prove reliability.",
        ],
      },
      {
        heading: "What I'd do next",
        body: [
          "Compare the agent's rankings against realized outcomes over a few cycles before letting it run unattended.",
        ],
      },
    ],
  },
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

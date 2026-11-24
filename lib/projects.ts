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
      "Clinical pronunciation scoring for a nurse for whom English is her second language: voice drills in, phoneme-level scores out, coaching feedback in between. Consumer dictation tools erase accents by design; this pipeline measures where speech actually differs.",
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
    slug: "flare",
    code: "CS 140",
    title: "Flare",
    oneLiner:
      "An AI scam checker for older adults: text it a screenshot, get the red flags it spots with plain-language reasons and next steps. The design point is that it never does the thinking for you.",
    audience: "Older adults and their families",
    format: "iMessage, SMS, and Messenger bots; guardrail-first prompt design with an output safety net",
    featured: true,
    caseStudy: [
      {
        heading: "The problem",
        body: [
          "The moment of doubt in a scam text always hits when nobody's around to ask. My family was getting these texts and calls constantly, and the standard advice (never click, just call your bank) doesn't survive contact with a real 9pm group text.",
        ],
      },
      {
        heading: "What I built, by directing AI",
        body: [
          "A scam checker you text: send a screenshot of a suspicious message to a bot on iMessage, SMS, or Messenger, and it answers in under a minute with every red flag it spots, a one-line reason for each, and at most three steps to take.",
          "Three thin platform adapters share one brain: a rules prompt that defines every reply, and a safety net that inspects the model's output (flag count, off-topic redirects, leaked reasoning) before anything reaches the user. A reply that fails inspection becomes a graceful fallback, never the raw model.",
        ],
      },
      {
        heading: "Guardrails",
        body: [
          "It never labels a message a scam; that judgment stays with the person reading it. It never repeats a phone number from the suspicious message back (a classic scammer move to \"helpfully\" confirm it). It never asks for codes or passwords. It never gives an all-clear on anything involving money, even with zero red flags.",
          "Prompt-injection probes are part of the test suite, and the model's own reasoning is stripped so leaked chain-of-thought can never reach a user.",
        ],
      },
      {
        heading: "How I measured it",
        body: [
          "A repeatable test suite of known scam and legit samples plus injection probes. Twelve-sample baseline run: zero unsafe answers. Every live check is logged, so unsafe patterns can be audited after the fact.",
        ],
      },
      {
        heading: "What happened",
        body: [
          "Built and live-tested end to end; in private testing now, with the pilot opening to small groups first.",
        ],
      },
      {
        heading: "What I'd do next",
        body: [
          "Open it to local senior groups around Kansas City, grow the sample library from real flagged messages, and publish the pattern guides the scam-text log is already collecting.",
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
    slug: "housekeeping-checklist",
    code: "STR 230",
    title: "Housekeeping Turnover Checklist",
    oneLiner:
      "A bilingual turnover checklist for the duplex cleaning crew: unit-specific room-by-room tasks, photo capture in every room, and a comment thread on each item, so the standards live in the app instead of in a pile of text messages.",
    audience: "Cleaning crews working in English or Spanish",
    format: "Single-file web app, EN/ES toggle, photo capture, per-item comment threads",
    featured: false,
  },
  {
    slug: "qrzready",
    code: "LRN 401",
    title: "QRZReady",
    oneLiner:
      "Exam prep for FCC amateur radio licenses built around recall instead of recognition: adaptive ten-question sessions, a distractor system that widens as mastery grows, and question banks for all three license classes.",
    audience: "Adult learners preparing for FCC license exams",
    format: "Next.js web app, Firebase auth, Supabase study logging",
    liveUrl: "https://qrzready.com",
    featured: true,
  },
  {
    slug: "cwready",
    code: "LRN 402",
    title: "CWReady",
    oneLiner:
      "A Morse code trainer that teaches sounds instead of dots and dashes: Koch method progression, Farnsworth spacing, and a callsign-first drill, because the plateau most learners hit comes from counting symbols they should be hearing.",
    audience: "Hams learning Morse code for on-air operation",
    format: "Web app: audio drills, progress tracking, prosign and Q-code reference",
    liveUrl: "https://cwready.com",
    featured: false,
  },
  {
    slug: "natoready",
    code: "LRN 403",
    title: "NATOReady",
    oneLiner:
      "Phonetic alphabet drills that build reflexive recall: letter to word, word to letter, and full callsign spelling. Knowing the alphabet and using it on the air are different things; this one trains the second.",
    audience: "Newly licensed radio operators",
    format: "Web app: timed drills, quick reference",
    liveUrl: "https://natoready.com",
    featured: false,
  },
  {
    slug: "guest-guidebook",
    code: "STR 210",
    title: "Guest Guidebook PWA",
    oneLiner:
      "A self-service guidebook for a two-unit hospitality operation that answers guest questions before they become 2am messages, with live weather and translation built in.",
    audience: "International short-stay guests, zero patience for app installs",
    format: "Progressive web app, offline-capable",
    featured: true,
  },
  {
    slug: "kc-events-engine",
    code: "STR 220",
    title: "KC Events Engine",
    oneLiner:
      "A scraper that keeps an auto-updating Kansas City events feed for my short-term rental: pulls real dates and venues from local sources, geocodes them, and filters by how far a guest is willing to drive.",
    audience: "Short-stay guests deciding what to do tonight",
    format: "Scheduled Python scraper, JSON-LD, static hosting at basekc.com/events",
    liveUrl: "https://basekc.com/events",
    featured: true,
  },
  {
    slug: "truth-sleuths",
    code: "LRN 150",
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
    title: "Fireside Techie",
    oneLiner:
      "A YouTube channel breaking down real technical projects for a general audience: networking, radio, smart home, and the occasional glorious failure.",
    audience: "Curious general audience",
    format: "Video, long-form and shorts",
    liveUrl: "https://www.youtube.com/@firesidetechie",
    featured: false,
  },
];

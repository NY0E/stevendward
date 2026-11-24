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
      "A bilingual turnover checklist for the duplex cleaning crew: unit-specific room-by-room tasks, photo capture, and a comment thread on every item. The crew used it a few times, then taught me the real constraint: at turnover speed, the app has to be faster than habit, and this one wasn't there yet.",
    audience: "Cleaning crews working in English or Spanish",
    format: "Single-file web app, EN/ES toggle, photo capture, per-item comment threads",
    caseStudy: [
      {
        heading: "The problem",
        body: [
          "The standards for turning over a two-unit duplex lived in my head and in a pile of text messages: which rooms get photographed, how the beds get staged, what restocked actually means. Half my crew works in Spanish, so every nuance had two languages to drift in.",
        ],
      },
      {
        heading: "What I built, by directing AI",
        body: [
          "A bilingual checklist web app: unit-specific room-by-room task lists for Unit A, Unit B, or the whole duplex, separate turnover and quarterly deep-clean modes, and an English-Spanish toggle that translates every item, not just the headers.",
          "Each item carries its own comment thread where I leave standing instructions and the crew replies. Rooms get photographed in the app, pest evidence gets reported per room with a note and a photo, and the whole thing installs to a home screen so it opens like a native tool.",
        ],
      },
      {
        heading: "Guardrails",
        body: [
          "Photos stay in the session and are never uploaded, and the submit button says Demo because it is one: no report goes anywhere. The checklist itself is deliberately shared state, visible to anyone with the link, which the page says out loud.",
        ],
      },
      {
        heading: "How I measured it",
        body: [
          "The crew measured it for me, by using it. A few real turnovers is a small sample, but their verdict was unambiguous.",
        ],
      },
      {
        heading: "What happened",
        body: [
          "They stopped. At turnover speed the app slowed them down; tapping through a checklist costs more seconds than it saves when you do the work every week. The finding stands on its own: at turnover speed, the tool has to be faster than habit, and this one was not there yet.",
        ],
      },
      {
        heading: "What I'd do next",
        body: [
          "A revival, if the crew ever asks for one, starts from speed first: fewer taps per item, no threads during the turn, and checklists that assume competence and only flag exceptions. Until then it stays parked, with the lesson banked.",
        ],
      },
    ],
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
    caseStudy: [
      {
        heading: "The problem",
        body: [
          "Every ham exam app I could find hands you all four answer choices from your very first question. That works if you already know some electronics; it buries everybody else. You end up memorizing the shape of the wrong answers instead of learning the right one.",
        ],
      },
      {
        heading: "What I built, by directing AI",
        body: [
          "QRZReady inverts the usual drill. A new question shows you one answer, the correct one, and the app only adds wrong choices as your track record earns them: four stages from one choice to four, and a question leaves your study set after four correct in a row. Each ten-question session mixes new material, needs-practice, needs-review, and a few mastered questions for retention.",
          "The question banks come from a machine-readable copy of the official NCVEC pools that I maintain as its own repo. The Technician pool tracks the 2026-2030 cycle, including the February 2026 errata and the new diagram questions.",
          "I built it in three phases across more than a year: first describing what I wanted to Claude in chat and pasting the code into GitHub one file at a time, then AI-assisted feature work, and finally Claude Code for the pool update, offline support, exam diagrams, and the privacy controls. I am not a software engineer; I was the director and the quality gate.",
        ],
      },
      {
        heading: "Guardrails",
        body: [
          "Two of the more important features exist because I caught their absence. Account signup shipped with no privacy policy or terms anywhere on the site; the fix added a policy, terms of service, a 13-and-up check at signup, self-service data export and deletion, and removed an unused server route that was a security exposure.",
          "A later audit found the study logging sent more than the policy promised: signed-out users' attempts were reaching the database under a per-browser id. That got aligned the other way. Signed-out study data now never leaves the device, account deletion scrubs every backend row, and a daily keep-alive job keeps the free-tier database awake so that deleting an account never fails.",
        ],
      },
      {
        heading: "How I measured it",
        body: [
          "The app logs every study session, every answer attempt including which wrong answers were shown, and self-reported exam passes. The point is to test whether graduated choices actually beats standard four-choice drilling, instead of assuming it does.",
          "Honest status: the instrumentation is younger than the app, and usage so far is thin, some of it likely my own testing. The method has no verdict yet, and I am not going to invent one.",
        ],
      },
      {
        heading: "What happened",
        body: [
          "Live and verified at qrzready.com, updated for the current exam cycle. It is a finished tool waiting for its experiment to collect data.",
        ],
      },
      {
        heading: "What I'd do next",
        body: [
          "Full-length practice exams are designed and not built yet. After that: decide whether the study logging earns its keep, and whether the graduated-choices idea deserves a real comparison run.",
        ],
      },
    ],
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
    caseStudy: [
      {
        heading: "The problem",
        body: [
          "Most Morse trainers teach you dots and dashes. That is exactly why people plateau: you end up counting symbols instead of hearing characters, and on the air there is no time to count.",
        ],
      },
      {
        heading: "What I built, by directing AI",
        body: [
          "CWReady teaches sounds. It uses the Koch method, which starts you with just two characters and adds one more only once you can reliably tell them apart, so your brain learns each sound as a whole unit. Characters play at full target speed with Farnsworth spacing, which means extra time between characters while you learn; the gap narrows as you improve.",
          "It starts you on your own callsign, the one thing you will send more than anything else, and keeps a prosign and Q-code reference one tap away, so the drills lead somewhere real: a basic contact, learned as whole patterns rather than as a code table.",
        ],
      },
      {
        heading: "Guardrails",
        body: [
          "There is nothing to guard because there is nothing to take. It runs entirely in your browser as a single page: no accounts, no tracking, and nothing leaves the device. The only state is your own progress.",
        ],
      },
      {
        heading: "How I measured it",
        body: [
          "The app tracks characters mastered and queued, not minutes spent. The meter that actually matters is on the air: whether the drills turn into real contacts at real speed.",
        ],
      },
      {
        heading: "What happened",
        body: [
          "Built, live at cwready.com, and it does its one job. Whether it works is a question only my logbook can answer.",
        ],
      },
      {
        heading: "What I'd do next",
        body: [
          "Nothing until the drills earn some airtime. If I stop using it, that is the data, not a failure; the experiment was designed to be cheap.",
        ],
      },
    ],
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
    caseStudy: [
      {
        heading: "The problem",
        body: [
          "Knowing the NATO phonetic alphabet and being able to use it on the air are different skills. Reciting Alpha Bravo Charlie off a chart is easy; spelling your callsign out while someone waits on a noisy frequency is a reflex, and reflexes need drilling.",
        ],
      },
      {
        heading: "What I built, by directing AI",
        body: [
          "NATOReady drills the reflex three ways: see a letter and type the word, see a word and pick the letter, and spell random callsigns in full phonetics. A quick reference sits beside the drills for the moments you would rather look than guess.",
        ],
      },
      {
        heading: "Guardrails",
        body: [
          "There is no account, no analytics, and nothing collected; the only thing the app knows is the drill on screen. Small tools should stay small.",
        ],
      },
      {
        heading: "How I measured it",
        body: [
          "It scores the drills in the app, but I never built outcome tracking beyond that and I am not going to claim any. The honest measure is what it cost: one small experiment, built fast, that answered its question.",
        ],
      },
      {
        heading: "What happened",
        body: [
          "Live and working at natoready.com, then parked, on purpose. It proved the drills build recall; it also proved I do not need it enough to maintain anything bigger than the small tool it is.",
        ],
      },
      {
        heading: "What I'd do next",
        body: [
          "Either the reflex drills get folded into a bigger trainer someday or they stay right here. I have not decided, and parking it is the honest current answer.",
        ],
      },
    ],
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
    caseStudy: [
      {
        heading: "The problem",
        body: [
          "Short-term rental hosts drown in the same twenty questions, and those questions always arrive at the least convenient hour. My guests are often international, on vacation, and completely unwilling to install an app just to learn where the coffee is.",
        ],
      },
      {
        heading: "What I built, by directing AI",
        body: [
          "A self-service guidebook for the duplex, shipped as an installable progressive web app: it loads fast, keeps working offline on spotty property wifi, and answers the questions guests actually ask, from check-in details to local recommendations. Live weather is built in, and translation is one tap away for guests whose first language is not English.",
          "Guests reach it through the automated messages every reservation already gets; nobody has to find anything or remember a link.",
        ],
      },
      {
        heading: "Guardrails",
        body: [
          "There is nothing to log into and nothing collected: no sign-up, no email capture, no analytics. The guide exists to answer questions, and gathering guest data is not part of that job.",
        ],
      },
      {
        heading: "How I measured it",
        body: [
          "The number I care about is guest messages at check-in, and I have not run a before-and-after count, so I will not claim one. The softer signal is in what stops getting asked.",
        ],
      },
      {
        heading: "What happened",
        body: [
          "Deployed at guide.basekc.com and in front of every reservation. It does what a guidebook should: guests answer their own questions at ten at night instead of mine at two in the morning.",
        ],
      },
      {
        heading: "What I'd do next",
        body: [
          "Measure the message volume properly, keep the content in step with the seasons, and revisit the parked idea of an in-room screen showing the guide, which waits on cost, mounting, and disclosure rules.",
        ],
      },
    ],
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
    caseStudy: [
      {
        heading: "The problem",
        body: [
          "Guests on a three-night stay ask the same question on day one: what is there to do tonight? Hand-maintained lists go stale in a week, and a stale recommendation is worse than none.",
        ],
      },
      {
        heading: "What I built, by directing AI",
        body: [
          "A scheduled Python scraper pulls the Visit KC events calendar, geocodes every venue, and rebuilds a static events page for the duplex at basekc.com/events. Guests filter by their stay dates and their driving tolerance, and the page carries structured data so search engines can read it too. The whole thing updates weekly without me touching it.",
        ],
      },
      {
        heading: "Guardrails",
        body: [
          "The scraper reads public calendars and never writes, messages, or books anything. The output is a static page with no accounts, no email capture, and no guest data to breach; the only moving part is the automation itself.",
        ],
      },
      {
        heading: "How I measured it",
        body: [
          "Freshness is the metric: the page should never show a stay week with nothing on it that actually happened. I deliberately run no analytics on it, so I cannot tell you traffic; I can tell you the calendar is current.",
        ],
      },
      {
        heading: "What happened",
        body: [
          "Live at basekc.com/events, updated weekly, and quietly now the standing answer to the best guest question there is: what should we do tonight?",
        ],
      },
      {
        heading: "What I'd do next",
        body: [
          "Add more local sources so the page is not one calendar's view of Kansas City, and keep the geocoding honest, because a wrong distance is the one bug guests actually notice.",
        ],
      },
    ],
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
    caseStudy: [
      {
        heading: "The problem",
        body: [
          "Teaching kids to spot bad arguments by handing them definitions is like teaching swimming by lecture. Logical fallacies only click when you catch one in the wild, and the wild is where kids actually live.",
        ],
      },
      {
        heading: "What I built, by directing AI",
        body: [
          "A detective-agency game where spotting the sneaky trick is the whole point. Cases written for young readers send players hunting the classics: ad hominem, straw man, false dilemma, slippery slope, red herring, bandwagon, and friends. It ships as an installable progressive web app, so it plays like a native game on a tablet.",
        ],
      },
      {
        heading: "Guardrails",
        body: [
          "It is a game for kids, so the constraints are absolute: no accounts, no ads, no data collection, and nothing leaves the device. The only thing it ever asks for is an answer to the case.",
        ],
      },
      {
        heading: "How I measured it",
        body: [
          "There is no formal study here and I will not invent one. The design bet is that a kid who has laughed at a straw man in a game will recognize the next one at the dinner table.",
        ],
      },
      {
        heading: "What happened",
        body: [
          "Built and playable. It has not been published beyond the house, and that is a decision, not an oversight.",
        ],
      },
      {
        heading: "What I'd do next",
        body: [
          "More cases and a real decision about whether it earns a public URL. The signal to ship it is simple: somebody asking when the next case lands.",
        ],
      },
    ],
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

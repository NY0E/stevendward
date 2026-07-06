import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FAF9F6",
        ink: "#16202B",
        graphite: "#55606C",
        ballpoint: "#1F4FA3",
        hilite: "#F7E8B0",
        rule: "#E4E1D8",
      },
      fontFamily: {
        display: ["'Bitter Variable'", "Georgia", "serif"],
        body: ["'Public Sans Variable'", "system-ui", "sans-serif"],
        mono: ["'Red Hat Mono Variable'", "ui-monospace", "monospace"],
      },
      maxWidth: {
        prose: "42rem",
        site: "68rem",
      },
    },
  },
  plugins: [],
};
export default config;

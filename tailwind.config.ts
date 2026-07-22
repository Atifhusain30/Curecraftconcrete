import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FFFFFF",
        slab: "#F4F4F2",
        line: "#E4E3DF",
        steel: "#575651",
        silver: "#B9B8B3",
        graphite: "#2E2D2A",
        iron: "#171716",
        accent: {
          DEFAULT: "#4A4944",
          light: "#75746E",
          dark: "#2E2D2A",
        },
        bronze: {
          DEFAULT: "#4A4944",
          light: "#75746E",
          dark: "#2E2D2A",
        },
        star: "#F0A929",
      },
      fontFamily: {
        slab: ["Oswald", "Arial Narrow", "sans-serif"],
        display: ["Oswald", "Arial Narrow", "sans-serif"],
        body: ["'Source Sans 3'", "system-ui", "-apple-system", "sans-serif"],
      },
      maxWidth: { wrap: "76rem" },
      boxShadow: {
        card: "0 1px 3px rgba(23,23,22,.07), 0 8px 20px rgba(23,23,22,.05)",
        lift: "0 2px 6px rgba(23,23,22,.08), 0 18px 44px rgba(23,23,22,.13)",
        soft: "0 1px 3px rgba(23,23,22,.07), 0 8px 20px rgba(23,23,22,.05)",
        softLg: "0 2px 6px rgba(23,23,22,.08), 0 18px 44px rgba(23,23,22,.13)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(.22,1,.36,1)",
      },
    },
  },
  plugins: [],
};
export default config;

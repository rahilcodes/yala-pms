import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1F3A",
          deep: "#071528",
          hover: "#153055",
          hairline: "#1C2E4A",
        },
        gold: {
          DEFAULT: "#BFA163",
          hover: "#D9C48F",
          text: "#7A6230",
        },
        champagne: "#EFE6D3",
        paper: "#F8F5EF",
        track: "#F1EDE4",
        ink: "#14213A",
        body: "#3F4A5E",
        muted: "#5B6577",
        placeholderc: "#7B8494",
        ondark: {
          secondary: "#C9CFDA",
          muted: "#8F99AB",
        },
        hair: {
          light: "#E6E2D9",
          lighter: "#EFEBE3",
          paper: "#DDD5C5",
          input: "#D6CFC1",
        },
        tagline: "#C9B98F",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-lato)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        surface: "#070709",
        lilac: "#c9b8ff",
        haze: "#f5f2ff",
        ink: "#141417",
        line: "#e7e2f5"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(22, 16, 42, 0.08)"
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(circle at top, rgba(201, 184, 255, 0.28), transparent 38%), radial-gradient(circle at 80% 20%, rgba(201, 184, 255, 0.16), transparent 22%)"
      }
    }
  },
  plugins: []
};

export default config;

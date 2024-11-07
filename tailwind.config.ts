import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        primary100: '#437ED9',
        primary20: '#EAF1FB',
        redLight: '#FFF4F4',
        darkRed: '#611F1F',
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;

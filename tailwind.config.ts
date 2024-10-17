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
        foreground: "var(--foreground)",
        'courtney-dark-blue': '#16205F',
        'courtney-dark-yellow': '#FF9900',
        'courtney-light-yellow': '#F2CB00',
        'courtney-bright-yellow': '#FFF856',
        'courtney-soft-grey': '#F9F9F9',
        'courtney-normal-grey': '#E1E1E1',
        'courtney-dark-grey': '#9F9F9F',
        'courtney-white': '#FFFFFF',
        'courtney-soft-blue': '#C5E0FF'
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "pri": "linear-gradient(to right, #60a5fa, #a78bfa)",
      },
      colors: {
        'glass': 'rgba(255, 255, 255, 0.15)', // for glass effect
      },
      backdropBlur: {
        'lg': '16px',
      },
    },
  },
  plugins: [],
};
export default config;

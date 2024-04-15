import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        's': ' 0 2px 3px 0  rgba(0, 0, 0, 0.1), 0 2px 10px 0  rgba(0, 0, 0, 0.1)',
        'g': ' 0 2px 3px 0  rgba(5, 150, 105, 95), 0 2px 10px 0  rgba(5, 150, 105, 95)',
      },
      screens: {
        'md': '410px',
      }
    },
  },
  plugins: [],
};
export default config;

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
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'], // Use this as the default sans font
        'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-image': "url('/image1 copy.jpg')",
      }
    },
  },
  plugins: [],
};
export default config;

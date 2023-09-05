import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        sm: {
          min: "0px",
          max: "640px",
        },
        md: {
          min: "640px",
          max: "1280px",
        },
        lg: {
          min: "1280px",
        },
      },
    },
  },
  plugins: [],
};

export default config;

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
      },
      screens: {
        mobile: { max: "640px" },
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: Function }) {
      const newUtilities = {
        ".overflow-x-hidden-mobile": {
          "@apply overflow-x-hidden": {},
        },
        "@screen mobile": {
          ".overflow-x-hidden-mobile": {
            "@apply overflow-x-hidden": {},
          },
        },
        "@screen md": {
          ".overflow-x-hidden-mobile": {
            "@apply overflow-x-visible": {},
          },
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
export default config;

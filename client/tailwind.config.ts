import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Jacques Francois Shadow"],
      },
      fontSize: {
        base: "16px",
        lg: "24px",
        xl: "32px",
      },
      colors: {
        primary: "#F894C6",
        bg: "#FDFDFF",
        border: "#ECECEC",
        danger: "#F87171",
      },
    },
  },
  plugins: [],
};
export default config;

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      Black: "#141414",
      DarkGray: "#1F1F1F",
      Gray: "#333333",
      NeonGreen: "#C4F82A",
      white: "#FFFFFF",
    },
    extend: {
      backgroundImage: {
        profile: "url('/public/profile.avif')",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        bgdark1: "rgba(0, 0, 0, 0.70)",
        bgdark: "rgba(0, 0, 0, 0.80)",
        bgdark0: "rgba(0, 0, 0, 0.90)",
        primary: "#e3ca92",
        "main-color": " #92c385",
        "primary-fade": "#e3ca9273",
      },
    },
  },
  plugins: [],
};

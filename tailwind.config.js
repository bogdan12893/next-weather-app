/** @type {import('tailwindcss').Config} */
module.exports = {
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

      colors: {
        "dk-navy": "#37306B",
        "dk-purple": "#66347F",
        "dk-maroon": "#9E4784",
        "dk-peach": "#D27685",
        "lh-white": "#F9F5F6",
        "lh-cream": "#F8E8EE",
        "lh-pink": "#FDCEDF",
        "lh-pink-1": "#F2BED1",
      },
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "1.125rem",
        md: "1.6rem",
      },

      screens: {
        sm: "540px",
        md: "668px",
        lg: "892px",
        xl: "924px",
        "2xl": "1000px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

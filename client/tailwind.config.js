/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#dcac2f",
        secondary: "#b5872c",
        tertiary: "#755721",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Source Sans Pro", "sans-serif"],
        // Alternatif fontlar
        "alt-heading": ["Montserrat", "sans-serif"],
        "alt-body": ["Lora", "serif"],
      },
    },
  },
  plugins: [],
};

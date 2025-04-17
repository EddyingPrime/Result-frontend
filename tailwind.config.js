/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Lightred: "hsl(0, 100%, 67%)",
        Orangeyyellow: "hsl(39, 100%, 56%)",
        Greenteal: "hsl(166, 100%, 37%)",
        Cobaltblue: "hsl(234, 85%, 45%)",

        Lightslateblue: "hsl(252, 100%, 67%)",
        Lightroyalblue: "hsl(241, 81%, 54%)",

        Violetblue: "hsla(256, 72%, 46%, 1)",
        Persianblue: "hsla(241, 72%, 46%, 0)",
      },
      fontFamily: {
        sans: ["Hanken Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};

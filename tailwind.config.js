/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#72e0ea",

          secondary: "#88bcea",

          accent: "#f285de",

          neutral: "#382640",

          "base-100": "#EDF0F2",

          info: "#3464CB",

          success: "#46E7A4",

          warning: "#EDAF5A",

          error: "#F13B3B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

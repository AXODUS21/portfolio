/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transformStyle: {
        "3d": "preserve-3d",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".transform-style-3d": {
          "transform-style": "preserve-3d",
        },
      });
    },
  ],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1920px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: "#B76E79",
        primaryTint: "#D3A8AE",
        footer: "",
        primaryShadow: "#a4636c",
        text: "#373A58",
        background: "#f7f7f7",
        secondary: "#20736D",
      },
      fontFamily: {
        head: ["Raleway"],
      },
      backgroundImage: {
        heroImage:
          "linear-gradient(to right, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url('images/hero.jpg')",
        btnBg: "url('images/bg.svg')",
      },
    },
  },
  plugins: [],
};

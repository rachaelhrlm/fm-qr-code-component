module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          dark: "hsl(218, 44%, 22%)",
        },
        gray: {
          light: "hsl(212, 45%, 89%)",
          blue: "hsl(220, 15%, 55%)",
        },
      },
    },
  },
  plugins: [],
};

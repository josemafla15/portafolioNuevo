/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#0F172A",
          secondary: "#1E293B",
          background: "#F1F5F9",
          text: "#0F172A",
        },
      },
    },
    plugins: [],
  };
  
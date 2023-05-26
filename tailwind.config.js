/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'lobster': ['Bruno Ace', 'cursive']
    }
  },
  plugins: [require("daisyui")],
}


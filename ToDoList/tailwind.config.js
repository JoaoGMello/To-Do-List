/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'note1': '1024px',
      'note2': '1240px',
      'monitor1': '1500px',
      'monitor2': '1800px'
    },
    extend: {},
  },
  plugins: [],
}


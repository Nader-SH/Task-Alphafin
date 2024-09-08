/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      maxWidth: {
        '80p': '80%',
      },
      spacing: {
        '20px': '20px',
      },
    },
  },
  plugins: [],
}


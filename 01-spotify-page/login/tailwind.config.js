/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
         colors: {
        'regal-blue': '#243c5a',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.js",
  ],
  theme: { extend: {
          colors: {
        'regal-blue': '#243c5a',
        'spotify-gray': '#252525',
        'spotify-black': '#121212',
        'spotify-green': '#1CD657',
        'spotify-gray-light': '#B3B3B3',
      },
  } 
},
  plugins: [],
}

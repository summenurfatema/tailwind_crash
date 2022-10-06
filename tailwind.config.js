/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,js}'
  ],
  theme: {
    extend: {
      screen: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px"
      },
      colors: {
        brightRed: '#FF6633'
      }

    },
  },
  plugins: [],
}

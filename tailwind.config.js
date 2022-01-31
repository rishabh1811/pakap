module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        "inter" : 'Inter, sans-serif'
      },
      screens : {
        "576": "576px",
        "768": "768px",
        "992": "992px",
        "1200": "1200px",
        "1400": "1400px",
      },
      transitionDuration: {
        '0': '0ms',
        '5000': '5000ms',
      },
      colors: {
        "lightBlue" : "#f4f8fc"
      }
    },
  },
  plugins: [],
}
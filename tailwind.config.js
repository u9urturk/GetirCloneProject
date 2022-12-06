/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        '0.1' : '0.063rem'
      },
      backgroundImage:theme=>({
        'mobile-app' : 'url(https://cdn.getir.com/getirweb-images/common/illustration/doodle.png)'
      }),
      colors:{
        'brand-color' : "#4c3398",
        'yellow-brand-color':"#ffd300",
        'primary-brand-color' : "#5d3ebc",
        'secondary-brand-color' : "#7849f7"
      }
    },
  },
  plugins: [],
}

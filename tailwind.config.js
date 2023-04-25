/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      backgroundColors: theme => ({
        ...theme('colors'),
        'red':'#CC2D4A',
        'green':'#8FA206',
        'blue':'#61AEC9'
      }),

      textColor:{
        'red-travel':'#CC2D4A',
        'green':'#8FA206',
        'blue':'#61AEC9'
      }


    },
  },
  plugins: [],
}


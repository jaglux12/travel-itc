/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      colors: {
        'red-travel':'#CC2D4A',
        'green-travel':'#8FA206',
        'blue-travel':'#61AEC9'
      },

      textColor:{
        'red-travel':'#CC2D4A',
        'green-trabe':'#8FA206',
        'blue':'#61AEC9'
      },

      backgroundImage: {
        'iguazu':'url(https://i.postimg.cc/wMf9bKLW/Any-Conv-com-puerto-iguazu.webp)'
      },

      spacing: {
        'width-card-rec':'154px',
        'height-card-rec':'215px'
      }


    },
  },
  plugins: [],
}


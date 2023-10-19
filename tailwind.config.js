/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./js/**/*.js"],
  theme: {
    extend: {
		screens: {
              sm: "480px",
              md: "768px",
              lg: "1024px",
              xl: "1280px",
           }
	},

	fontFamily:{
		nunito: ['Nunito', 'sans-serif']
	}
  },
  plugins:[],
}

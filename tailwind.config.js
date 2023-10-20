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
           },
    animation: {
      'gradient': 'gradient 2s ease 0s infinite',
    },
    keyframes:{
      gradient: {
        '0%': {'background-position': 'left center'},
        '50%': {'background-position': 'right center'},
        '100%': {'background-position': 'left center'},
      }
    }
	},

	fontFamily:{
		nunito: ['Nunito', 'sans-serif']
	}
  },
  plugins:[],
}

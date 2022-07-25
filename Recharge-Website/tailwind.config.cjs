/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
		colors: {
    		'lightGray': '#464C54',
    		'darkGray': '#2D343B',
    		'black': '#21262A',
    		'lightYellow': '#FFC000',
    		'darkYellow': '#EDB100',
		}
	},
  },
  plugins: [],
}

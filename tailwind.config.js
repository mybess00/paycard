/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
			'sm': {'max': '640px'},
	  
			'md': {'min': '641px', 'max': '768px'},
	  
			'lg': {'min': '769px', 'max': '1024px'},
	  
			'xl': {'min': '1025px', 'max': '1280px'},
	  
			'2xl': {'min': '1281px', 'max': '1536px'},
		},
  },
  plugins: [
    
  ],
}

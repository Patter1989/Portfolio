/** @type {import ('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			keyframes: {
				glow: {
					"0%, 100%": {
						boxShadow: "0 0 10px rgba(128,128,128,0.2)",
					},
					"50%": {
						boxShadow: "0 30px 50px rgba(128,128,128,0.5)",
					},
				},
			},
			animation: {
				glow: "glow 2.5s ease-in-out infinite",
			},
		},
	},
	plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// export default {
// 	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
// 	theme: {
// 		container: {
// 			center: true,
// 			padding: "1rem",
// 			screens: {
// 				sm: "100%",
// 				md: "768px",
// 				lg: "1024px",
// 				xl: "1280px",
// 				"2xl": "1440px",
// 			},
// 		},
// 		extend: {
// 			colors: {
// 				testpurple: "#6b21a8", // для перевірки
// 			},
// 			keyframes: {
// 				glowShadow: {
// 					"0%, 100%": {
// 						boxShadow: "0 0 10px rgba(128, 128, 128, 0.2)",
// 					},
// 					"50%": {
// 						boxShadow: "0 30px 50px rgba(128, 128, 128, 0.5)",
// 					},
// 				},
// 				glowText: {
// 					"0%, 100%": {
// 						color: "rgba(255, 255, 255, 0.6)",
// 					},
// 					"50%": {
// 						color: "rgba(255, 255, 255, 1)",
// 					},
// 				},
// 				glowLetter: {
// 					"0%, 100%": {
// 						color: "rgba(255, 255, 255, 0.5)",
// 						textShadow: "none",
// 					},
// 					"50%": {
// 						color: "#fff",
// 						textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
// 					},
// 				},
// 				rotateLight: {
// 					from: {
// 						transform: "rotate(0deg)",
// 					},
// 					to: {
// 						transform: "rotate(360deg)",
// 					},
// 				},
// 			},
// 			animation: {
// 				glowShadow: "glowShadow 10s ease-in-out infinite",
// 				glowText: "glowText 5s ease-in-out infinite",
// 				glowLetter: "glowLetter 5s ease-in-out infinite",
// 				rotateLight: "rotateLight 4s linear infinite",
// 			},
// 		},
// 	},
// 	plugins: [],
// };



/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			center: true,
			padding: "1rem",
			screens: {
				sm: "320px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1440px",
			},
		},
		extend: {
			colors: {
				testpurple: "#6b21a8",
			},
			boxShadow: {
				customGray: "0 20px 40px rgba(128, 128, 128, 0.3)",
				softGray: "0 0 10px rgba(128, 128, 128, 0.2)",
				glowsubtle: "0 0 40px 10px rgba(255, 0, 0, 0.2)",
				test: "0 0 40px 10px rgba(255, 0, 0, 0.6)", // 🔴 червона
			},
			keyframes: {
				glowShadow: {
					"0%, 100%": {
						boxShadow: "0 0 10px rgba(128, 128, 128, 0.2)",
					},
					"50%": {
						boxShadow: "0 0 20px 20px rgba(128, 128, 128, 0.5)",
					},
				},
				glowText: {
					"0%, 100%": {
						color: "rgba(255, 255, 255, 0.6)",
					},
					"50%": {
						color: "rgba(255, 255, 255, 1)",
					},
				},

				rotateLight: {
					from: {
						transform: "rotate(0deg)",
					},
					to: {
						transform: "rotate(360deg)",
					},
				},
			},
			animation: {
				glowShadow: "glowShadow 5s ease-in-out infinite",
				glowText: "glowText 5s ease-in-out infinite",
				rotateLight: "rotateLight 4s linear infinite",
			},
		},
	},
	plugins: [],
};

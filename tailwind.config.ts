import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			screens: {
				sm: { 'max': "560px" },
				md: { 'max': "720px" },
				lg: { 'max': "1280px" },
			},
			colors: {
				"primary-color": "#E3E3E3",
				"secondary-color": "rgb(63, 79, 79)",
				"third-color": "#A27B5C",
			},
		},
	},
	plugins: [],
};
export default config;

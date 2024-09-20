/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{ts,tsx,mdx}"],
	theme: {
		screens: {
			xs: "320px",
			sm: "481px",
			md: "769px",
			lg: "1025px",
		},
		borderRadius: {
			none: "0",
			xs: "2px",
			sm: "4px",
			md: "8px",
			lg: "16px",
			xl: "20px",
			round: "50px",
			circle: "9999px",
		},
		boxShadow: {
			/* Elevation */
			"elevation-raised": "0px 1px 4px 0px rgba(0, 0, 0, 0.1)",
			"elevation-elevated": "0px 4px 8px 0px rgba(0, 0, 0, 0.1)",
			"elevation-floating": "0px 6px 16px 0px rgba(0, 0, 0, 0.1)",
			"elevation-popout": "0px 12px 24px 0px rgba(0, 0, 0, 0.1)",
		},
		colors: {
			currentColor: "currentColor",
			inherit: "inherit",
			transparent: "transparent",
			black: "#000000",
			white: "#FFFFFF",
			brand: {
				vanilla: "#f9ecdc",
			},
		},
		fontSize: {
			"t1-lg": ["3.625rem", "1.2"], // [58px, 70px]
			"t1-md": ["3rem", "1.2"], // [48px, 57px]
			t1: ["2.375rem", "1.2"], // [38px, 45px]
			t2: ["2.25rem", "1.2"], // [36px, 43px]
			t3: ["1.75rem", "1.2"], // [28px, 33px]
			t4: ["1.25rem", "1.5"], // [20px, 30px]
			t5: ["1.125rem", "1.5"], // [18px, 27px]
			t6: ["1rem", "1.5"], // [16px, 24px]
			body: ["1rem", "1.5"], // [16px, 24px]
			"body-sm": [".875rem", "1.5"], // [14px, 21px]
			link: ["1rem", "1.5"], // [16px, 24px]
		},
		extend: {
			spacing: {
				/* Responsive Grid */
				"xs-gutter": "10px",
				"xs-margins": "15px",
				"sm-gutter": "15px",
				"sm-margins": "20px",
				"md-gutter": "20px",
				"md-margins": "20px",
				"lg-gutter": "20px",
				"lg-margins": "calc(max(20px, 5vw))",
				"max-content": "calc(min(1890px, 90vw))",
			},
			gridTemplateColumns: {
				xs: "repeat(2, minmax(0, 1fr))", // 2 columns
				sm: "repeat(4, minmax(0, 1fr))", // 4 columns
				md: "repeat(12, minmax(0, 1fr))", // 12 columns
				lg: "repeat(12, minmax(0, 1fr))", // 12 columns
			},
			backgroundImage: {
				"gradient-linear-bottom":
					"linear-gradient(to bottom, rgba(0,0,0,0),rgba(0,0,0,1))",
				"gradient-linear-left":
					"linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,1))",
			},
			backgroundColor: {
				/* Overlays */
				"overlay-black": "rgba(0,0,0,.5)",
				paper: "url('/backgrounds/paper.png')",
				eames: "url('/backgrounds/eames.png')",
				halftone:
					"url('https://www.transparenttextures.com/patterns/skewed-print.png')",
			},
		},
	},
	plugins: [],
};

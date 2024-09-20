import type { Preview } from "@storybook/react";
import * as Components from "../src/index";
import "../src/styles/index.css";

const preview: Preview = {
	parameters: {
		backgrounds: {
			default: "white",
			values: [
				{
					name: "white",
					value: "#ffffff",
				},
			],
			grid: {
				cellSize: 16,
				opacity: 0.25,
				cellAmount: 16,
				offsetX: 0,
				offsetY: 0,
			},
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		options: {
			storySort: {
				method: "alphabetical",
				order: ["Hooks", "Components", "Utilities", "Sandbox"],
			},
		},
		viewport: {
			viewports: {
				xs: {
					name: "Extra Small (320px)",
					styles: {
						width: "320px",
						height: "480px",
					},
				},
				sm: {
					name: "Small (481px)",
					styles: {
						width: "481px",
						height: "768px",
					},
				},
				md: {
					name: "Medium (769px)",
					styles: {
						width: "769px",
						height: "1024px",
					},
				},
				lg: {
					name: "Large (1025px)",
					styles: {
						width: "1025px",
						height: "1920px",
					},
				},
			},
		},
		reactLive: {
			scope: { Components },
			debug: false,
			fontFamily: "monospace",
		},
	},
};

export default preview;

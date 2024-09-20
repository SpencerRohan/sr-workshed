import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		dts({
			insertTypesEntry: true,
			exclude: [
				"**/*.stories.{ts}",
				"**/*.spec.tsx",
				"**/*.test.tsx",
				"**/sandbox/*",
				"**/storybook/*",
			],
		}),
	],
	css: {
		postcss: {
			plugins: [tailwindcss],
		},
	},
	build: {
		lib: {
			entry: "./src/index.ts",
			name: "workshedui",
			fileName: (format) => `workshedui.${format}.js`,
			formats: ["es", "cjs", "umd"],
		},
		rollupOptions: {
			external: Object.keys(peerDependencies),
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
					tailwindcss: "tailwindcss",
				},
			},
		},
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@constants": path.resolve(__dirname, "./src/constants"),
			"@hooks": path.resolve(__dirname, "./src/hooks"),
			"@workshedui": path.resolve(__dirname, "./src/workshedui"),
			"@sandbox": path.resolve(__dirname, "./src/sandbox"),
			"@styles": path.resolve(__dirname, "./src/styles"),
			"@types": path.resolve(__dirname, "./src/types"),
			"@utils": path.resolve(__dirname, "./src/utils"),
		},
	},
});

// const path = require("path");

module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:react-hooks/recommended",
		"plugin:storybook/recommended",
	],
	ignorePatterns: [
		"dist",
		".eslintrc.cjs",
		"vite.config.ts",
		"jest.config.ts",
		"jest.setup.ts",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		tsconfigRootDir: ".",
		project: ["./tsconfig.json"],
	},
	plugins: ["react-refresh", "@typescript-eslint"],
	root: true,
	rules: {
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
	},
	overrides: [
		{
			files: ["**/*.test.tsx"],
			env: { jest: true, node: true },
			extends: [
				"plugin:jest/recommended",
				"plugin:testing-library/react",
				"plugin:jest-dom/recommended",
			],
			rules: {
				"@typescript-eslint/no-unsafe-call": "off",
				"testing-library/no-manual-cleanup": "off",
				"testing-library/no-render-in-lifecycle": "off",
			},
		},
	],
};

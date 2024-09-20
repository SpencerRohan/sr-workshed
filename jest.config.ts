export default {
	testEnvironment: "jest-environment-jsdom",
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},
	setupFilesAfterEnv: ["./jest.setup.ts"],
	clearMocks: true,
	// collectCoverage: true,
	rootDir: "./",
	roots: ["<rootDir>"],
	moduleNameMapper: {
		"@/(.*)$": "<rootDir>/src/$1",
	},
};

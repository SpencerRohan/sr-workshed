import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const customTwMerge = extendTailwindMerge({
	override: {},
	extend: {
		classGroups: {
			"font-size": [
				"text-t1-lg",
				"text-t1-md",
				"text-t1-sm",
				"text-t2",
				"text-t3",
				"text-t4",
				"text-t5",
				"text-t6",
				"text-body",
				"text-body-sm",
				"text-link",
			],
			"backdrop-filter": [
				"bg-gradient-linear-bottom",
				"bg-gradient-linear-left",
			],
		},
	},
});

/**
 * Utility: cn
 *
 * Combines "clsx" library with "twMerge" to allow for overrides and css
 * combinations at the same time.
 */
const cn = (...inputs: ClassValue[]) => {
	return customTwMerge(clsx(inputs));
};

export default cn;

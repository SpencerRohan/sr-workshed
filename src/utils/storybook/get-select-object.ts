import { Control } from "@storybook/blocks";
import { InputType } from "@storybook/types";

/**
 * Storybook Utility: getSelectObject
 */
const getSelectObject = (options: object, summary?: string) => {
	return {
		options: Object.values(options) as Partial<InputType["options"]>,
		control: {
			type: "select",
		} as Partial<Control>,
		table: { type: { ...(summary && { summary }) } },
	};
};

export default getSelectObject;

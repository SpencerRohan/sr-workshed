import { WithDataTestId } from "@/types/data-testid-attribute";
import { ComponentType, HTMLProps } from "react";

/**
 * DangerSetProps
 */
export type DangerSetProps = {
	html: string; // Used as __html value
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	as?: string | ComponentType<any>;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	asProps?: any;
} & Omit<WithDataTestId<HTMLProps<HTMLElement>>, "as">;

/**
 * Component: DangerSet
 *
 * Builds a dangerouslySetInnerHTML HTMLElement.
 *
 * WARNING: It is possible to utilize "as" with any react component, but use
 * with caution as not all components will play nice with DangerSet.  "asProps"
 * will allow for passthrough of props to react component.  "children" props
 * being required is a good indication that the component can NOT be used with
 * "as".
 */
const DangerSet = ({
	html,
	as: Tag = "span",
	asProps = {},
	...props
}: DangerSetProps) => {
	if (!html) {
		return null;
	}

	return (
		<Tag
			{...asProps}
			{...props}
			dangerouslySetInnerHTML={{
				__html: html,
			}}
		/>
	);
};

export default DangerSet;

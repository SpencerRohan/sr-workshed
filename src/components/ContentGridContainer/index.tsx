import { WithDataTestId } from "@/types/data-testid-attribute";
import cn from "@/utils/cn";
import { HTMLAttributes, ReactNode } from "react";

export type ContentGridContainerProps = {
	children: ReactNode;
} & WithDataTestId<HTMLAttributes<HTMLDivElement>>;

/**
 * Component: ContentGridContainer
 *
 * Allows for responsive grid usage with display:grid
 */
const ContentGridContainer = ({
	children,
	...props
}: ContentGridContainerProps) => {
	if (!children) {
		return null;
	}

	return (
		<div className="flex justify-center w-full">
			<div
				className={cn(
					"grid grid-cols-xs sm:grid-cols-sm md:grid-cols-md lg:grid-cols-lg",
					"gap-x-xs-gutter sm:gap-x-sm-gutter md:gap-x-md-gutter lg:gap-x-lg-gutter",
					"mx-xs-margins sm:mx-sm-margins md:mx-md-margins lg:mx-lg-margins",
					"max-w-max-content w-full",
					props?.className,
				)}
			>
				{children}
			</div>
		</div>
	);
};

export default ContentGridContainer;

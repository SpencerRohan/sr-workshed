import { WithDataTestId } from "@/types/data-testid-attribute";
import cn from "@/utils/cn";
import { FC, HTMLProps, ReactNode } from "react";
import { TitleHeadings, TitleVariants } from "./types";

export type TitleProps = {
	children: ReactNode;
	as?: TitleHeadings; // Defaults to h1
	title?: TitleVariants; // Defaults to 1
} & WithDataTestId<HTMLProps<HTMLHeadingElement>>;

/**
 * Component: Title
 *
 * Primary means to create a HTML Heading Element.  This allows separation of
 * heading semantics and styles, which is key for accessibility and SEO.
 */
const Title: FC<TitleProps> = ({
	children,
	as: Tag = "h1",
	title = "1",
	...props
}: TitleProps) => {
	return (
		<Tag
			{...props}
			className={cn(
				{
					"text-t1-sm md:text-t1-md lg:text-t1-lg": title === "1",
					"text-t2": title === "2",
					"text-t3": title === "3",
					"text-t4": title === "4",
					"text-t5": title === "5",
					"text-t6": title === "6",
				},
				props.className,
			)}
		>
			{children}
		</Tag>
	);
};

export default Title;

import { Meta, StoryObj } from "@storybook/react";
import { RefObject, useRef } from "react";
import useAccordion from "../use-accordion";

const DemoAccordionPanel = ({
	parentRef,
}: {
	parentRef: RefObject<HTMLUListElement>;
}) => {
	const accordionObj = useAccordion({
		accordionGroupObj: { parentRef: parentRef },
	});

	return (
		<li>
			<button
				type="button"
				{...accordionObj.getAccordionTriggerProps()}
				className="border border-solid border-black w-full"
			>
				Trigger
			</button>
			{accordionObj.isExpanded && (
				<div
					{...accordionObj.getAccordionTargetProps()}
					className="w-full border border-solid border-harris-gray-300"
				>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat
						<span>
							{" "}
							<a href="javascript:">See More</a>.
						</span>
					</p>
					<p>
						Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
						cupidatat non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</p>
				</div>
			)}
		</li>
	);
};

const DemoAccordion = () => {
	const parentRef = useRef<HTMLUListElement>(null);

	return (
		<ul ref={parentRef}>
			<DemoAccordionPanel parentRef={parentRef} />
			<DemoAccordionPanel parentRef={parentRef} />
		</ul>
	);
};

const meta = {
	title: "Hooks/useAccordion",
	component: DemoAccordion,
	tags: [],
	argTypes: {},
} satisfies Meta<typeof DemoAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {};

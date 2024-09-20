/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Meta, StoryObj } from "@storybook/react";
import { useRef, useState } from "react";
import useDisclosure from "../use-disclosure";

const DemoDisclosure = () => {
	const [activeTrigger, setActiveTrigger] = useState();
	const disclosureGroupRef = useRef();
	const disclosure = useDisclosure({
		disclosureGroupObj: {
			activeTrigger,
			setActiveTrigger,
			parentRef: disclosureGroupRef,
		},
	});

	const triggerProps = disclosure.getTriggerProps();
	const disclosureOnClick = triggerProps?.onClick;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	triggerProps.onClick = (...args: any) => {
		console.log("trigger props click", args);
		disclosureOnClick?.(...args);
	};

	return (
		<nav aria-label="example">
			<ul className="w-full flex items-center px-16">
				<li className="flex flex-1 flex-col">
					<button
						type="button"
						className="border border-black"
						{...triggerProps}
						onKeyDown={disclosure.handleTargetItemKeyDown}
						ref={disclosure.triggerRef}
					>
						<span>Trigger</span>
					</button>

					{disclosure.isOpen && (
						<nav aria-label="sub-nav 1">
							<ul
								{...disclosure.getTargetProps()}
								ref={disclosure.targetRef}
								onKeyDown={disclosure.handleTargetItemKeyDown}
								className="border border-harris-gray-400"
							>
								<li>
									<a href="javascript:">Link 1</a>
								</li>
								<li>
									<a href="javascript:">Link 2</a>
								</li>
							</ul>
						</nav>
					)}
				</li>
			</ul>
		</nav>
	);
};
const meta = {
	title: "Hooks/useDisclosure",
	component: DemoDisclosure,
	tags: [],
	argTypes: {},
} satisfies Meta<typeof DemoDisclosure>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {};

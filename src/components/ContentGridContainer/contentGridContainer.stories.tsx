import type { Meta, StoryObj } from "@storybook/react";
import ContentGrid, { ContentGridContainerProps } from "./index";

const meta = {
	title: "Components/ContentGridContainer",
	tags: ["autodocs"],
	component: ContentGrid,
	parameters: {
		layout: "fullscreen",
	},
	args: {
		children: "",
	},
} satisfies Meta<ContentGridContainerProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ContentGridContainer: Story = {
	render: () => (
		<>
			<div className="w-full bg-harris-dblue-500 z-0">
				<ContentGrid className="h-dvh bg-harris-lblue-400">
					<div className="h-full w-full bg-white" />
					<div className="h-full w-full bg-white" />
					<div className="h-full w-full bg-white" />
					<div className="h-full w-full bg-white" />
					<div className="h-full w-full bg-white" />
					<div className="h-full w-full bg-white" />
					<div className="h-full w-full bg-white" />
					<div className="h-full w-full bg-white" />
					<div className="h-full w-full bg-white" />
					<div className="h-full w-full bg-white" />
					<div className="h-full w-full bg-white" />
					<div className="h-full w-full bg-white" />
				</ContentGrid>
			</div>
			<div className="w-full bg-transparent z-10  top-0 bottom-0 right-0 left-0 absolute">
				<ContentGrid className="bg-transparent gap-y-4">
					<div className="w-full bg-harris-red-300 col-span-1">
						This is a col-span-1
					</div>
					<div className="w-full bg-harris-red-300 col-span-2 row-start-2">
						This is a col-span-2
					</div>
					<div className="w-full bg-harris-red-300 col-span-2 sm:col-span-3 row-start-3">
						This is a col-span-2 sm:col-span-3
					</div>
					<div className="w-full bg-harris-red-300 col-span-2 sm:col-span-4 row-start-4">
						This is a col-span-2 sm:col-span-4
					</div>
					<div className="w-full bg-harris-red-300 col-span-2 sm:col-span-4 md:col-span-5 row-start-5">
						This is a col-span-2 sm:col-span-4 md:col-span-5
					</div>
					<div className="w-full bg-harris-red-300 col-span-2 sm:col-span-4 md:col-span-6 row-start-6">
						This is a col-span-2 sm:col-span-4 md:col-span-6
					</div>
					<div className="w-full bg-harris-red-300 col-span-2 sm:col-span-4 md:col-span-7 row-start-7">
						This is a col-span-2 sm:col-span-4 md:col-span-7
					</div>
					<div className="w-full bg-harris-red-300 col-span-2 sm:col-span-4 md:col-span-8 row-start-8">
						This is a col-span-2 sm:col-span-4 md:col-span-8
					</div>
					<div className="w-full bg-harris-red-300 col-span-2 sm:col-span-4 md:col-span-9 row-start-9">
						This is a col-span-2 sm:col-span-4 md:col-span-9
					</div>
					<div className="w-full bg-harris-red-300 col-span-2 sm:col-span-4 md:col-span-10 row-start-10">
						This is a col-span-2 sm:col-span-4 md:col-span-10
					</div>
					<div className="w-full bg-harris-red-300 col-span-2 sm:col-span-4 md:col-span-11 row-start-11">
						This is a col-span-2 sm:col-span-4 md:col-span-11
					</div>
					<div className="w-full bg-harris-red-300 col-span-2 sm:col-span-4 md:col-span-12 row-start-12">
						This is a col-span-2 sm:col-span-4 md:col-span-12
					</div>
					<div className="w-full bg-harris-red-300 col-span-2 col-start-1 sm:col-start-2 md:col-start-6 row-start-13">
						This is a col-span-2 col-start-1 sm:col-start-2 md:col-start-6
					</div>
				</ContentGrid>
			</div>
		</>
	),
};

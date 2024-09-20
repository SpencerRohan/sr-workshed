import type { Meta, StoryObj } from "@storybook/react";
import DangerSetComponent from "./index";

const meta = {
	title: "Components/DangerSet",
	component: DangerSetComponent,
	tags: ["autodocs"],
	parameters: {},
	args: {
		html: "Some&nbsp;json string",
		asProps: {},
	},
} satisfies Meta<typeof DangerSetComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DangerSet: Story = {
	render: (args) => {
		return <DangerSetComponent {...args} />;
	},
};

export const AsDiv: Story = {
	args: {
		as: "div",
	},
	render: (args) => {
		return <DangerSetComponent {...args} />;
	},
};

export const AsAnchorLink: Story = {
	args: {
		as: "a",
		asProps: { href: "javascript:", onClick: () => console.log("click") },
	},
	render: (args) => {
		return <DangerSetComponent {...args} />;
	},
};

// export const AsTitle: Story = {
// 	render: ({html}) => {
// 		return <DangerSet html={html} as={Title} asProps={{ title: 2, as: "h6" }} />;
// 	},
// };

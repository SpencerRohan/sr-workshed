import type { Meta, StoryObj } from "@storybook/react";
import ReactSandboxComponent from "./index";

const meta = {
	title: "Sandbox/React Live",
	component: ReactSandboxComponent,
	tags: [],
} satisfies Meta<typeof ReactSandboxComponent>;

export default meta;
type Story = StoryObj<typeof meta>;
export const ReactLive: Story = {};

import getSelectObject from "@/utils/storybook/get-select-object";
import type { Meta, StoryObj } from "@storybook/react";
import { TITLE_HEADINGS, TITLE_VARIANTS } from "./constants";
import TitleComponent, { TitleProps } from "./index";

const meta = {
	title: "Components/Title",
	component: TitleComponent,
	tags: ["autodocs"],
	args: {
		children: "This is a heading rendered through the Title component",
	},
	argTypes: {
		as: {
			...getSelectObject(TITLE_HEADINGS),
			table: { type: { summary: Object.values(TITLE_HEADINGS).join(" | ") } },
		},
		title: {
			...getSelectObject(TITLE_VARIANTS),
			table: { type: { summary: Object.values(TITLE_VARIANTS).join(" | ") } },
		},
	},
} satisfies Meta<TitleProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Title: Story = {
	render: ({ children, ...args }) => (
		<TitleComponent {...args}>{children}</TitleComponent>
	),
};

// const Template = (args) => {
//   const { as, title, content, fontWeight } = args;
//   const weight = fontWeight ? `font-${fontWeight}` : "";

//   return (
//     <Title as={as} title="t"tle} className={weight}>
//       {content || `This is a heading ${as} styled as a Title ${title}`}
//     </Title>
//   );
// };

// const TailwindTemplate = (args) => {
//   const { fontWeight } = args;
//   const weight = fontWeight ? `font-${fontWeight}` : "";

//   return (
//     <div>
//       <h1 className={`text-t1 md:text-t1-md lg:text-t1-lg ${weight}`}>
//         Heading h1 | Title 1
//       </h1>
//       <h2 className={`text-t2 ${weight}`}>Heading h2 | Title 2</h2>
//       <h3 className={`text-t3 ${weight}`}>Heading h3 | Title 3</h3>
//       <h4 className={`text-t4 ${weight}`}>Heading h4 | Title 4</h4>
//       <h5 className={`text-t5 ${weight}`}>Heading h5 | Title 5</h5>
//       <h6 className={`text-t6 ${weight}`}>Heading h6 | Title 6</h6>
//     </div>
//   );
// };

// const Title = (args) => {
//   const { fontWeight } = args;
//   const weight = fontWeight ? `font-${fontWeight}` : "";

//   return (
//     <div>
//       <Title as="h1" title="1" className={weight}>
//         This is a Title 1
//       </Title>
//       <Title as="h1" title="2" className={weight}>
//         This is a Title 2
//       </Title>
//       <Title as="h1" title="3" className={weight}>
//         This is a Title 3
//       </Title>
//       <Title as="h1" title="4" className={weight}>
//         This is a Title 4
//       </Title>
//       <Title as="h1" title="5" className={weight}>
//         This is a Title 5
//       </Title>
//       <Title as="h1" title="6" className={weight}>
//         This is a Title 6
//       </Title>
//     </div>
//   );
// };

// export const Default = Template.bind({});
// export const Guide = GuideTemplate.bind({});
// export const WithTailwind = TailwindTemplate.bind({});

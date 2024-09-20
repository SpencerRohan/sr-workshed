import conditionalDescribe from "@/utils/testing-library/conditional-describe";
import { render, screen } from "@testing-library/react";
import { TITLE_HEADINGS, TITLE_VARIANTS } from "./constants";

import Title from "./index";

const TITLE_TEST_ID = "title";
const HeadingCollection = () => (
	<>
		<Title>Heading Default</Title>
		{Object.values(TITLE_VARIANTS).map((variant, index) => {
			return (
				<Title
					as={Object.values(TITLE_HEADINGS)[index]}
					title={variant}
					key={index}
				>
					{`Heading h${index + 1} / Title ${index + 1}`}
				</Title>
			);
		})}
		<Title as="h1" title="2">
			Heading h1 / Title 2
		</Title>
		<Title
			as="h2"
			title="4"
			className="text-harris-dblue-400 text-center"
			aria-label="Title with additional settings"
		>
			<span>Title w/additional settings</span>
		</Title>
	</>
);

describe("Title", () => {
	describe("renders", () => {
		it("the proper default heading", () => {
			render(<Title data-testid={TITLE_TEST_ID}>Heading h1 / Title 1</Title>);
			const subject = screen.getByTestId(TITLE_TEST_ID);
			expect(subject).toBeInTheDocument();
			expect(subject.tagName).toEqual("H1");
		});

		it("the proper heading", () => {
			render(
				<Title as="h2" title="4" data-testid={TITLE_TEST_ID}>
					Heading h2 / Title 4
				</Title>,
			);
			const subject = screen.getByTestId(TITLE_TEST_ID);
			expect(subject).toBeInTheDocument();
			expect(subject.tagName).toEqual("H2");
		});

		it("the proper class", () => {
			render(
				<Title
					as="h2"
					title="4"
					data-testid={TITLE_TEST_ID}
					className="text-h6"
				>
					Heading h2 / Title 4
				</Title>,
			);
			const subject = screen.getByTestId(TITLE_TEST_ID);
			expect(subject).toBeInTheDocument();
			expect(subject).toHaveClass("text-h6 md:text-t4-md lg:text-t4-lg");
		});

		conditionalDescribe("snapshot", () => {
			it("matches", () => {
				const { asFragment } = render(<HeadingCollection />);
				expect(asFragment()).toMatchSnapshot();
			});
		});
	});
});

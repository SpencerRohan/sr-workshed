import { cleanup, render, screen } from "@testing-library/react";
import Title from "../Title";
import DangerSet from "./index";

const JSON = "Some&nbsp;json string";
const DANGER_SET_TEST_ID = "dangerSet";

describe("DangerSet", () => {
	beforeEach(() => {
		render(<DangerSet data-testid={DANGER_SET_TEST_ID} html={JSON} />);
	});

	describe("renders", () => {
		it("a dangerouslySetsInnerHTML component", () => {
			const subject = screen.getByTestId(DANGER_SET_TEST_ID);
			expect(subject.tagName).toBe("SPAN");
		});

		it("the proper inner content", () => {
			const subject = screen.getByTestId(DANGER_SET_TEST_ID);
			expect(subject.innerHTML).toBe("Some&nbsp;json string");
		});

		it("the proper classes", () => {
			cleanup();
			render(
				<DangerSet
					className="text-t3 text-harris-bblue-400"
					data-testid={DANGER_SET_TEST_ID}
					html={JSON}
				/>,
			);

			const subject = screen.getByTestId(DANGER_SET_TEST_ID);
			expect(subject).toHaveClass("text-t3 text-harris-bblue-400");
		});

		it("nothing if html is missing", () => {
			cleanup();
			render(<DangerSet data-testid={DANGER_SET_TEST_ID} html="" />);

			const subject = screen.queryByTestId(DANGER_SET_TEST_ID);
			expect(subject).not.toBeInTheDocument();
		});

		it("a Title component if used with as", () => {
			cleanup();
			render(
				<DangerSet
					as={Title}
					asProps={{
						as: "h6",
						title: "3",
						className: "text-t1-sm text-harris-bblue-400",
					}}
					data-testid={DANGER_SET_TEST_ID}
					html={JSON}
				/>,
			);
			const subject = screen.getByTestId(DANGER_SET_TEST_ID);
			expect(subject.tagName).toBe("H6");
			expect(subject).toHaveClass(
				"text-t1-sm md:text-t3-md lg:text-t3-lg text-harris-bblue-400",
			);
		});
	});
});

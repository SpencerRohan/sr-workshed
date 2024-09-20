import { render, screen } from "@testing-library/react";
import cn from "../cn";

const TEST_ID = "cn-test-id";

describe("Utility: cn", () => {
	it("removes duplicate styles", () => {
		render(<div data-testid={TEST_ID} className={cn("bg-black bg-white")} />);

		const subject = screen.getByTestId(TEST_ID);
		expect(subject).toHaveClass("bg-white");
		expect(subject).not.toHaveClass("bg-black");
	});

	it("removes duplicate styles with a second argument", () => {
		render(
			<div data-testid={TEST_ID} className={cn("bg-black", "bg-white")} />,
		);

		const subject = screen.getByTestId(TEST_ID);
		expect(subject).toHaveClass("bg-white");
		expect(subject).not.toHaveClass("bg-black");
	});

	it("removes duplicate styles within an object", () => {
		render(
			<div
				data-testid={TEST_ID}
				className={cn("bg-black bg-white", { "bg-transparent": true })}
			/>,
		);

		const subject = screen.getByTestId(TEST_ID);
		expect(subject).toHaveClass("bg-transparent");
		expect(subject).not.toHaveClass("bg-black");
		expect(subject).not.toHaveClass("bg-white");
	});
});

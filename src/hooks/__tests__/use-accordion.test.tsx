import Title from "@/components/Title";
import useAccordion from "@/hooks/use-accordion";
import { fireEvent, render, screen } from "@testing-library/react";

const ACCORDION_TEST_IDS = {
	TARGET: "target",
	TRIGGER: "trigger",
};

const TestAccordion = ({ initAccordionObj = {} }) => {
	const accordionObj = useAccordion(initAccordionObj);

	return (
		<div>
			<Title as="h3" title="6">
				<button
					type="button"
					{...accordionObj.getAccordionTriggerProps()}
					data-testid={ACCORDION_TEST_IDS.TRIGGER}
				>
					Trigger
				</button>
			</Title>
			{accordionObj.isExpanded && (
				<div
					{...accordionObj.getAccordionTargetProps()}
					data-testid={ACCORDION_TEST_IDS.TARGET}
				>
					<p>Target</p>
				</div>
			)}
		</div>
	);
};

describe("Hook: useAccordion", () => {
	describe("renders", () => {
		beforeEach(() => {
			render(<TestAccordion />);
		});

		it("the proper attributes by default", () => {
			const trigger = screen.getByTestId(ACCORDION_TEST_IDS.TRIGGER);
			const target = screen.queryByTestId(ACCORDION_TEST_IDS.TARGET);

			expect(trigger).toHaveAttribute("aria-controls");
			expect(trigger).toHaveAttribute("aria-expanded");
			expect(target).not.toBeInTheDocument();
		});
	});

	describe("interaction", () => {
		it("click trigger activates target", () => {
			render(<TestAccordion />);
			fireEvent.click(screen.getByTestId(ACCORDION_TEST_IDS.TRIGGER));
			const target = screen.getByTestId(ACCORDION_TEST_IDS.TARGET);
			expect(target).toBeInTheDocument();
		});

		it("calls onClick when trigger is activated", () => {
			const handleClick = jest.fn();
			render(<TestAccordion initAccordionObj={{ onClick: handleClick }} />);
			fireEvent.click(screen.getByTestId(ACCORDION_TEST_IDS.TRIGGER));
			expect(handleClick).toHaveBeenCalledTimes(1);
		});
	});
});

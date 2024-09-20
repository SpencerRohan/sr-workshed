import { NAV_KEYS } from "@/constants/navigation";
import { fireEvent, render, screen } from "@testing-library/react";
import useDisclosure from "../use-disclosure";

const DISCLOSURE_TEST_IDS = {
	TARGET: "target",
	TRIGGER: "trigger",
	TARGET_CONTAINER: "targetContainer",
};

const TestDisclosure = ({ initDisclosureObj = {} }) => {
	const disclosure = useDisclosure(initDisclosureObj);

	return (
		<>
			<button
				type="button"
				data-testid={DISCLOSURE_TEST_IDS.TRIGGER}
				{...disclosure.getTriggerProps()}
				onKeyDown={disclosure.handleTriggerItemKeyDown}
				ref={disclosure.triggerRef}
			>
				Trigger
			</button>
			{disclosure.isOpen && (
				<div data-testid={DISCLOSURE_TEST_IDS.TARGET_CONTAINER}>
					<ul
						data-testid={DISCLOSURE_TEST_IDS.TARGET}
						ref={disclosure.targetRef}
						onKeyDown={disclosure.handleTargetItemKeyDown}
						{...disclosure.getTargetProps()}
					>
						<li>1</li>
						<li>2</li>
					</ul>
				</div>
			)}
		</>
	);
};

describe("Hook: useDisclosure", () => {
	describe("renders", () => {
		it("the proper attributes by default", () => {
			render(<TestDisclosure />);

			const trigger = screen.getByTestId(DISCLOSURE_TEST_IDS.TRIGGER);
			const target = screen.queryByTestId(DISCLOSURE_TEST_IDS.TARGET);
			const targetContainer = screen.queryByTestId(
				DISCLOSURE_TEST_IDS.TARGET_CONTAINER,
			);
			expect(trigger).toHaveAttribute("aria-controls");
			expect(trigger).toHaveAttribute("aria-expanded");
			expect(trigger).toHaveAttribute("role", "button");
			expect(target).not.toBeInTheDocument();
			expect(targetContainer).not.toBeInTheDocument();
		});

		it("the target if initial initOpen", () => {
			render(<TestDisclosure initDisclosureObj={{ initOpen: true }} />);

			const trigger = screen.getByTestId(DISCLOSURE_TEST_IDS.TRIGGER);
			const target = screen.queryByTestId(DISCLOSURE_TEST_IDS.TARGET);
			const targetContainer = screen.queryByTestId(
				DISCLOSURE_TEST_IDS.TARGET_CONTAINER,
			);

			expect(trigger).toHaveAttribute("aria-controls");
			expect(trigger).toHaveAttribute("aria-expanded");
			expect(trigger).toHaveAttribute("role", "button");
			expect(target).toBeInTheDocument();
			expect(targetContainer).toBeInTheDocument();
			expect(target?.id).toMatch(/disclosure-:*:/);
		});

		it("the proper target id", () => {
			render(
				<TestDisclosure initDisclosureObj={{ initOpen: true, id: "myID" }} />,
			);

			const target = screen.queryByTestId(DISCLOSURE_TEST_IDS.TARGET);

			expect(target?.id).toBe("myID");
		});
	});

	describe("interaction", () => {
		it("clicking trigger activates target", () => {
			render(<TestDisclosure />);

			// Click Trigger to Open
			fireEvent.click(screen.getByTestId(DISCLOSURE_TEST_IDS.TRIGGER));
			const target = screen.getByTestId(DISCLOSURE_TEST_IDS.TARGET);
			expect(target).toBeInTheDocument();

			// Click Trigger to Close
			fireEvent.click(screen.getByTestId(DISCLOSURE_TEST_IDS.TRIGGER));
			expect(target).not.toBeInTheDocument();
		});

		it("hitting 'escape' closes target", () => {
			render(<TestDisclosure />);

			// Click Trigger to Open
			fireEvent.click(screen.getByTestId(DISCLOSURE_TEST_IDS.TRIGGER));
			const target = screen.getByTestId(DISCLOSURE_TEST_IDS.TARGET);
			expect(target).toBeInTheDocument();

			// Hitting "Escape" to Close
			fireEvent.keyDown(screen.getByTestId(DISCLOSURE_TEST_IDS.TRIGGER), {
				key: NAV_KEYS.ESCAPE,
			});
			expect(target).not.toBeInTheDocument();
		});

		it("calls onClick when trigger is activated", () => {
			const handleClick = jest.fn();
			render(<TestDisclosure initDisclosureObj={{ onClick: handleClick }} />);
			fireEvent.click(screen.getByTestId(DISCLOSURE_TEST_IDS.TRIGGER));
			expect(handleClick).toHaveBeenCalledTimes(1);
		});

		it("calls onClick prop when trigger clicked", () => {
			const handleClick = jest.fn();
			render(<TestDisclosure initDisclosureObj={{ onClick: handleClick }} />);
			fireEvent.click(screen.getByTestId(DISCLOSURE_TEST_IDS.TRIGGER));
			expect(handleClick).toHaveBeenCalledTimes(1);
		});
	});
});

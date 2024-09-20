import { render, screen } from "@testing-library/react";
import useCustomId from "../use-custom-id";

const USE_ID_TEST_ID = "useId";

describe("Hook: useCustomId", () => {
	describe("renders", () => {
		it("a unique id", () => {
			const Component = () => {
				const id = useCustomId();

				return (
					<span id={id} data-testid={USE_ID_TEST_ID}>
						Test
					</span>
				);
			};

			render(<Component />);

			const subject = screen.getByTestId(USE_ID_TEST_ID);
			expect(subject.id).toMatch(/:*:/);
		});

		it("a passthrough Id", () => {
			const Component = () => {
				const id = useCustomId("", "myId");

				return (
					<span id={id} data-testid={USE_ID_TEST_ID}>
						Test
					</span>
				);
			};

			render(<Component />);

			const subject = screen.getByTestId(USE_ID_TEST_ID);
			expect(subject.id).toBe("myId");
		});

		it("a prefix", () => {
			const Component = () => {
				const id = useCustomId("prefix");

				return (
					<span id={id} data-testid={USE_ID_TEST_ID}>
						Test
					</span>
				);
			};

			render(<Component />);

			const subject = screen.getByTestId(USE_ID_TEST_ID);
			expect(subject.id).toMatch(/prefix-:*:/);
		});
	});
});

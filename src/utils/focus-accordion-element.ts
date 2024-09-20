/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FOCUS_DIRECTIONS } from "@/constants/navigation";
import { RefObject } from "react";

/**
 * Utility: focusAccordionElement
 *
 * Handle focus of accordion patterns.
 *
 * @param ref React useRef();
 * @param direction {string} target direction for next focus state.
 */
const focusAccordionElement = (
	ref: RefObject<any>,
	direction: (typeof FOCUS_DIRECTIONS)[keyof typeof FOCUS_DIRECTIONS],
) => {
	const elementQuery = "button[aria-controls]";

	if (document.activeElement && ref.current) {
		const focusableCollection = Array.prototype.filter.call(
			ref.current.querySelectorAll(elementQuery),
			(element) =>
				element.offsetWidth > 0 ||
				element.offsetHeight > 0 ||
				element === document.activeElement,
		);

		const index = focusableCollection.indexOf(document.activeElement);

		switch (direction) {
			case FOCUS_DIRECTIONS.NEXT:
				if (focusableCollection.length - 1 > index) {
					focusableCollection[index + 1].focus();
				}
				break;
			case FOCUS_DIRECTIONS.PREV:
				if (index > 0) {
					focusableCollection[index - 1].focus();
				}
				break;
			case FOCUS_DIRECTIONS.FIRST:
				focusableCollection[0].focus();
				break;
			case FOCUS_DIRECTIONS.LAST:
				focusableCollection[focusableCollection.length - 1].focus();
				break;
		}
	}
};

export default focusAccordionElement;

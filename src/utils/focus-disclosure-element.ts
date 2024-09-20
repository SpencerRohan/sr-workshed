/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FOCUS_DIRECTIONS } from "@/constants/navigation";
import { RefObject } from "react";

/**
 * Utility: focusDisclosureElement
 *
 * Handle focus of active and available list items in nav.
 *
 * @param ref React useRef();
 * @param direction {string} target direction for next focus state.
 * @param isInfiniteFocus {bool} if true round focus state back to index 0
 */
const focusDisclosureElement = (
	ref: RefObject<any>,
	direction: (typeof FOCUS_DIRECTIONS)[keyof typeof FOCUS_DIRECTIONS],
	topLevelFocus = false,
	isInfiniteFocus = false,
) => {
	const elementQuery = topLevelFocus
		? "button[aria-controls]"
		: "a:not([disabled]), button:not([disabled]), input:not([disabled])";
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
			case FOCUS_DIRECTIONS.FIRST:
				focusableCollection[0].focus();
				break;
			case FOCUS_DIRECTIONS.LAST:
				focusableCollection[focusableCollection.length - 1].focus();
				break;
			case FOCUS_DIRECTIONS.NEXT:
				if (index > -1 && index + 1 < focusableCollection.length) {
					focusableCollection[index + 1].focus();
					break;
				}

				if (isInfiniteFocus) {
					focusableCollection[0].focus();
				}
				break;
			case FOCUS_DIRECTIONS.PREV:
				if (index - 1 > -1) {
					focusableCollection[index - 1].focus();
					break;
				}

				if (isInfiniteFocus) {
					focusableCollection[focusableCollection.length - 1].focus();
				}
				break;
		}
	}
};

export default focusDisclosureElement;

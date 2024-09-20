// TODO: See if eslint-disabled can be limited, the hook was meant for a wide variety of use cases, couldn't find a proper way around <any> tags, these are good rules to have on the entire project though
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { FOCUS_DIRECTIONS, NAV_KEYS } from "@/constants/navigation";
import { Booleanish } from "@/types/booleanish";
import callAllHandlers from "@/utils/call-all-handlers";
import focusAccordionElement from "@/utils/focus-accordion-element";
import { KeyboardEvent, RefObject, useEffect, useRef, useState } from "react";
import useCustomId from "./use-custom-id";

export type AccordionProps = {
	initIsExpanded?: boolean; // Defaults to false
	onClick?: () => void;
	id?: string;
	accordionGroupObj?: {
		activeTrigger?: RefObject<any>;
		// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
		setActiveTrigger?: (ref: any | null) => void;
		parentRef: RefObject<any>;
	};
};

/**
 *  Hook: useAccordion
 *
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/accordion/examples/accordion/
 */
const useAccordion = ({
	id: idProp,
	onClick,
	initIsExpanded = false,
	accordionGroupObj,
}: AccordionProps) => {
	const { activeTrigger, setActiveTrigger, parentRef } =
		accordionGroupObj || {};
	const [isExpanded, setIsExpanded] = useState(initIsExpanded);
	// Handles onClick Toggle
	const handleTriggerClick = () => setIsExpanded(!isExpanded);
	const triggerId = useCustomId("accordion-button", idProp);
	const targetId = useCustomId("accordion-target", idProp);
	const targetRef = useRef<any>(null);
	const triggerRef = useRef<any>(null);

	useEffect(() => {
		if (setActiveTrigger && activeTrigger?.current !== triggerRef.current) {
			setIsExpanded(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeTrigger]);

	useEffect(() => {
		if (isExpanded && setActiveTrigger) {
			setActiveTrigger(triggerRef);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isExpanded]);

	/**
	 * Keydown Event listener to handle nav item interaction.
	 *
	 * @param event {KeyboardEvent} KeyDown Event listener
	 */
	const handleKeyDownPress = (event: KeyboardEvent) => {
		if (
			event.ctrlKey ||
			event.altKey ||
			event.metaKey ||
			event.key === NAV_KEYS.SPACE ||
			event.key === NAV_KEYS.RETURN
		) {
			return;
		}

		if (!event.shiftKey) {
			if (parentRef) {
				switch (event.key) {
					case NAV_KEYS.ARROW_UP:
						event.preventDefault();
						focusAccordionElement(parentRef, FOCUS_DIRECTIONS.PREV);
						break;
					case NAV_KEYS.ARROW_DOWN:
						event.preventDefault();
						focusAccordionElement(parentRef, FOCUS_DIRECTIONS.NEXT);
						break;
					case NAV_KEYS.HOME:
						event.preventDefault();
						focusAccordionElement(parentRef, FOCUS_DIRECTIONS.FIRST);
						break;
					case NAV_KEYS.END:
						event.preventDefault();
						focusAccordionElement(parentRef, FOCUS_DIRECTIONS.LAST);
						break;
				}
			}
		}
	};

	return {
		isExpanded,
		setIsExpanded,
		handleKeyDownPress,
		getAccordionTriggerProps: (accordionProps: any = {}) => ({
			...accordionProps,
			id: triggerId,
			"aria-expanded": isExpanded as Booleanish,
			"aria-controls": targetId,
			onClick: callAllHandlers(
				handleTriggerClick,
				accordionProps?.onClick,
				onClick,
			),
		}),
		getAccordionTargetProps: (targetProps: any = {}) => ({
			...targetProps,
			id: targetId,
			"aria-labelledby": triggerId,
			role: "region",
		}),
		triggerRef,
		targetRef,
	};
};

export default useAccordion;

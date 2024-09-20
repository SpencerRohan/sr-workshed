// TODO: See if eslint-disabled can be limited, the hook was meant for a wide variety of use cases, couldn't find a proper way around <any> tags, these are good rules to have on the entire project though
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { FOCUS_DIRECTIONS, NAV_KEYS } from "@/constants/navigation";
import { Booleanish } from "@/types/booleanish";
import callAllHandlers from "@/utils/call-all-handlers";
import focusDisclosureElement from "@/utils/focus-disclosure-element";
import {
	KeyboardEvent,
	MouseEvent,
	RefObject,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";
import useCustomId from "./use-custom-id";

export type DisclosureProps = {
	initOpen?: boolean; // Defaults to false
	onClick?: () => void;
	id?: string;
	disclosureGroupObj?: {
		activeTrigger?: RefObject<any>;
		// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
		setActiveTrigger?: (ref: any | null) => void;
		parentRef?: RefObject<any>;
	};
};

/**
 *  Hook: useDisclosure
 *
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/
 */
const useDisclosure = ({
	id: idProp,
	onClick,
	initOpen = false,
	disclosureGroupObj,
}: DisclosureProps) => {
	const { activeTrigger, setActiveTrigger, parentRef } =
		disclosureGroupObj || {};
	const [isOpen, setIsOpen] = useState(initOpen);
	const targetId = useCustomId("disclosure", idProp);
	const targetRef = useRef<any>(null);
	const triggerRef = useRef<any>(null);

	useEffect(() => {
		if (setActiveTrigger && activeTrigger?.current !== triggerRef.current) {
			setIsOpen(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeTrigger]);

	useEffect(() => {
		if (isOpen && setActiveTrigger) {
			setActiveTrigger(triggerRef);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen]);

	const onTriggerClick = useCallback(
		(event: MouseEvent) => {
			event.stopPropagation();
			setIsOpen(!isOpen);
		},
		[isOpen, setIsOpen],
	);

	/**
	 * Keydown Event listener to handle nav item interaction.
	 *
	 * @param event {KeyboardEvent} KeyDown Event listener
	 */
	const handleTargetItemKeyDown = useCallback(
		(event: KeyboardEvent) => {
			let preventDefault = false;
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
				switch (event.key) {
					case NAV_KEYS.ESCAPE:
						preventDefault = true;
						setIsOpen(false);
						triggerRef.current.focus();
						break;

					case NAV_KEYS.ARROW_UP:
					case NAV_KEYS.ARROW_LEFT:
						focusDisclosureElement(targetRef, FOCUS_DIRECTIONS.PREV);
						preventDefault = true;
						break;

					case NAV_KEYS.ARROW_DOWN:
					case NAV_KEYS.ARROW_RIGHT:
						focusDisclosureElement(targetRef, FOCUS_DIRECTIONS.NEXT);
						preventDefault = true;
						break;

					case NAV_KEYS.HOME:
						focusDisclosureElement(targetRef, FOCUS_DIRECTIONS.FIRST);
						preventDefault = true;
						break;

					case NAV_KEYS.END:
						focusDisclosureElement(targetRef, FOCUS_DIRECTIONS.LAST);
						preventDefault = true;
						break;
				}
			}

			if (preventDefault) {
				event.stopPropagation();
				event.preventDefault();
			}
		},
		[setIsOpen],
	);

	/**
	 * Keydown Event listener to handle nav item interaction.
	 *
	 * @param event {KeyboardEvent} KeyDown Event listener
	 */
	const handleTriggerItemKeyDown = useCallback(
		(event: KeyboardEvent) => {
			let preventDefault = false;

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
				switch (event.key) {
					case NAV_KEYS.ESCAPE:
						setIsOpen(false);
						break;

					case NAV_KEYS.ARROW_LEFT:
					case NAV_KEYS.ARROW_UP:
						if (parentRef) {
							focusDisclosureElement(parentRef, FOCUS_DIRECTIONS.PREV, true);
						}
						break;

					case NAV_KEYS.ARROW_RIGHT:
						if (parentRef) {
							focusDisclosureElement(parentRef, FOCUS_DIRECTIONS.NEXT, true);
						}
						break;

					case NAV_KEYS.ARROW_DOWN:
						if (isOpen) {
							focusDisclosureElement(targetRef, FOCUS_DIRECTIONS.FIRST);
						}

						if (!isOpen && parentRef) {
							focusDisclosureElement(parentRef, FOCUS_DIRECTIONS.NEXT, true);
						}
						break;

					case NAV_KEYS.HOME:
						if (parentRef) {
							focusDisclosureElement(parentRef, FOCUS_DIRECTIONS.FIRST, true);
							preventDefault = true;
						}
						break;

					case NAV_KEYS.END:
						if (parentRef) {
							focusDisclosureElement(parentRef, FOCUS_DIRECTIONS.LAST, true);
							preventDefault = true;
						}
						break;
				}
			}

			if (preventDefault) {
				event.stopPropagation();
				event.preventDefault();
			}
		},
		[setIsOpen, isOpen, targetRef, parentRef],
	);

	return {
		setIsOpen,
		isOpen,
		getTriggerProps: (triggerProps: any = {}) => ({
			...triggerProps,
			"aria-expanded": isOpen as Booleanish,
			"aria-controls": targetId,
			onClick: callAllHandlers(onTriggerClick, triggerProps.onClick, onClick),
			role: "button",
		}),
		getTargetProps: (targetProps: any = {}) => ({
			...targetProps,
			hidden: !isOpen,
			id: targetId,
		}),
		handleTriggerItemKeyDown,
		handleTargetItemKeyDown,
		triggerRef,
		targetRef,
	};
};

export default useDisclosure;

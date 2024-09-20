/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Utility: callAllHandlers
 *
 * Groups all handlers and fires them in a row.  Please use caution when using.
 */
const callAllHandlers = (...fns: (((event: any) => void) | undefined)[]) => {
	return (event: any) => {
		fns.some((fn) => {
			fn?.(event);
			return event?.defaultPrevented;
		});
	};
};

export default callAllHandlers;

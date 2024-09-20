import ContentGridContainer from "@/components/ContentGridContainer";
import DangerSet from "@/components/DangerSet";
import Title from "@/components/Title";
import { TITLE_HEADINGS, TITLE_VARIANTS } from "@/components/Title/constants";
import { FOCUS_DIRECTIONS, LOCK_KEYS, NAV_KEYS } from "@/constants/navigation";
import useCustomId from "@/hooks/use-custom-id";
import useDisclosure from "@/hooks/use-disclosure";
import callAllHandlers from "@/utils/call-all-handlers";
import cn from "@/utils/cn";

/**
 * Dev Note: This is a how package offerings are built.  If the
 * component/hook/util etc are listed here it is then offered in the package.
 * This can be handy when developing new features.
 */

/**
 * Components
 */
const components = {
	ContentGridContainer,
	DangerSet,
	Title,
};

/**
 * Constants
 */
const constants = {
	TITLE_HEADINGS,
	TITLE_VARIANTS,
	FOCUS_DIRECTIONS,
	LOCK_KEYS,
	NAV_KEYS,
};

/**
 * Hooks
 */
const hooks = {
	useCustomId,
	useDisclosure,
};

/**
 * Utilities
 */
const utilities = {
	callAllHandlers,
	cn,
};

export default {
	...components,
	...constants,
	...hooks,
	...utilities,
};

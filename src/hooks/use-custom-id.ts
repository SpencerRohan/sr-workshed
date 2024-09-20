import { uniqueId } from "lodash";
import React from "react";

/**
 * Hook: useCustomId
 */
const useCustomId = (prefix?: string, override?: string) => {
	const id = React.useId() ?? uniqueId();

	const overrideFiltered = override?.replace(/ /g, "-");
	const prefixFiltered = prefix?.toLowerCase().replace(/ /g, "-");

	return overrideFiltered ?? [prefixFiltered, id].filter(Boolean).join("-");
};

export default useCustomId;

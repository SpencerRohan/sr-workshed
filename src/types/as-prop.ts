/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType, ElementType } from "react";

export type AsProp<T extends ElementType | ComponentType<any> | string> =
	| T
	| React.FunctionComponent<any>;

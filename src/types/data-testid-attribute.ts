export type DataTestIdAttribute = {
	"data-testid"?: string;
};

export type WithDataTestId<T> = T & DataTestIdAttribute;

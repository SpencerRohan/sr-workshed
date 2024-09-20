export const conditionalDescribe = process.env.COVERAGE
	? describe.skip
	: describe;

export default conditionalDescribe;

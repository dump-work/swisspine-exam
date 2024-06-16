export type SafeValue =
	| string
	| number
	| boolean
	| symbol
	| {
			[field: string | symbol | number]: SafeValue;
	  }
	| Array<SafeValue>
	| Date
	| RegExp
	| Error;

export type SafeObject = {
	[field: string | symbol | number]: SafeValue;
};

export type ExtendedSafeValue<C> =
	| SafeValue
	| {
			[field: string | symbol | number]: SafeValue | C;
	  }
	| Array<SafeValue | C>
	| C;

export type ExtendedSafeObject<C> = {
	[field: string | symbol | number]: ExtendedSafeValue<C>;
};

export type SafeVoidMethod = () => void;

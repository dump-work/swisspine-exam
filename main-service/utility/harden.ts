import { SafeObject } from "@type/safe-object";

export function harden<D extends object, V>(
	context: D | SafeObject,
	field: string,
	value: V
): D | SafeObject {
	if (typeof context == "object" && context && !(field in context)) {
		Object.defineProperty(
			context,

			field,

			{
				value,

				configurable: false,
				enumerable: false,
				writable: false,
			}
		);
	}

	return context;
}

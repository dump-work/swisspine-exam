export function resolveFieldList<D>(
	data: any,
	fieldList: Array<keyof D | string>,
	cast: (data: any, force: boolean) => D
): D {
	return cast(
		Object.keys(data)
			.filter((field) => fieldList.includes(field))
			.reduce((resolveData, field) => {
				(resolveData as any)[field] = data[field];

				return resolveData;
			}, cast({}, true)),
		false
	);
}

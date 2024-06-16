export async function resolveFlowStatus(
	flowList?: Promise<boolean>[]
): Promise<boolean> {
	return (await Promise.all(flowList ?? [Promise.resolve(false)]))?.reduce(
		(pushStatus, status) => pushStatus && status,
		true
	);
}

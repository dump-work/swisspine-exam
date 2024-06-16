export async function resolveFlowOrderStatus(
	flowList?: Promise<boolean>[]
): Promise<boolean> {
	if (flowList) {
		let status: boolean = true;

		for await (const flow of flowList) {
			status &&= flow;
		}

		return status;
	}

	return false;
}

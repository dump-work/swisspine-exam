import { resolveFlowOrderStatus } from "@utility/resolve-flow-order-status";

import { configureService } from "@configure/configure-service";

type BootServiceOption = {};

export async function bootService({}: BootServiceOption = {}): Promise<boolean> {
	return await resolveFlowOrderStatus([configureService()]);
}

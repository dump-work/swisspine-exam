import { resolveFlowOrderStatus } from "@utility/resolve-flow-order-status";

import { configureSetting } from "@configure/configure-setting";

import { configureService } from "@configure/configure-service";

type BootConfigureOption = {};

export async function bootConfigure({}: BootConfigureOption = {}): Promise<boolean> {
	return await resolveFlowOrderStatus([
		configureSetting(),
		configureService(),
	]);
}

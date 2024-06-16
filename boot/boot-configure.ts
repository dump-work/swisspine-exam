import { resolveFlowOrderStatus } from "@utility/resolve-flow-order-status";

import { configureSetting } from "@configure/configure-setting";

type BootConfigureOption = {};

export async function bootConfigure({}: BootConfigureOption = {}): Promise<boolean> {
	return await resolveFlowOrderStatus([configureSetting()]);
}

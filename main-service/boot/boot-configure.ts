import { configureSetting } from "@configure/configure-setting";

import { configureService } from "@configure/configure-service";

import { configureStorage } from "@configure/configure-storage";

type BootConfigureOption = {};

export async function bootConfigure({}: BootConfigureOption = {}): Promise<boolean> {
	return (await configureSetting()) && (await configureService()) && (await configureStorage());
}

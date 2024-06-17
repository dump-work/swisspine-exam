import { serve } from "@hono/node-server";

import { GLOBAL } from "@utility/global";

import GetEnvironmentSettingService from "@service/get-environment-setting-service";

type BootServiceOption = {};

export async function bootService({}: BootServiceOption = {}): Promise<boolean> {
	GetEnvironmentSettingService();

	return await new Promise<boolean>((resolve, reject) => {
		process.nextTick(() => {
			if (GLOBAL.SERVICE) {
				try {
					serve(
						{
							fetch: GLOBAL.SERVICE.fetch,
							hostname:
								GLOBAL.SETTING?.SERVICE?.SERVICE_HOST_ADDRESS,
							port: GLOBAL.SETTING?.SERVICE?.SERVICE_PORT_NUMBER,
						},
						() => {
							resolve(true);
						}
					);
				} catch (error) {
					reject(error);
				}
			}
		});
	});
}

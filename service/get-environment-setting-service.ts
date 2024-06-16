import { EnvironmentSetting } from "@type/environment-setting";

import { GLOBAL } from "@utility/global";

import { getEnvironmentSetting } from "@library/get-environment-setting";

type GetEnvironmentSettingServiceOption = {};

export async function getEnvironmentSettingService({}: GetEnvironmentSettingServiceOption = {}): Promise<EnvironmentSetting> {
	return await getEnvironmentSetting();
}

GLOBAL.INTERFACE?.get("/environment/setting", async (context) =>
	context.json(await getEnvironmentSettingService())
);

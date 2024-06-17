import { EnvironmentSetting } from "@type/environment-setting";

import { GLOBAL } from "@utility/global";

import { getEnvironmentSetting } from "@library/get-environment-setting";

type GetEnvironmentSettingServiceOption = {};

async function getEnvironmentSettingService({}: GetEnvironmentSettingServiceOption = {}): Promise<EnvironmentSetting> {
	return await getEnvironmentSetting();
}

export default () =>
	GLOBAL.SERVICE?.get("/environment/setting", async (context) =>
		context.json(await getEnvironmentSettingService())
	);

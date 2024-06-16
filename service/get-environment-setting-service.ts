import { EnvironmentSetting } from "@type/environment-setting";

import { getEnvironmentSetting } from "@library/get-environment-setting";

type GetEnvironmentSettingServiceOption = {};

export async function getEnvironmentSettingService({}: GetEnvironmentSettingServiceOption = {}): Promise<EnvironmentSetting> {
	return await getEnvironmentSetting();
}

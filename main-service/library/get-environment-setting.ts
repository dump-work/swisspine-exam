import { EnvironmentSetting } from "@type/environment-setting";

import { resolveEnvironmentSetting } from "@library/resolve-environment-setting";

type GetEnvironmentSettingOption = {};

export async function getEnvironmentSetting({}: GetEnvironmentSettingOption = {}): Promise<EnvironmentSetting> {
	return resolveEnvironmentSetting();
}

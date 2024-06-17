import { checkSystemSetting } from "@type/system-setting";

import { resolveSystemSetting } from "@library/resolve-system-setting";

type ConfigureSettingOption = {};

export async function configureSetting({}: ConfigureSettingOption = {}): Promise<boolean> {
	return checkSystemSetting((await resolveSystemSetting()).SETTING);
}

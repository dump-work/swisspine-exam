import { ENVIRONMENT_STATE } from "@type/environment-state";

import { checkSystemSetting } from "@type/system-setting";

import { resolveSystemSetting } from "@library/resolve-system-setting";

type ConfigureSettingOption = {
	state?: ENVIRONMENT_STATE;
};

export async function configureSetting({
	state,
}: ConfigureSettingOption = {}): Promise<boolean> {
	return checkSystemSetting(await resolveSystemSetting({ state }));
}

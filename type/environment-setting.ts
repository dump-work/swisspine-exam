import { checkEnvironmentState } from "@type/environment-state";

import { SystemSetting } from "@type/system-setting";

export type EnvironmentSetting = Omit<SystemSetting, "STORAGE">;

export const ENVIRONMENT_SETTING_FIELD_LIST: Array<keyof EnvironmentSetting> = ["SERVICE", "STATE"];

export function checkEnvironmentSetting(
	environmentSetting: any,
	forceStatus: boolean = false
): environmentSetting is EnvironmentSetting {
	if (forceStatus) {
		return true;
	}

	return (
		typeof environmentSetting === "object" &&
		environmentSetting !== null &&
		(!("SERVICE" in environmentSetting) ||
			(typeof environmentSetting.SERVICE === "object" &&
				environmentSetting.SERVICE !== null &&
				(!("SERVICE_PATH" in environmentSetting.SERVICE) ||
					typeof environmentSetting.SERVICE.SERVICE_PATH === "string"))) &&
		(!("STATE" in environmentSetting) || checkEnvironmentState(environmentSetting.STATE))
	);
}

export function assertEnvironmentSetting(
	environmentSetting: any,
	forceStatus: boolean = false
): asserts environmentSetting is EnvironmentSetting {
	if (!checkEnvironmentSetting(environmentSetting, forceStatus)) {
		throw new Error("invalid system setting");
	}
}

export function castEnvironmentSetting(
	environmentSetting: any,
	forceStatus: boolean = false
): EnvironmentSetting {
	assertEnvironmentSetting(environmentSetting, forceStatus);

	return environmentSetting;
}

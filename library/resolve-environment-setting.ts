import {
	castEnvironmentSetting,
	ENVIRONMENT_SETTING_FIELD_LIST,
	EnvironmentSetting,
} from "@type/environment-setting";

import { GLOBAL } from "@utility/global";

import { resolveFieldList } from "@utility/resolve-field-list";

type ResolveEnvironmentSettingOption = {};

export function resolveEnvironmentSetting({}: ResolveEnvironmentSettingOption = {}): EnvironmentSetting {
	return resolveFieldList<EnvironmentSetting>(
		GLOBAL.SETTING,
		ENVIRONMENT_SETTING_FIELD_LIST,
		castEnvironmentSetting
	);
}

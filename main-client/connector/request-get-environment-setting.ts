import { castEnvironmentSetting, EnvironmentSetting } from "@type/environment-setting";

type RequestGetEnvironmentSettingOption = {};

export async function requestGetEnvironmentSetting({}: RequestGetEnvironmentSettingOption = {}): Promise<EnvironmentSetting> {
	return castEnvironmentSetting(
		await (await fetch("/service/interface/environment/setting")).json()
	);
}

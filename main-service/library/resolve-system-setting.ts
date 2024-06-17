import { GlobalContext } from "@type/global-context";

import { ENVIRONMENT_STATE } from "@type/environment-state";

import { SETTING as DEFAULT_SETTING } from "@setting/setting.default";

import { SETTING as DEVELOP_SETTING } from "@setting/setting.develop";

import { SETTING as LOCAL_SETTING } from "@setting/setting.local";

import { SETTING as STAGING_SETTING } from "@setting/setting.staging";

import { SETTING as RELEASE_SETTING } from "@setting/setting.release";

import { SETTING as TEST_SETTING } from "@setting/setting.test";

import { harden } from "@utility/harden";

import { getSystemState } from "@library/get-system-state";

type ResolveSystemSettingOption = {
	state?: ENVIRONMENT_STATE;
	context?: GlobalContext;
};

export async function resolveSystemSetting({
	state,
	context,
}: ResolveSystemSettingOption = {}): Promise<GlobalContext> {
	const { flatten, unflatten } = await import("flat");

	context = context || global;

	state = await getSystemState(state);

	if (context) {
		if (state !== ENVIRONMENT_STATE.INVALID_STATE) {
			harden(
				context,

				"SETTING",

				unflatten(
					Object.assign(
						{},
						flatten(DEFAULT_SETTING),
						state !== ENVIRONMENT_STATE.DEFAULT_STATE
							? flatten(
									{
										develop: DEVELOP_SETTING,
										local: LOCAL_SETTING,
										staging: STAGING_SETTING,
										release: RELEASE_SETTING,
										test: TEST_SETTING,
									}[state]
							  )
							: {}
					)
				)
			);

			return context;
		}
	} else {
		return {
			SETTING: {
				STATE: ENVIRONMENT_STATE.INVALID_STATE,
			},
		};
	}

	return context;
}

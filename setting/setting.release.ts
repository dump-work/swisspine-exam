import { SystemSetting } from "@type/system-setting";

import { ENVIRONMENT_STATE } from "@type/environment-state";

export const SETTING: SystemSetting = {
	SERVICE: {
		SERVICE_PATH: "http://localhost:8080",
	},

	STATE: ENVIRONMENT_STATE.RELEASE_STATE,
};

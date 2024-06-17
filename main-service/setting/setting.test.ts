import { SystemSetting } from "@type/system-setting";

import { ENVIRONMENT_STATE } from "@type/environment-state";

export const SETTING: SystemSetting = {
	SERVICE: {
		SERVICE_PATH: "http://localhost:8080",
		SERVICE_PORT_NUMBER: 8080,
	},

	STATE: ENVIRONMENT_STATE.TEST_STATE,

	STORAGE: {
		STORAGE_CONNECTION_PATH: "mongod://localhost:27017/swisspine-exam",
	},
};

import {
	checkEnvironmentState,
	ENVIRONMENT_STATE,
} from "@type/environment-state";

export type SystemSetting = {
	SERVICE?: {
		SERVICE_PATH?: string;
		SERVICE_HOST_ADDRESS?: string;
		SERVICE_PORT_NUMBER?: number;
	};

	STATE?: ENVIRONMENT_STATE;

	STORAGE?: {
		STORAGE_CONNECTION_PATH?: string;
	};
};

export function checkSystemSetting(
	systemSetting: any
): systemSetting is SystemSetting {
	return (
		typeof systemSetting === "object" &&
		systemSetting !== null &&
		(!("SERVICE" in systemSetting) ||
			(typeof systemSetting.SERVICE === "object" &&
				systemSetting.SERVICE !== null &&
				(!("SERVICE_PATH" in systemSetting.SERVICE) ||
					typeof systemSetting.SERVICE.SERVICE_PATH === "string"))) &&
		(!("STATE" in systemSetting) ||
			checkEnvironmentState(systemSetting.STATE)) &&
		(!("STORAGE" in systemSetting) ||
			(typeof systemSetting.STORAGE === "object" &&
				systemSetting.STORAGE !== null &&
				(!("STORAGE_CONNECTION_PATH" in systemSetting.STORAGE) ||
					typeof systemSetting.STORAGE.STORAGE_CONNECTION_PATH ===
						"string")))
	);
}

export function assertSystemSetting(
	systemSetting: any
): asserts systemSetting is SystemSetting {
	if (!checkSystemSetting(systemSetting)) {
		throw new Error("invalid system setting");
	}
}

export function castSystemSetting(systemSetting: any): SystemSetting {
	assertSystemSetting(systemSetting);

	return systemSetting;
}

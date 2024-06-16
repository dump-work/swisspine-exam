import { ENVIRONMENT_STATE } from "@type/environment-state";

export type SystemSetting = {
	SERVICE?: {
		SERVICE_PATH?: string;
	};

	STATE?: ENVIRONMENT_STATE;
};

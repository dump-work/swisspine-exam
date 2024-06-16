import {
	checkEnvironmentState,
	ENVIRONMENT_STATE,
} from "@type/environment-state";

export async function getSystemState(
	targetState?: ENVIRONMENT_STATE
): Promise<ENVIRONMENT_STATE> {
	return (
		targetState ||
		(process.env.STATE &&
			checkEnvironmentState(process.env.STATE) &&
			process.env.STATE) ||
		ENVIRONMENT_STATE.DEVELOP_STATE
	);
}

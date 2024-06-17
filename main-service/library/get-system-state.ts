import {
	checkEnvironmentState,
	ENVIRONMENT_STATE,
} from "@type/environment-state";

export async function getSystemState(
	targetState?: ENVIRONMENT_STATE
): Promise<ENVIRONMENT_STATE> {
	const state: string | undefined = process.env["STATE"];

	return (
		targetState ||
		(state && checkEnvironmentState(state) && state) ||
		ENVIRONMENT_STATE.DEVELOP_STATE
	);
}

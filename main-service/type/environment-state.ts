export enum ENVIRONMENT_STATE {
	DEFAULT_STATE = "default",
	DEVELOP_STATE = "develop",
	LOCAL_STATE = "local",
	STAGING_STATE = "staging",
	RELEASE_STATE = "release",
	TEST_STATE = "test",
	INVALID_STATE = "invalid",
}

export type EnvironmentState = {
	DEFAULT_STATE?: ENVIRONMENT_STATE;
	DEVELOP_STATE?: ENVIRONMENT_STATE;
	STAGING_STATE?: ENVIRONMENT_STATE;
	RELEASE_STATE?: ENVIRONMENT_STATE;
	LOCAL_STATE?: ENVIRONMENT_STATE;
	TEST_STATE?: ENVIRONMENT_STATE;
	INVALID_STATE?: ENVIRONMENT_STATE;
};

export function checkEnvironmentState(
	state: string | ENVIRONMENT_STATE
): state is ENVIRONMENT_STATE {
	return (
		state === ENVIRONMENT_STATE.DEFAULT_STATE ||
		state === ENVIRONMENT_STATE.DEVELOP_STATE ||
		state === ENVIRONMENT_STATE.LOCAL_STATE ||
		state === ENVIRONMENT_STATE.STAGING_STATE ||
		state === ENVIRONMENT_STATE.RELEASE_STATE ||
		state === ENVIRONMENT_STATE.TEST_STATE ||
		state === ENVIRONMENT_STATE.INVALID_STATE
	);
}

export function assertEnvironmentState(
	state: string | ENVIRONMENT_STATE
): asserts state is ENVIRONMENT_STATE {
	if (!checkEnvironmentState(state)) {
		throw new Error("invalid environment state");
	}
}

export function castEnvironmentState(
	state: string | ENVIRONMENT_STATE
): ENVIRONMENT_STATE {
	assertEnvironmentState(state);

	return state;
}

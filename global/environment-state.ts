import { ENVIRONMENT_STATE } from "@type/environment-state";

import { harden } from "@utility/harden";

import { GLOBAL } from "@utility/global";

harden(global, "DEFAULT_STATE", ENVIRONMENT_STATE.DEFAULT_STATE);

harden(global, "DEVELOP_STATE", ENVIRONMENT_STATE.DEVELOP_STATE);

harden(global, "STAGING_STATE", ENVIRONMENT_STATE.STAGING_STATE);

harden(global, "RELEASE_STATE", ENVIRONMENT_STATE.RELEASE_STATE);

harden(global, "LOCAL_STATE", ENVIRONMENT_STATE.LOCAL_STATE);

harden(global, "TEST_STATE", ENVIRONMENT_STATE.TEST_STATE);

harden(global, "INVALID_STATE", ENVIRONMENT_STATE.INVALID_STATE);

export const DEFAULT_STATE: ENVIRONMENT_STATE = GLOBAL.DEFAULT_STATE
	? GLOBAL.DEFAULT_STATE
	: ENVIRONMENT_STATE.DEFAULT_STATE;

export const DEVELOP_STATE: ENVIRONMENT_STATE = GLOBAL.DEVELOP_STATE
	? GLOBAL.DEVELOP_STATE
	: ENVIRONMENT_STATE.DEVELOP_STATE;

export const STAGING_STATE: ENVIRONMENT_STATE = GLOBAL.STAGING_STATE
	? GLOBAL.STAGING_STATE
	: ENVIRONMENT_STATE.STAGING_STATE;

export const RELEASE_STATE: ENVIRONMENT_STATE = GLOBAL.RELEASE_STATE
	? GLOBAL.RELEASE_STATE
	: ENVIRONMENT_STATE.RELEASE_STATE;

export const LOCAL_STATE: ENVIRONMENT_STATE = GLOBAL.LOCAL_STATE
	? GLOBAL.LOCAL_STATE
	: ENVIRONMENT_STATE.LOCAL_STATE;

export const TEST_STATE: ENVIRONMENT_STATE = GLOBAL.TEST_STATE
	? GLOBAL.TEST_STATE
	: ENVIRONMENT_STATE.TEST_STATE;

export const INVALID_STATE: ENVIRONMENT_STATE = GLOBAL.INVALID_STATE
	? GLOBAL.INVALID_STATE
	: ENVIRONMENT_STATE.INVALID_STATE;
import { SystemSetting } from "@type/system-setting";

import { EventSubject } from "@type/event-subject";

import { EnvironmentState } from "@type/environment-state";

export type GlobalContext = {
	ERROR?: Error[];
	SETTING?: SystemSetting;
} & Partial<typeof globalThis> &
	EventSubject &
	EnvironmentState;

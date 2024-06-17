import * as EnvironmentState from "@global/environment-state";

type BootGlobalOption = {};

export async function bootGlobal({}: BootGlobalOption = {}): Promise<boolean> {
	EnvironmentState;

	return true;
}

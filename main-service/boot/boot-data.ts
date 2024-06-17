import * as ExternalSystem from "@data/external-system";

type BootDataOption = {};

export async function bootData({}: BootDataOption = {}): Promise<boolean> {
	ExternalSystem;

	return true;
}

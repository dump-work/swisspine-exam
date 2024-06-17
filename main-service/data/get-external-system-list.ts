import { castExternalSystemData, ExternalSystemData } from "@type/external-system-data";

import { ExternalSystem } from "@data/external-system";

type GetExternalSystemListOption = {};

export async function getExternalSystemList({}: GetExternalSystemListOption = {}): Promise<
	ExternalSystemData[]
> {
	return (await ExternalSystem.find().lean().exec())?.map((externalSystemData) =>
		castExternalSystemData(externalSystemData)
	);
}

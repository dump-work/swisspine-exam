import { castExternalSystemData, ExternalSystemData } from "@type/external-system-data";

import { ExternalSystem } from "@data/external-system";

type GetExternalSystemOption = { reference: string };

export async function getExternalSystem({
	reference,
}: GetExternalSystemOption): Promise<ExternalSystemData> {
	return castExternalSystemData(await ExternalSystem.findOne({ reference }).lean().exec());
}

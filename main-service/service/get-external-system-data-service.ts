import { ExternalSystemData } from "@type/external-system-data";

import { GLOBAL } from "@utility/global";

import { getExternalSystem } from "@data/get-external-system";

type GetExternalSystemDataServiceOption = {
	reference: string;
};

async function getExternalSystemDataService({
	reference,
}: GetExternalSystemDataServiceOption): Promise<ExternalSystemData> {
	return await getExternalSystem({ reference });
}

export default () =>
	GLOBAL.SERVICE?.get("/external-system", async (context) => {
		const { reference } = context.req.query();

		if (reference) {
			context.json(await getExternalSystemDataService({ reference }));
		} else {
			context.json({});
		}
	});

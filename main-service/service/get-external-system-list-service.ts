import { ExternalSystemData } from "@type/external-system-data";

import { GLOBAL } from "@utility/global";

import { getExternalSystemList } from "@data/get-external-system-list";

type GetExternalSystemListServiceOption = {};

async function getExternalSystemListService({}: GetExternalSystemListServiceOption = {}): Promise<
	ExternalSystemData[]
> {
	return await getExternalSystemList();
}

export default () =>
	GLOBAL.SERVICE?.get("/external-system/list", async (context) => {
		context.json(await getExternalSystemListService());
	});

export enum AUTHENTICATION_METHOD {
	API_KEY = "api-key",
	PASSWORD = "password",
}

export enum AUTHENTICATION_PLACE {
	HEADER = "header",
	QUERY_PARAMETER = "query-parameter",
}

type AuthenticationMethodField = AUTHENTICATION_METHOD | string;

type AuthenticationPlaceField = AUTHENTICATION_PLACE | string;

export type ExternalSystemData = {
	reference: string;
	name: string;
	base_url: string;
	authentication_method: AuthenticationMethodField;
	key: string;
	value: string;
	authentication_place: AuthenticationPlaceField;
};

export function checkExternalSystemData(
	externalSystemData: any
): externalSystemData is ExternalSystemData {
	return (
		typeof externalSystemData === "object" &&
		externalSystemData !== null &&
		typeof externalSystemData.reference === "string" &&
		typeof externalSystemData.name === "string" &&
		typeof externalSystemData.base_url === "string" &&
		typeof externalSystemData.authentication_method === "string" &&
		typeof externalSystemData.key === "string" &&
		typeof externalSystemData.value === "string" &&
		typeof externalSystemData.authentication_place === "string"
	);
}

export function assertExternalSystemData(
	externalSystemData: any
): asserts externalSystemData is ExternalSystemData {
	if (!checkExternalSystemData(externalSystemData)) {
		throw new Error("invalid external system data");
	}
}

export function castExternalSystemData(externalSystemData: any): ExternalSystemData {
	assertExternalSystemData(externalSystemData);

	return externalSystemData;
}

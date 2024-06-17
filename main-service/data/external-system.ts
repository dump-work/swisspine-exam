import { model, Schema } from "mongoose";

import { ExternalSystemData } from "@type/external-system-data";

interface ExternalSystemStructure extends ExternalSystemData {}

const ExternalSystemSchema = new Schema<ExternalSystemStructure>(
	{
		reference: {
			type: String,
		},
		name: {
			type: String,
			required: true,
		},
		base_url: {
			type: String,
		},
		authentication_method: {
			type: String,
		},
		key: {
			type: String,
		},
		value: {
			type: String,
		},
		authentication_place: {
			type: String,
		},
	},
	{ collection: "external-system" }
);

export const ExternalSystem = model<ExternalSystemStructure>(
	"ExternalSystem",
	ExternalSystemSchema
);

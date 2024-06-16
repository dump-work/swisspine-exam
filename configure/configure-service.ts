import { Hono } from "hono";

import { harden } from "@utility/harden";

import { GLOBAL } from "@utility/global";

type ConfigureServiceOption = {};

export async function configureService({}: ConfigureServiceOption = {}): Promise<boolean> {
	harden(global, "SERVICE", new Hono().basePath("/service/interface"));

	return "SERVICE" in GLOBAL;
}

import { Hono } from "hono";

import { harden } from "@utility/harden";

import { GLOBAL } from "@utility/global";

type ConfigureServiceOption = {};

export async function configureService({}: ConfigureServiceOption = {}): Promise<boolean> {
	harden(global, "SERVICE", new Hono());

	harden(global, "INTERFACE", new Hono());

	if (GLOBAL.SERVICE && GLOBAL.INTERFACE) {
		GLOBAL.SERVICE?.route("/service/interface", GLOBAL.INTERFACE);

		return true;
	}

	return false;
}

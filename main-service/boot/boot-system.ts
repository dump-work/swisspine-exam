import { bootGlobal } from "@boot/boot-global";

import { bootConfigure } from "@boot/boot-configure";

import { bootService } from "@boot/boot-service";

type BootSystemOption = {};

export async function bootSystem({}: BootSystemOption = {}): Promise<boolean> {
	return (
		(await bootGlobal()) && (await bootConfigure()) && (await bootService())
	);
}

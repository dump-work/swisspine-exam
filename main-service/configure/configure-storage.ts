import { connect } from "mongoose";

import { GLOBAL } from "@utility/global";

type ConfigureStorageOption = {};

export async function configureStorage({}: ConfigureStorageOption = {}): Promise<boolean> {
	if (GLOBAL.SETTING?.STORAGE?.STORAGE_CONNECTION_PATH) {
		try {
			await connect(GLOBAL.SETTING.STORAGE.STORAGE_CONNECTION_PATH);

			return true;
		} catch (error) {
			return false;
		}
	}

	return false;
}

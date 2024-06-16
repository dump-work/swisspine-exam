import { SystemSetting } from "@type/system-setting";

export type EnvironmentSetting = Omit<SystemSetting, "STORAGE">;

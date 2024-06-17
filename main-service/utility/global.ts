import { GlobalContext } from "@type/global-context";

export const GLOBAL: Partial<typeof globalThis & GlobalContext> = global;

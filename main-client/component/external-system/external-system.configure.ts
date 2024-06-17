import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";

export const mainConfigure: ApplicationConfig = {
	providers: [provideZoneChangeDetection({ eventCoalescing: true })],
};

import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";

import { provideRouter } from "@angular/router";

import { mainRouteList } from "@component/main/main.route";

export const mainConfigure: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(mainRouteList),
	],
};

import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from "@angular/core";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { provideRouter } from "@angular/router";

import { mainRouteList } from "@component/main/main.route";

export const mainConfigure: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(mainRouteList),
		importProvidersFrom(BrowserAnimationsModule),
	],
};

import { Component } from "@angular/core";

import { RouterOutlet } from "@angular/router";

import { CdkAccordionModule } from "@angular/cdk/accordion";

import { MatIconModule } from "@angular/material/icon";

import {
	AUTHENTICATION_METHOD,
	AUTHENTICATION_PLACE,
	ExternalSystemData,
} from "@type/external-system-data";

@Component({
	selector: "external-system",
	standalone: true,
	templateUrl: "../../view/external-system/external-system.component.html",
	styleUrl: "../../view/external-system/external-system.component.css",
	imports: [RouterOutlet, CdkAccordionModule, MatIconModule],
})
export class ExternalSystemComponent {
	externalSystemList: ExternalSystemData[] = [
		{
			reference: "12345",
			name: "Test",
			authentication_method: AUTHENTICATION_METHOD.API_KEY,
			authentication_place: AUTHENTICATION_PLACE.HEADER,
			key: "test",
			value: "test",
			base_url: "test",
		},
	];
	ngOnInit() {}
}

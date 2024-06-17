import { Component } from "@angular/core";

import { RouterOutlet } from "@angular/router";

import { CdkAccordionModule } from "@angular/cdk/accordion";

@Component({
	selector: "external-system",
	standalone: true,
	templateUrl: "../../view/external-system/external-system.component.html",
	styleUrl: "../../view/external-system/external-system.component.css",
	imports: [RouterOutlet, CdkAccordionModule],
})
export class ExternalSystemComponent {
	ngOnInit() {}
}

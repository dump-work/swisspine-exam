import { CommonModule } from "@angular/common";

import { Component } from "@angular/core";

import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

import { MatMenuModule } from "@angular/material/menu";

import { MatButtonModule } from "@angular/material/button";

@Component({
	selector: "main-root",
	standalone: true,
	templateUrl: "../../view/main/main.component.html",
	styleUrl: "../../view/main/main.component.css",
	imports: [
		CommonModule,
		RouterOutlet,
		RouterLink,
		RouterLinkActive,
		MatMenuModule,
		MatButtonModule,
	],
	animations: [],
})
export class MainComponent {
	title = "SwissPine Technical Exam";
}

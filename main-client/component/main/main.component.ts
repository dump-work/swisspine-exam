import { CommonModule } from "@angular/common";

import { Component } from "@angular/core";

import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

@Component({
	selector: "main-root",
	standalone: true,
	imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
	templateUrl: "../../view/main/main.component.html",
	styleUrl: "../../view/main/main.component.css",
})
export class MainComponent {
	title = "SwissPine Technical Exam";
}

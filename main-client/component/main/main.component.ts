import { Component } from "@angular/core";

import { RouterOutlet } from "@angular/router";

@Component({
	selector: "main-root",
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: "../../view/main/main.component.html",
	styleUrl: "../../view/main/main.component.css",
})
export class MainComponent {
	title = "SwissPine Technical Exam";
}

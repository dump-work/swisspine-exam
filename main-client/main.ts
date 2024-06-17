import { bootstrapApplication } from "@angular/platform-browser";

import { mainConfigure } from "@component/main/main.configure";

import { MainComponent } from "@component/main/main.component";

bootstrapApplication(MainComponent, mainConfigure).catch((error) => console.error(error));

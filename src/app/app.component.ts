import { Component } from "@angular/core";
import { Router } from "@angular/router";

import * as firebase from "firebase/app";
import { AfAuthService } from "./services/af-auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(public afAuthService: AfAuthService, private router: Router) {
    console.log(afAuthService.afAuth.authState);
  }
  go() {}
}

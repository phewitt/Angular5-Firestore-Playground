import { Component } from "@angular/core";
import { Router } from "@angular/router";

import * as firebase from "firebase/app";
import { AuthService } from "./services/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(public auth: AuthService) {}


}

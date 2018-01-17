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
  user: firebase.User;
  constructor(public afAuthService: AfAuthService, private router: Router) {
    this.afAuthService.user.subscribe(user => {
      if (user) {
        this.user = user;
        this.router.navigate([""]);
      } else {
       this.user = user;
        this.router.navigate(["login"]);
      }
    });
  }
}

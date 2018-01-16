import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { AfAuthService } from "./services/af-auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  private isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;
  constructor(public afAuthService: AfAuthService, private router: Router) {
      
      if (afAuthService.user == null) {
        console.log("Logged out");
        this.isLoggedIn = false;
        this.user_displayName = "";
        this.user_email = "";
        this.router.navigate(["login"]);
      } else {
        /*this.isLoggedIn = true;
        this.user_displayName = afAuthService.afAuth.auth.currentUser.displayName;
        this.user_email = afAuthService.afAuth.auth.currentUser.email;
        console.log("Logged in");*/
        this.isLoggedIn = true;
        console.log(afAuthService.user);
        this.router.navigate([""]);
      }
    
  }
}

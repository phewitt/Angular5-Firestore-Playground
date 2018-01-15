import { Component } from '@angular/core';
import { AfAuthService } from "./services/af-auth.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public afAuthService: AfAuthService){}

  login(){
    this.afAuthService.login();
  }

  logout() {
    this.afAuthService.logout();
  }
}

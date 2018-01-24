import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { environment } from "../environments/environment";

import { AppRoutingModule } from "./app-routing.module";

import { AuthService } from "./services/auth.service";
import { AuthGuardService } from "./services/auth-guard.service";

import { AppComponent } from "./app.component";
import { ItemListComponent } from "./components/item-list/item-list.component";
import { LoginPageComponent } from "./components/login-page/login-page.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    LoginPageComponent,
    HomePageComponent,
    PageNotFoundComponent,
    AppNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}

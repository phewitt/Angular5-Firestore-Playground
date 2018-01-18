import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { environment } from "../environments/environment";

import { AppRoutingModule } from "./app-routing.module";

import { AfAuthService } from "./services/af-auth.service";
import { AuthGuardService } from "./services/auth-guard.service";

import { AppComponent } from "./app.component";
import { ItemListComponent } from "./components/item-list/item-list.component";
import { LoginPageComponent } from "./components/login-page/login-page.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    LoginPageComponent,
    HomePageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [AfAuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}

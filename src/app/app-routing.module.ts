import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { LoginPageComponent } from "./components/login-page/login-page.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { AuthGuardService } from "./services/auth-guard.service";
const routes: Routes = [
  { path: "login", component: LoginPageComponent },
  {
    path: "home",
    component: HomePageComponent,
    canActivate: [AuthGuardService]
  },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AfAuthService {
  user: Observable<firebase.User>;
  isLoggedIn = false;

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.user = afAuth.authState.switchMap(user => {
      if (user) {
        return Observable.of(user);
      } else {
        return Observable.of(null);
      }
    });

    this.afAuth.authState.subscribe(auth => {
      if (auth == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
      }
    });
  }

  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  async logout() {
    try {
      await this.afAuth.auth.signOut();
      this.router.navigate([""]);
    } catch (err) {
      console.log(err);
    }
  }
}

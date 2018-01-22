import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";
import { Observable } from "rxjs/Observable";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from "angularfire2/firestore";

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
}

@Injectable()
export class AuthService {
  user: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    //// Get auth data, then get firestore user document || null
    this.user = this.afAuth.authState.switchMap(user => {
      if (user) {
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      } else {
        return Observable.of(null);
      }
    });
  }

  async googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      let result = await this.oAuthLogin(provider);
      this.router.navigate(["/home"]);
      return result;
    }
    catch (err){
      console.log(err);
    }
  }

  private async oAuthLogin(provider) {
    try {
      let credential = await this.afAuth.auth.signInWithPopup(provider);
      return this.updateUserData(credential.user);
    } catch (err) {
      console.log(err);
    }
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };
    return userRef.set(data);
  }

  async signOut() {
    try {
      await this.afAuth.auth.signOut();
      this.router.navigate(["/login"]);
    } catch (err) {
      console.log(err);
    }
  }
}

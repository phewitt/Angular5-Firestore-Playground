import { Component, OnInit, OnDestroy } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "angularfire2/firestore";
import * as firebase from "firebase/app";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

export interface Item {
  title: string;
  content: string;
  id?: any;
  userID?: any;
  dateAdded?: firebase.firestore.FieldValue;
}

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"]
})
export class HomePageComponent implements OnInit, OnDestroy {
  user: any;

  itemsCollectionRef: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  itemTitle: string;
  itemContent: string;

  constructor(
    private authService: AuthService,
    private afs: AngularFirestore,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.user.subscribe(user => {
      this.user = user;
      this.itemsCollectionRef = this.afs.collection("items", ref => {
        console.log(ref);
        return ref
          .orderBy("dateAdded", "desc")
          .where("userID", "==", this.user.uid);
      });

      this.items = this.itemsCollectionRef.snapshotChanges().map(actions => {
        return actions.map(action => {
          const data = action.payload.doc.data() as Item;
          const id = action.payload.doc.id;
          return { id, ...data };
        });
      });
    });
  }

  ngOnDestroy() {}

  get timestamp() {
    return firebase.firestore.FieldValue.serverTimestamp();
  }

  addItem() {
    const ts = this.timestamp;
    let item = {
      title: this.itemTitle ? this.itemTitle : "",
      content: this.itemContent ? this.itemContent : "",
      userID: this.user.uid,
      dateAdded: ts
    };
    if (item.title && item.content) {
      this.itemsCollectionRef.add(item);
    }
    this.itemTitle = "";
    this.itemContent = "";
  }

  deleteItem(itemId: string) {
    this.itemsCollectionRef.doc(itemId).delete();
  }
}

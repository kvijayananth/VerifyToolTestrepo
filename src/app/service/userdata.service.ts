import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import {collectionData,doc} from 'rxfire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(public auth: AngularFireAuth,  private db: AngularFirestore) { }
  login() {
    return this.auth.signInWithPopup(new (firebase.auth as any).GoogleAuthProvider());
  }
  logout() {
    return this.auth.signOut();
  }
  getDocumentData(projectname: string, mainfield: string, subfield: string): any {
    const collectionPath = projectname + '/' + mainfield + '/TestItems/' + subfield;  //items for Manoj
    const davidDocRef = this.db.firestore.doc(collectionPath);
    return doc(davidDocRef).pipe(
      map(changes => ({ ...changes.data() })
      ));
    }
}

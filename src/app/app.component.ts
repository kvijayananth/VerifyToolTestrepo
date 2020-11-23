import { Component } from '@angular/core';
import { UserdataService } from './service/userdata.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  loggedin = false;
  subAuth: Subscription;
  myarraydisplay: [] = [];

  constructor(public afAuth: AngularFireAuth, public tutorialService: UserdataService) {

    this.subAuth = this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        this.loggedin = true;
        this.tutorialService.getDocumentData('TestAngular', 'TestMain', 'TestSub').pipe(take(1)).subscribe(some => 
          {
          if (some && some.data()) {
            for (const misson in some.data().Item) {//change to item for Manoj
              console.log(misson, some.data().item[misson]);
            }
            this.myarraydisplay = some.data().item;
          } 
          
          else {
            console.log('Nodata found');
          }
        });
      }
        else {
          this.loggedin = false;
        }
  });
}
  ngOnDestroy() {
    this.subAuth.unsubscribe();
  }

}

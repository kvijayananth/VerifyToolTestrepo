import { Component } from '@angular/core';
import { UserdataService } from './service/userdata.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  loggedin = false;
  subAuth: Subscription;

  constructor(public afAuth: AngularFireAuth, public tutorialService: UserdataService) {

    this.subAuth = this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        this.loggedin = true;
      } else {
        this.loggedin = false;
      }
    });
  }
  ngOnDestroy() {
    this.subAuth.unsubscribe();
  }

}

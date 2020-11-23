import { Component } from '@angular/core';
import { UserdataService } from './service/userdata.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { take }from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  loggedin = false;
  subAuth: Subscription;
  myarraydisplay:[]=[];
  myitemsdisplay: Observable<any> | undefined

  constructor(public afAuth: AngularFireAuth, public tutorialService: UserdataService) {

    this.subAuth = this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        this.loggedin = true;
        this.myitemsdisplay=this.tutorialService.getDocumentData('TestAngular','TestMain', 'TestSub').pipe(take(1));
      } else {
        this.loggedin = false;
      }
    });
  }
  ngOnDestroy() {
    this.subAuth.unsubscribe();
  }

}

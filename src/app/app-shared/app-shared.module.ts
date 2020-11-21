import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule , FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons/faTwitterSquare';
import { faPinterest } from '@fortawesome/free-brands-svg-icons/faPinterest';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule ,
    FormsModule,
    FontAwesomeModule,
    FlexLayoutModule,
    ShareIconsModule,
    ShareButtonsModule

  ],
  exports: [
    ReactiveFormsModule ,
    FormsModule,
    CommonModule,
    MaterialModule,
    FontAwesomeModule,
    FlexLayoutModule ,
    ShareIconsModule,
    ShareButtonsModule

  ]
})
export class AppSharedModule {
  constructor(private library: FaIconLibrary) {
    // tslint:disable-next-line: max-line-length
    library.addIcons(faFacebookSquare,faTwitterSquare,faPinterest, faWhatsapp, faSignInAlt, faSignOutAlt);
    }
 }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediumComponent } from './medium.component';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { MediumheaderComponent } from '../mediumheader/mediumheader.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MediumheaderComponent } from './mediumheader/mediumheader.component';
import { MediumContentComponent } from './medium-content/medium-content.component';



@NgModule({
  declarations: [
    MediumComponent,
    MediumheaderComponent,
    MediumContentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    NgbModule
  ],
})
export class MediumModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router, RouterModule } from '@angular/router';





@NgModule({
  declarations: [
  
    SidenavComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgbModule,
    RouterModule,
  ],
  exports:[
    SidenavComponent,

  ]
})
export class SharedModule { }

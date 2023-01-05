import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediumComponent } from './medium.component';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { MediumheaderComponent } from '../mediumheader/mediumheader.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MediumheaderComponent } from './mediumheader/mediumheader.component';
import { MediumContentComponent } from './medium-content/medium-content.component';
import {HttpClientModule} from '@angular/common/http';
import { ViewBlogComponent } from './view-blog/view-blog.component';


@NgModule({
  declarations: [
    MediumComponent,
    MediumheaderComponent,
    MediumContentComponent,
    ViewBlogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule
  ],
})
export class MediumModule { }

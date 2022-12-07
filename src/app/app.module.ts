import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { Router, RouterModule } from '@angular/router';
import { MediumComponent } from './medium/medium.component';
import { MediumModule } from './medium/medium.module';
// import { MediumComponent } from './medium/medium.component';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    RouterModule,
    MediumModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediumComponent } from './medium/medium.component';
import { MediumheaderComponent } from './medium/mediumheader/mediumheader.component';

const routes: Routes = [
  {path:'medium',component:MediumComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

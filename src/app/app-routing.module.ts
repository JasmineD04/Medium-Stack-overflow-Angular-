import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediumComponent } from './medium/medium.component';
import { MediumheaderComponent } from './medium/mediumheader/mediumheader.component';
import { ViewBlogComponent } from './medium/view-blog/view-blog.component';
import { ProfileComponent } from './user/profile/profile.component';

const routes: Routes = [
  {path:'medium',component:MediumComponent},
  {path :'profile',component:ProfileComponent},
  {path : 'viewblog',component:ViewBlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

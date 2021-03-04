import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProfileupdateComponent } from './profileupdate/profileupdate.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';

const routes: Routes = [

  {
    path: 'register',
    component: RegisteruserComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'profile/update',
    component: ProfileupdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

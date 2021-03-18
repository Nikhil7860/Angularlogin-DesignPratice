import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PraticeforinterviewComponent } from './praticeforinterview/praticeforinterview.component';
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
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'pratice',
    component: PraticeforinterviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

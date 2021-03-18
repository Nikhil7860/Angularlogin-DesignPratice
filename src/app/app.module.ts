import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { ProfileupdateComponent } from './profileupdate/profileupdate.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { PraticeforinterviewComponent } from './praticeforinterview/praticeforinterview.component';
import { PraticechildComponent } from './praticechild/praticechild.component';
import { PraticechildtoparentComponent } from './praticechildtoparent/praticechildtoparent.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisteruserComponent,
    ProfileupdateComponent,
    ProfileComponent,
    LoginComponent,
    PraticeforinterviewComponent,
    PraticechildComponent,
    PraticechildtoparentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,
    CommonModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }

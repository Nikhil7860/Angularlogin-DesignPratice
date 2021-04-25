import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../SharedServices/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private log: LoginService
  ) { }

  ngOnInit(): void {
    
    this.loginForm = this.formBuilder.group({
      email: [''],
      pass: ['']
    })
  }


  goToRegister() {

    // this.router.navigate(['register']);

    // this.toastr.success('Employee Added successfully', 'Success');
  }

  login() {
    console.log(this.loginForm.value)
    const data = {
      email: this.loginForm.controls.email.value,
      password: this.loginForm.controls.pass.value,

    }
    return this.log.loginForAll(data).subscribe(
      (result) => {
        if (result == true) {
          console.log(result, 'result in the the loginfor all api');
          this.router.navigate(['profile']);
        } else {
          this.router.navigate(['login']);
        }

      },
      (error) => {
        console.log(error, 'error in the onSubmitForm');
      }
    );


  }

  forgotPassword() {

    // this.router.navigate(['profile'])
  }

  
}

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,

  ) { }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      pass: ['']
    })
  }
  goToRegister() {

    this.router.navigate(['register']);
    
    // this.toastr.success('Employee Added successfully', 'Success');
  }

  login() {
    console.log(this.loginForm.value)
  }

  forgotPassword() {
    
    this.router.navigate(['profile'])
  }



}

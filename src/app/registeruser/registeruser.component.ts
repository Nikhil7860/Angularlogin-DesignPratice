import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({});
  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fristname: [''],
      lastname: [''],
      phone: [''],
      email: [''],
      pass: [''],

    })
  }

  registerUser() {
    // console.log(this.registerForm.value)
    
  }

}

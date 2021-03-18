import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegistrationService } from '../SharedServices/registration.service';
@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({});
  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private register: RegistrationService
  ) { }

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
    const data = {
      firstname: this.registerForm.controls.fristname.value,
      lastname: this.registerForm.controls.lastname.value,
      email: this.registerForm.controls.email.value,
      password: this.registerForm.controls.pass.value,
      phone: this.registerForm.controls.phone.value,

    }
    return this.register.registrationUser(data).subscribe(
      (result) => {
        if (result) {
          this.router.navigate(['login']);
        }

      },
      (error) => {
        console.log(error, 'error in the onSubmitForm');
      }
    );

  }

}

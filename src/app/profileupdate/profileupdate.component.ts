import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../SharedServices/login.service';
@Component({
  selector: 'app-profileupdate',
  templateUrl: './profileupdate.component.html',
  styleUrls: ['./profileupdate.component.css']
})
export class ProfileupdateComponent implements OnInit {

  updateForm: FormGroup = new FormGroup({});
  userName: string = "nikhilarora"

  formData = new FormData();
  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private loginSer: LoginService
  ) {
    this.loginSer.userName.subscribe(val => this.userName = val)
    console.log('constructure called')
  }

  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      fristname: [''],
      lastname: [''],
      phone: [''],
      email: [''],
      pass: [''],
    })
  }



  updateUserName(val: any) {
    this.userName = val.value
    this.loginSer.userName.next(val.value)
  }


  getUserDetails() {
    // console.log(id, 'id in the update Register function ')

    // return this.log.getEployee(id).subscribe(
    //   (result) => {
    //     if (result) {
    //       this.getEmplo = result;
    //       this.editRegister.controls.empid.setValue(this.getEmplo[0].empid);
    //       this.editRegister.controls.name.setValue(this.getEmplo[0].name);
    //       this.editRegister.controls.employeecode.setValue(this.getEmplo[0].employeecode);
    //       this.editRegister.controls.salary.setValue(this.getEmplo[0].salary);
    //     } else {
    //       return;
    //     }
    //   },
    //   (error) => {
    //     console.log(error, 'error in the onSubmitForm');
    //   }
    // );

  }


  updateUser() {

    //   this.formData = new FormData();
    //   this.formData.append('empid', this.editRegister.controls.empid.value);
    //   this.formData.append('name', this.editRegister.controls.name.value);
    //   this.formData.append('employeecode', this.editRegister.controls.employeecode.value);
    //   this.formData.append('salary', this.editRegister.controls.salary.value);
    //   return this.log.updateEmployee(this.editRegister.value).subscribe(
    //     (result) => {
    //       if (result) {
    //         console.log(result, 'result in Register Api ');
    //         this.editRegister.reset();
    //         this.toastr.success('Employee updated successfully', 'Success');
    //         this.formData = new FormData();
    //       } else {
    //         return;
    //       }
    //     },
    //     (error) => {
    //       console.log(error, 'error in the onSubmitForm');
    //     }
    //   );
  }

}



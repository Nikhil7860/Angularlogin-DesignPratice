import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: FormGroup = new FormGroup({});

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.profile = this.formBuilder.group({
      fristname: [''],
      lastname: [''],
      phone: [''],
      email: [''],
      pass: [''],
    });
  }

  goToUpdateProfile() {
    this.router.navigate(['profile/update'])
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



}

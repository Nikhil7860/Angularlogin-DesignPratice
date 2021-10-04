import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../SharedServices/login.service';
import { RegistrationService } from '../SharedServices/registration.service'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {


  @Input() myVal = "hello i am in profile"
  profile: FormGroup = new FormGroup({});
  counter: any
  num: number = 1
  @Output() hello = new EventEmitter<any>();
  userName: string = "nikhilarora"
  selctedProduct = "hellojijijiji"
  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private register: RegistrationService,
    private loginSer: LoginService
  ) {
    this.loginSer.userName.subscribe(val => this.userName = val)
    console.log('constructure called')
  }


  ngOnChanges(changes: SimpleChanges) {
    console.log(changes, 'ngOnChanges called')
    console.log(changes.myVal.currentValue, 'changes.myVal.currentValue ngOnChanges called')
  }


  ngOnInit(): void {
    console.log('ngOnInit called')

    this.counter = setInterval(() => {
      this.num = this.num + 1
      console.log(this.num)
    }, 1000)

    this.profile = this.formBuilder.group({
      fristname: [''],
      lastname: [''],
      phone: [''],
      email: [''],
      pass: [''],
    });
  }



  ngDoCheck() {
    console.log('ngDoCheck called')
  }


  ngAfterContentInit() {
    console.log('ngAfterContentInit called')
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called')
  }


  ngAfterViewInit() {
    console.log('ngAfterViewInit called')
  }


  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called')
    clearInterval(this.counter)
  }


  onAddProduct() {
    this.hello.emit(this.myVal)
  }



  updateUserName(val: any) {
    this.userName = val.value
    this.loginSer.userName.next(val.value)
  }

  goToUpdateProfile() {
    this.router.navigate(['profile/update'])
    // console.log(id, 'id in the update Register function ')

    // return this.register.showUserDetails(id).subscribe(
    //   (result) => {
    //     if (result) {
    //       this.getEmplo = result;
    //       this.profile.controls.empid.setValue(this.getEmplo[0].empid);
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

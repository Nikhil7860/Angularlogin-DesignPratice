import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-praticeforinterview',
  templateUrl: './praticeforinterview.component.html',
  styleUrls: ['./praticeforinterview.component.css']
})
export class PraticeforinterviewComponent implements OnInit {

  carNamre = 'herohero'
  title = 'Pratice for Interview'
  nikhil = ""
  arvind = ""
  fruitsToGet = ['apple', 'grape', 'pear']

  constructor() {
    carNamre = 'hellooooo'
    var carNamre
    console.log(carNamre, 'gsjfdhmb')
  }

  ngOnInit(): void {

  }


  submit() {
    if (!this.nikhil || !this.arvind) {
      console.log('submiting failed')
      
    }
    else {
      console.log('submiting pass')
      
    }

  }

  // covered thing in upper code is ngModel,interpolation,propertyBinding,eventbinding 

  // below is the senerio for the loop in the async and await Arvind topic 
  // getDataFn() {
  //   for (let i = 0; i < 100000000000; i++) {
  //   }
  //   return 'hello'
  // }

  // async hello() {
  //   let data = await this.getDataFn()
  //   console.log(data, ' in data')
  // }


}




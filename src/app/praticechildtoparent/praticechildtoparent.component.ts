import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-praticechildtoparent',
  templateUrl: './praticechildtoparent.component.html',
  styleUrls: ['./praticechildtoparent.component.css']
})
export class PraticechildtoparentComponent implements OnInit {
  
  @ViewChild(PraticechildtoparentComponent) child: any;
  message = {
    firstName: 'nikhil',
    lastName: 'Arora'
  };
  constructor() { }

  ngOnInit(): void {
    this.message = this.child.message
  }

  // ngAfterViewInit() {

  //   this.message = this.child.message
  // }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-praticechild',
  templateUrl: './praticechild.component.html',
  styleUrls: ['./praticechild.component.css']
})
export class PraticechildComponent implements OnInit {

  @Input()
  childMessage!: string;
  @Input()
  child!: string
  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    
  }

}

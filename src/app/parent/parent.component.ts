import { Component, OnInit } from '@angular/core';
import {datatable} from '../interfaces/datatableInterface';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  //result array of type datatable interface
  result:datatable[]=[
    {SNo:1, Name:'Abhishek',Username:'as10798',City:'Lucknow',Pincode:226016,C_Name:'Origa'},
    {SNo:2, Name:'Shubham',Username:'shu12',City:'Noida',Pincode:221039,C_Name:'Origa'},
    {SNo:3, Name:'Robin',Username:'rob',City:'Noida',Pincode:221039,C_Name:'Origa'},
    {SNo:4, Name:'Yash',Username:'yash123',City:'Noida',Pincode:221039,C_Name:'Origa'}
  ]

  
  constructor() { }

  ngOnInit() {
  }

}

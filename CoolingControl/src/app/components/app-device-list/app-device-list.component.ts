import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from 'src/app/models';

@Component({
  selector: 'app-app-device-list',
  templateUrl: './app-device-list.component.html'
})
export class AppDeviceListComponent  implements OnInit {


  list_data:Device[] = [];


  constructor(private router:Router) {

    this.list_data = [
      {Id:'1', Name:'CHZ 1', Status:0},
      {Id:'2', Name:'CHZ 2', Status:1},
      {Id:'3', Name:'CHZ 3', Status:0},
      {Id:'4', Name:'CHZ 4', Status:-1}
    ]

   }

  ngOnInit() {}

  ShowDetail(data:Device){

    console.log("CLICK")
    if(!data) return;

    console.log("CLICK 2")
    this.router.navigate(['/', 'detail']);
  
  }
}

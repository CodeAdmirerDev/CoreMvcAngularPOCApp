import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-mytest-component',
  templateUrl: './mytest-component.component.html',
  styleUrls: ['./mytest-component.component.css']
})
export class MytestComponentComponent  {



  mytestdata: string = 'initial';

  constructor() {



    setTimeout(() => {

      this.mytestdata = "in 3sec";
    }, 3000);

    setTimeout(() => {

      this.mytestdata = "in 6sec";
    }, 6000);


    setTimeout(() => {

      this.mytestdata = "in 9sec";
    }, 9000);
  }
}

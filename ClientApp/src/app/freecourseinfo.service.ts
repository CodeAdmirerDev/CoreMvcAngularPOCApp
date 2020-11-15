import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FreecourseinfoService {


  constructor() { }


  freecourse = [
    { "id": 1, "name": "Angular10", "description": "step by step process to learn Angular 9", "platform": "Youtube Channel" },
    { "id": 2, "name": "Asp.Net Core", "description": "step by step process to learn Asp.Net Core", "platform": "Facebook page" },
    { "id": 2, "name": "Azure", "description": "step by step process to learn Azure", "platform": "Other" },
  ];

  // Read
  getCourseinfo() {
    return this.freecourse;
  }

  

}

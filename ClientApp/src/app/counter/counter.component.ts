import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { FreecourseinfoService } from '../freecourseinfo.service';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnDestroy {
  constructor(private renderer: Renderer2, private freecouresinfo: FreecourseinfoService) { }

  public currentCount = 0;

  public displayCounter = true;

  public incrementCounter() {
    this.currentCount++;
  }

  public freecourse = null;

  ngOnDestroy() {
    console.log('CounterComponent :OnDestroy');
  }

  toggle() {
    this.displayCounter = !this.displayCounter;
  }

  ngOnInit() {
    this.freecourse = this.freecouresinfo.getCourseinfo();
  }

  //freecourse = [
  //  { "id": 1, "name": "Angular10", "description": "step by step process to learn Angular 9",  "platform": "Youtube Channel" },
  //  { "id": 2, "name": "Asp.Net Core", "description": "step by step process to learn Asp.Net Core", "platform": "Facebook page" },
  //  { "id": 2, "name": "Azure", "description": "step by step process to learn Azure", "platform": "Other" },
  //];

}

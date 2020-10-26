import { Component, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnDestroy {
  constructor(private renderer: Renderer2) { }

  public currentCount = 0;

  public displayCounter = true;

  public incrementCounter() {
    this.currentCount++;
  }

  ngOnDestroy() {
    console.log('CounterComponent :OnDestroy');
  }

  toggle() {
    this.displayCounter = !this.displayCounter;
  }

  freecourse = [
    { "id": 1, "name": "Angular10", "description": "step by step process to learn Angular 9",  "platform": "Youtube Channel" },
    { "id": 2, "name": "Asp.Net Core", "description": "step by step process to learn Asp.Net Core", "platform": "Facebook page" },
    { "id": 2, "name": "Azure", "description": "step by step process to learn Azure", "platform": "Other" },
  ];

}

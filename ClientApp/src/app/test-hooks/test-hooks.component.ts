import { Component,Input, OnInit, OnChanges, OnDestroy, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ContentChild, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test-hooks',
  templateUrl: './test-hooks.component.html',
  styleUrls: ['./test-hooks.component.css']
})


export class TestHooksComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit {

  @ContentChild("ContentInitfire", { read: ElementRef }) testHeadRef: ElementRef;

  @ViewChild("ViewInitfire", { read: ElementRef }) viewInittest: ElementRef;

  constructor(private renderer: Renderer2) { }

  displayCounter = true;
  @Input() data: string;


  lifecyclengOnChangescalls: number = 0;

  lifecyclengOnInitcalls: number = 0;


  ngOnChanges() {

    console.log('ngOnChanges');

    this.lifecyclengOnChangescalls++;

  }

  ngOnInit() {

    console.log('ngOnInit');

    this.lifecyclengOnInitcalls++;

  }


  ngDoCheck() {

  console.log('ngDoCheck');

  }


  ngAfterContentInit() {


    console.log('ngAfterContentInit');

      this.renderer.setStyle(this.testHeadRef.nativeElement, 'background-color', 'red')  


  }

  randomRGB(): string {
    return `rgb(${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)})`;
  }

  
  ngAfterContentChecked() {

    console.log('ngAfterContentChecked');
    //setTimeout(() => {

    //this.renderer.setStyle(this.testHeadRef.nativeElement, 'background-color', this.randomRGB());
    //}, 3000);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');

    setTimeout(() => {
    this.renderer.setStyle(this.viewInittest.nativeElement, 'background-color', 'green');
    }, 6000);
  }

  ngAfterViewChecked() {

    console.log('ngAfterViewChecked');
    //setTimeout(() => {

    //  this.renderer.setStyle(this.viewInittest.nativeElement, 'background-color', this.randomRGB());
    //}, 9000);
  }

  toggle() {
    this.displayCounter = !this.displayCounter;
  }

  ngOnDestroy() {

   console.log('app component ngOnDestroy');

  }

}

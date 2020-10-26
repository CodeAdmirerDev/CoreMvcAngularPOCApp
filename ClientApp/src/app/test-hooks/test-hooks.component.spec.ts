import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHooksComponent } from './test-hooks.component';

describe('TestHooksComponent', () => {
  let component: TestHooksComponent;
  let fixture: ComponentFixture<TestHooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestHooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

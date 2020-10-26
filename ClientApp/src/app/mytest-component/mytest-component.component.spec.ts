import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MytestComponentComponent } from './mytest-component.component';

describe('MytestComponentComponent', () => {
  let component: MytestComponentComponent;
  let fixture: ComponentFixture<MytestComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MytestComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MytestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

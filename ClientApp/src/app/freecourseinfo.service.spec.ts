import { TestBed } from '@angular/core/testing';

import { FreecourseinfoService } from './freecourseinfo.service';

describe('FreecourseinfoService', () => {
  let service: FreecourseinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreecourseinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

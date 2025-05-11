import { TestBed } from '@angular/core/testing';

import { LapsSerivce } from './laps.service';

describe('CarService', () => {
  let service: LapsSerivce;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LapsSerivce);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

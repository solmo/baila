import { TestBed, inject } from '@angular/core/testing';

import { RhythmsService } from './rhythms.service';

describe('RhythmsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RhythmsService]
    });
  });

  it('should be created', inject([RhythmsService], (service: RhythmsService) => {
    expect(service).toBeTruthy();
  }));
});

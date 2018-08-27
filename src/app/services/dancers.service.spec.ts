import { TestBed, inject } from '@angular/core/testing';

import { DancersService } from './dancers.service';

describe('DancersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DancersService]
    });
  });

  it('should be created', inject([DancersService], (service: DancersService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { MisionService } from './mision.service';

describe('ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MisionService = TestBed.get(MisionService);
    expect(service).toBeTruthy();
  });
});

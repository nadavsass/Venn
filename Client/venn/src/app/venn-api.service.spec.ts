import { TestBed } from '@angular/core/testing';

import { VennApiService } from './venn-api.service';

describe('VennApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VennApiService = TestBed.get(VennApiService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TravailleurService } from './travailleur.service';

describe('TravailleurService', () => {
  let service: TravailleurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravailleurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

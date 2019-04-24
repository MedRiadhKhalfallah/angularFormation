import { TestBed } from '@angular/core/testing';

import { EmbaucheServiceService } from './embauche-service.service';

describe('EmbaucheServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmbaucheServiceService = TestBed.get(EmbaucheServiceService);
    expect(service).toBeTruthy();
  });
});

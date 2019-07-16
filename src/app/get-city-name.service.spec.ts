import { TestBed, inject } from '@angular/core/testing';

import { GetCityNameService } from './get-city-name.service';

describe('GetCityNameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetCityNameService]
    });
  });

  it('should be created', inject([GetCityNameService], (service: GetCityNameService) => {
    expect(service).toBeTruthy();
  }));
});

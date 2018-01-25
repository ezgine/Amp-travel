import { TestBed, inject } from '@angular/core/testing';

import { ImgTextService } from './img-text.service';

describe('ImgTextService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImgTextService]
    });
  });

  it('should be created', inject([ImgTextService], (service: ImgTextService) => {
    expect(service).toBeTruthy();
  }));
});

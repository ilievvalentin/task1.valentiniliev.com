import { TestBed } from '@angular/core/testing';

import { HyperlinksService } from './hyperlinks.service';

describe('HyperlinksService', () => {
  let service: HyperlinksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HyperlinksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

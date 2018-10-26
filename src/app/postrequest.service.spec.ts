import { TestBed } from '@angular/core/testing';

import { PostrequestService } from './postrequest.service';

describe('PostrequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostrequestService = TestBed.get(PostrequestService);
    expect(service).toBeTruthy();
  });
});

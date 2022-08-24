import { TestBed } from '@angular/core/testing';

import { PostTweetService } from './post-tweet.service';

describe('PostTweetService', () => {
  let service: PostTweetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostTweetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

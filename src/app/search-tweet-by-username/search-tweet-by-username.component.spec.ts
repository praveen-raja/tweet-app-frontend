import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTweetByUsernameComponent } from './search-tweet-by-username.component';

describe('SearchTweetByUsernameComponent', () => {
  let component: SearchTweetByUsernameComponent;
  let fixture: ComponentFixture<SearchTweetByUsernameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchTweetByUsernameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchTweetByUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTweetComponent } from './delete-tweet.component';

describe('DeleteTweetComponent', () => {
  let component: DeleteTweetComponent;
  let fixture: ComponentFixture<DeleteTweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTweetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostHomeComponent } from './post-home.component';

describe('PostHomeComponent', () => {
  let component: PostHomeComponent;
  let fixture: ComponentFixture<PostHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

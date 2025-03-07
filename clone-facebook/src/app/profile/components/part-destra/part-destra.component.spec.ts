import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartDestraComponent } from './part-destra.component';

describe('PartDestraComponent', () => {
  let component: PartDestraComponent;
  let fixture: ComponentFixture<PartDestraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartDestraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartDestraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartSinistraComponent } from './part-sinistra.component';

describe('PartSinistraComponent', () => {
  let component: PartSinistraComponent;
  let fixture: ComponentFixture<PartSinistraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartSinistraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartSinistraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

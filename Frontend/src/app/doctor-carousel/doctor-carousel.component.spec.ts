import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorCarouselComponent } from './doctor-carousel.component';

describe('DoctorCarouselComponent', () => {
  let component: DoctorCarouselComponent;
  let fixture: ComponentFixture<DoctorCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorCarouselComponent]
    });
    fixture = TestBed.createComponent(DoctorCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

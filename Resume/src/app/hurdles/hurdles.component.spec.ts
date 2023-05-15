import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HurdlesComponent } from './hurdles.component';

describe('HurdlesComponent', () => {
  let component: HurdlesComponent;
  let fixture: ComponentFixture<HurdlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HurdlesComponent]
    });
    fixture = TestBed.createComponent(HurdlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyFlightComponent } from './only-flight.component';

describe('OnlyFlightComponent', () => {
  let component: OnlyFlightComponent;
  let fixture: ComponentFixture<OnlyFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlyFlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

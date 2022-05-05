import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxiTripsZipcodesComponent } from './taxi-trips-zipcodes.component';

describe('TaxiTripsZipcodesComponent', () => {
  let component: TaxiTripsZipcodesComponent;
  let fixture: ComponentFixture<TaxiTripsZipcodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxiTripsZipcodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxiTripsZipcodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

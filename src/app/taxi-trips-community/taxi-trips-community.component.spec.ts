import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxiTripsCommunityComponent } from './taxi-trips-community.component';

describe('TaxiTripsCommunityComponent', () => {
  let component: TaxiTripsCommunityComponent;
  let fixture: ComponentFixture<TaxiTripsCommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxiTripsCommunityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxiTripsCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

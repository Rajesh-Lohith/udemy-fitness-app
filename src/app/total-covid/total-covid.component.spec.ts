import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCovidComponent } from './total-covid.component';

describe('TotalCovidComponent', () => {
  let component: TotalCovidComponent;
  let fixture: ComponentFixture<TotalCovidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalCovidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

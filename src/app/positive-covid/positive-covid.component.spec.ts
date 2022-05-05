import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositiveCovidComponent } from './positive-covid.component';

describe('PositiveCovidComponent', () => {
  let component: PositiveCovidComponent;
  let fixture: ComponentFixture<PositiveCovidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositiveCovidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositiveCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

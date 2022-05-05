import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegativeCovidComponent } from './negative-covid.component';

describe('NegativeCovidComponent', () => {
  let component: NegativeCovidComponent;
  let fixture: ComponentFixture<NegativeCovidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NegativeCovidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NegativeCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

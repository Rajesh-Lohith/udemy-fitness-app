import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnemploymentComponent } from './unemployment.component';

describe('UnemploymentComponent', () => {
  let component: UnemploymentComponent;
  let fixture: ComponentFixture<UnemploymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnemploymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnemploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

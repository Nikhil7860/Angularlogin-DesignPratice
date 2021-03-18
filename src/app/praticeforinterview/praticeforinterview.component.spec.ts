import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraticeforinterviewComponent } from './praticeforinterview.component';

describe('PraticeforinterviewComponent', () => {
  let component: PraticeforinterviewComponent;
  let fixture: ComponentFixture<PraticeforinterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PraticeforinterviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PraticeforinterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

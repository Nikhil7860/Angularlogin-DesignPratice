import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraticechildtoparentComponent } from './praticechildtoparent.component';

describe('PraticechildtoparentComponent', () => {
  let component: PraticechildtoparentComponent;
  let fixture: ComponentFixture<PraticechildtoparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PraticechildtoparentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PraticechildtoparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

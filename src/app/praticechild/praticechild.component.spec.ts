import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraticechildComponent } from './praticechild.component';

describe('PraticechildComponent', () => {
  let component: PraticechildComponent;
  let fixture: ComponentFixture<PraticechildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PraticechildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PraticechildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

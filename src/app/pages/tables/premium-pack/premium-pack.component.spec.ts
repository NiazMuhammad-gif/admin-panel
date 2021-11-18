import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumPackComponent } from './premium-pack.component';

describe('PremiumPackComponent', () => {
  let component: PremiumPackComponent;
  let fixture: ComponentFixture<PremiumPackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiumPackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumPackFormComponent } from './premium-pack-form.component';

describe('PremiumPackFormComponent', () => {
  let component: PremiumPackFormComponent;
  let fixture: ComponentFixture<PremiumPackFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiumPackFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumPackFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumUserFormComponent } from './premium-user-form.component';

describe('PremiumUserFormComponent', () => {
  let component: PremiumUserFormComponent;
  let fixture: ComponentFixture<PremiumUserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiumUserFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

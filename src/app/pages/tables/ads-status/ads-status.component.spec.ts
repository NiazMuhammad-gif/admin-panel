import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsStatusComponent } from './ads-status.component';

describe('AdsStatusComponent', () => {
  let component: AdsStatusComponent;
  let fixture: ComponentFixture<AdsStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

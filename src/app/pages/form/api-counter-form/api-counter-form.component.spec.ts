import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCounterFormComponent } from './api-counter-form.component';

describe('ApiCounterFormComponent', () => {
  let component: ApiCounterFormComponent;
  let fixture: ComponentFixture<ApiCounterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiCounterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiCounterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

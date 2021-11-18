import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransTypeComponent } from './trans-type.component';

describe('TransTypeComponent', () => {
  let component: TransTypeComponent;
  let fixture: ComponentFixture<TransTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

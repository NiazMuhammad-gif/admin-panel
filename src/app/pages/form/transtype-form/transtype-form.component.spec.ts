import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranstypeFormComponent } from './transtype-form.component';

describe('TranstypeFormComponent', () => {
  let component: TranstypeFormComponent;
  let fixture: ComponentFixture<TranstypeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranstypeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranstypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

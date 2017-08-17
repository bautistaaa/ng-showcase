import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTestsComponent } from './unit-tests.component';

describe('UnitTestsComponent', () => {
  let component: UnitTestsComponent;
  let fixture: ComponentFixture<UnitTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

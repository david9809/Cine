import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAdminHourComponent } from './new-admin-hour.component';

describe('NewAdminHourComponent', () => {
  let component: NewAdminHourComponent;
  let fixture: ComponentFixture<NewAdminHourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAdminHourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAdminHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHoursComponent } from './admin-hours.component';

describe('AdminHoursComponent', () => {
  let component: AdminHoursComponent;
  let fixture: ComponentFixture<AdminHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

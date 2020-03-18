import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAdminTheaterComponent } from './new-admin-theater.component';

describe('NewAdminTheaterComponent', () => {
  let component: NewAdminTheaterComponent;
  let fixture: ComponentFixture<NewAdminTheaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAdminTheaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAdminTheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

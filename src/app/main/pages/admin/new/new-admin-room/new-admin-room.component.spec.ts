import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAdminRoomComponent } from './new-admin-room.component';

describe('NewAdminRoomComponent', () => {
  let component: NewAdminRoomComponent;
  let fixture: ComponentFixture<NewAdminRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAdminRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAdminRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

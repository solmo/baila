import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelsAdminComponent } from './channels-admin.component';

describe('ChannelsAdminComponent', () => {
  let component: ChannelsAdminComponent;
  let fixture: ComponentFixture<ChannelsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

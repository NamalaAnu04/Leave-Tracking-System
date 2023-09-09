import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectLeaveComponent } from './reject-leave.component';

describe('RejectLeaveComponent', () => {
  let component: RejectLeaveComponent;
  let fixture: ComponentFixture<RejectLeaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RejectLeaveComponent]
    });
    fixture = TestBed.createComponent(RejectLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

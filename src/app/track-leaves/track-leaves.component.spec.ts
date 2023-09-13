import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackLeaveComponent } from './track-leaves.component';

describe('TrackLeavesComponent', () => {
  let component: TrackLeaveComponent;
  let fixture: ComponentFixture<TrackLeaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackLeaveComponent]
    });
    fixture = TestBed.createComponent(TrackLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

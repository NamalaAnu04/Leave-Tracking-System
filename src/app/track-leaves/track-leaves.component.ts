import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-track-leave',
  templateUrl: './track-leaves.component.html',
  styleUrls: ['./track-leaves.component.css'],
})
export class TrackLeaveComponent implements OnInit {
  leaveApplications: any[] = [];
  user: any; 
  rejectionReasons: { [leaveIndex: number]: string } = {};
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.loadLeaveApplications();
  }
  loadLeaveApplications(): void {
    this.user = JSON.parse(localStorage.getItem('loginUser') || '{}');
    const existingLeaves = JSON.parse(localStorage.getItem('leaves') || '[]');
    this.leaveApplications = existingLeaves
      .filter((leave: any) => leave.fname === this.user.fname)
      .map((leave: any) => {
        leave.status = this.getLeaveStatus(leave.leaveIndex);
        if (leave.status === 'Rejected' && leave.rejectReason) {
          this.rejectionReasons[leave.leaveIndex] = leave.rejectReason;
        }
        return leave;
      });
  }
  getLeaveStatus(applicationId: number): string {
    const leaveData = JSON.parse(localStorage.getItem('leaves') || '[]');
    const application = leaveData.find(
      (leave: any) => leave.leaveIndex === applicationId
    );
    return application ? application.status : 'Pending';
  }
  editLeave(index: number): void {
    this.router.navigate(['/edit-leave', index - 1]);
  }
  deleteLeave(application: any): void {
    const existingLeaves = JSON.parse(localStorage.getItem('leaves') || '[]');
    const leaveIndexToDelete = application.leaveIndex;
    const updatedLeaves = existingLeaves.filter(
      (leave: any) => leave.leaveIndex !== leaveIndexToDelete
    );

    for (let i = 0; i < updatedLeaves.length; i++) {
      updatedLeaves[i].leaveIndex = i + 1;
    }

    localStorage.setItem('leaves', JSON.stringify(updatedLeaves));
    this.leaveApplications = updatedLeaves.filter(
      (leave: any) => leave.fname === this.user.fname
    );
  }
}

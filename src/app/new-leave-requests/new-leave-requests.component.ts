import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-leave-requests',
  templateUrl: './new-leave-requests.component.html',
  styleUrls: ['./new-leave-requests.component.css'],
})
export class NewLeaveRequestsComponent implements OnInit {
  signupObj: any = {
    fname: '',
    lname: '',
    email: '',
    password: '',
  };
  leaveApplications: any[] = [];
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadLeaveApplications();
    const user = JSON.parse(localStorage.getItem('loginUser') || '{}');
    if (user.fname) {
      this.signupObj = user;
    }
  }
  logout() {
    localStorage.removeItem('loginUser');
  }
  loadLeaveApplications(): void {
    const existingLeaves = JSON.parse(localStorage.getItem('leaves') || '[]');
    this.leaveApplications = existingLeaves.filter(
      (application: any) => application.status === 'Pending'
    );
  }

  acceptLeave(application: any): void {
    const indexToUpdate = this.leaveApplications.findIndex(
      (leave) => leave.leaveIndex === application.leaveIndex
    );
    if (indexToUpdate !== -1) {
      this.leaveApplications[indexToUpdate].status = 'Accepted';
      this.updateStatusInLocalStorage(this.leaveApplications[indexToUpdate]);
    }
  }
  rejectLeave(application: any): void {
    this.router.navigate(['/reject-leave', application.leaveIndex]);
  }
  private updateStatusInLocalStorage(updatedLeave: any): void {
    const existingLeaves = JSON.parse(localStorage.getItem('leaves') || '[]');
    const updatedLeaves = existingLeaves.map((leave: any) => {
      if (leave.leaveIndex === updatedLeave.leaveIndex) {
        return updatedLeave;
      } else {
        return leave;
      }
    });
    localStorage.setItem('leaves', JSON.stringify(updatedLeaves));
  }
}

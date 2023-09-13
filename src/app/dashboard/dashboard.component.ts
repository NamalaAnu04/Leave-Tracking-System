import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  signupObj: any = {
    fname: '',
    lname: '',
    email: '',
    password: '',
  };
  appliedLeavesCount: number = 0;
  acceptedLeavesCount: number = 0;
  rejectedLeavesCount: number = 0;
  pendingLeavesCount: number = 0;

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('loginUser') || '{}');
    if (user.fname) {
      this.signupObj = user;
    }

    const leaves = JSON.parse(localStorage.getItem('leaves') || '[]');

    const userLeaves = leaves.filter(
      (leave: any) => leave.fname === this.signupObj.fname && leave.email===this.signupObj.email
    );
    this.appliedLeavesCount = userLeaves.length;
    this.acceptedLeavesCount = userLeaves.filter(
      (leave: any) => leave.status === 'Accepted'
    ).length;
    this.rejectedLeavesCount = userLeaves.filter(
      (leave: any) => leave.status === 'Rejected'
    ).length;
    this.pendingLeavesCount = userLeaves.filter(
      (leave: any) => leave.status === 'Pending'
    ).length;
  }
  logout() {
    localStorage.removeItem('loginUser');
  }
}

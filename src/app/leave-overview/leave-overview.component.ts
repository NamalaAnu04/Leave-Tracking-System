import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leave-overview',
  templateUrl: './leave-overview.component.html',
  styleUrls: ['./leave-overview.component.css']
})
export class LeaveOverviewComponent implements OnInit {
  leaveApplications: any[] = [];
  acceptedLeaves: number = 0;
  rejectedLeaves: number = 0;
  pendingLeaves: number = 0;
  leavesTakenInCurrentMonth: number = 0;
  leavesTakenInCurrentYear: number = 0;  

  constructor() { }

  ngOnInit(): void {
    this.loadLeaveApplications();
  }

  loadLeaveApplications(): void {
    const existingLeaves = JSON.parse(localStorage.getItem('leaves') || '[]');
    
    this.leaveApplications = existingLeaves.filter((application: any) => {
      return application.status === 'Accepted' || application.status === 'Rejected' || application.status === 'Pending';
    });
  
    this.acceptedLeaves = this.leaveApplications.filter((application) => application.status === 'Accepted').length;
    this.rejectedLeaves = this.leaveApplications.filter((application) => application.status === 'Rejected').length;
    this.pendingLeaves = this.leaveApplications.filter((application) => application.status === 'Pending').length;
  
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; 
    const currentYear = currentDate.getFullYear();
    this.leavesTakenInCurrentMonth = this.leaveApplications.filter((application) => {
      const leaveDate = new Date(application.startDate);
      return application.status === 'Accepted' && leaveDate.getMonth() + 1 === currentMonth && leaveDate.getFullYear() === currentYear;
    }).length;
  
    this.leavesTakenInCurrentYear = this.leaveApplications.filter((application) => {
      const leaveDate = new Date(application.startDate);
      return application.status === 'Accepted' && leaveDate.getFullYear() === currentYear;
    }).length;
  }
}

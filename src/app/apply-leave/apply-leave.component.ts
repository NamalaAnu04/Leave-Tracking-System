import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css'],
})
export class ApplyLeaveComponent {
  constructor(private router: Router) {}
  leaves: any[] = [];
  leaveObj: any = {
    leaveIndex: 0,
    leaveType: '',
    startDate: '',
    endDate: '',
    reason: '',
    fname: '',
    status: '',
    email:''
  };
  signupObj: any = {
    fname: '',
    lname: '',
    email: '',
    password: '',
  };
  onSubmit() {
    if (
      this.leaveObj.leaveType.trim() !== '' &&
      this.leaveObj.startDate.trim() !== '' &&
      this.leaveObj.endDate.trim() !== '' &&
      this.leaveObj.reason.trim() !== ''
    ) {
      const existingLeaves = JSON.parse(localStorage.getItem('leaves') || '[]');
      this.leaveObj.leaveIndex = existingLeaves.length + 1;
      this.leaveObj.fname = this.signupObj.fname;
      this.leaveObj.email=this.signupObj.email;
      this.leaveObj.status = 'Pending';
      existingLeaves.push(this.leaveObj);
      localStorage.setItem('leaves', JSON.stringify(existingLeaves));
      this.leaveObj = {
        leaveType: '',
        startDate: '',
        endDate: '',
        reason: '',
      };
      this.router.navigate(['/track-leave']);
    }
  }
  ngOnInit(): void {
    const name = localStorage.getItem('loginUser');
    if (name) {
      this.signupObj = JSON.parse(name);
      console.log(this.signupObj.fname);
    }
  }
  logout() {
    localStorage.removeItem('loginUser');
  }
}

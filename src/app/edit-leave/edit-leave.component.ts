import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-leave',
  templateUrl: './edit-leave.component.html',
  styleUrls: ['./edit-leave.component.css'],
})
export class EditLeaveComponent implements OnInit {
  leaveApplication: any = {}; 
  index!: number;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.index = +params['index'];
      this.loadLeaveApplication(this.index);
    });
  }

  loadLeaveApplication(index: number): void {
    const existingLeaves = JSON.parse(localStorage.getItem('leaves') || '[]');
    if (index >= 0 && index < existingLeaves.length) {
      this.leaveApplication = { ...existingLeaves[index] };
    }
  }

  updateLeave(): void {
    const existingLeaves = JSON.parse(localStorage.getItem('leaves') || '[]');
    if (this.index >= 0 && this.index < existingLeaves.length) {
      existingLeaves[this.index] = this.leaveApplication;
      localStorage.setItem('leaves', JSON.stringify(existingLeaves));
      this.router.navigate(['/track-leave']);
    }
  }
}

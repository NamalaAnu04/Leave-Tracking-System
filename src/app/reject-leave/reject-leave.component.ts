import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reject-leave',
  templateUrl: './reject-leave.component.html',
  styleUrls: ['./reject-leave.component.css'],
})
export class RejectLeaveComponent implements OnInit {
  rejectReason: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  rejectLeave(): void {
    if (this.route.snapshot.paramMap) {
      const leaveIndex = +this.route.snapshot.paramMap.get('leaveIndex')!;
      const existingLeaves = JSON.parse(localStorage.getItem('leaves') || '[]');

      const leaveToUpdate = existingLeaves.find(
        (leave: any) => leave.leaveIndex === leaveIndex
      );

      if (leaveToUpdate) {
        leaveToUpdate.status = 'Rejected';

        leaveToUpdate.rejectReason = this.rejectReason;
        const updatedLeaves = existingLeaves.map((leave: any) =>
          leave.leaveIndex === leaveIndex ? leaveToUpdate : leave
        );

        localStorage.setItem('leaves', JSON.stringify(updatedLeaves));

        this.router.navigate(['/new-leave-requests']);
      } else {
        console.error('Leave request not found.');
      }
    }
  }
}

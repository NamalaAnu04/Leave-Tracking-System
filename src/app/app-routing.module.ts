import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { TrackLeaveComponent } from './track-leaves/track-leaves.component';
import { EditLeaveComponent } from './edit-leave/edit-leave.component';
import { ManagerComponent } from './manager/manager.component';
import { NewLeaveRequestsComponent } from './new-leave-requests/new-leave-requests.component';
import { LeaveOverviewComponent } from './leave-overview/leave-overview.component';
import { RejectLeaveComponent } from './reject-leave/reject-leave.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  {path:'apply-leave',component:ApplyLeaveComponent},
  {path:'track-leave',component:TrackLeaveComponent},
  {path:'edit-leave/:index',component:EditLeaveComponent},
  {path:'manager',component:ManagerComponent},
  {path:'new-leave-requests',component:NewLeaveRequestsComponent},
  {path:'leave-overview',component:LeaveOverviewComponent},
  { path: 'reject-leave/:leaveIndex', component: RejectLeaveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

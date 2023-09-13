import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { TrackLeaveComponent } from './track-leaves/track-leaves.component';
import { ManagerComponent } from './manager/manager.component';
import { EditLeaveComponent } from './edit-leave/edit-leave.component';
import { NewLeaveRequestsComponent } from './new-leave-requests/new-leave-requests.component';
import { LeaveOverviewComponent } from './leave-overview/leave-overview.component';
import { RejectLeaveComponent } from './reject-leave/reject-leave.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ApplyLeaveComponent,
    TrackLeaveComponent,
    ManagerComponent,
    EditLeaveComponent,
    NewLeaveRequestsComponent,
    LeaveOverviewComponent,
    RejectLeaveComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMeetingComponent } from './add-meeting/add-meeting.component';


const routes: Routes = [{ path: '', component: AddMeetingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddMeetingRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddMeetingRoutingModule } from './add-meeting-routing.module';
import { AddMeetingComponent } from './add-meeting/add-meeting.component';
import { AppMaterialModule } from '../app-material/app-material.module';


@NgModule({
  declarations: [AddMeetingComponent],
  imports: [
    CommonModule,
    AddMeetingRoutingModule,
    AppMaterialModule
  ]
})
export class AddMeetingModule { }

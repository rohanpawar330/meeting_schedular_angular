import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddMeetingDialogComponent } from 'src/app/dialog/add-meeting-dialog/add-meeting-dialog.component';

@Component({
  selector: 'app-add-meeting',
  templateUrl: './add-meeting.component.html',
  styleUrls: ['./add-meeting.component.scss']
})
export class AddMeetingComponent implements OnInit {

  // variables
  datePicked: any
  parameter: any;
  commentFC = new FormControl();
  meetingArray: any = []

  /**
   * get data from home page by activatedRoute
   * @param activatedRoute 
   * @param router 
   * @param dialog to open dialog when meeting is been craeted
   */
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private dialog: MatDialog) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.parameter = this.router.getCurrentNavigation().extras.state.params
      }
    });
  }

  ngOnInit(): void {
  }

  /**
   * function to schedule meeting
   * @param startTime start time of meeting
   * @param endTime end time of meeting
   */
  addMeeting(startTime, endTime) {
    let newMeetStart = startTime.defaultTime.split(":").join("");
    let newMeetEnd = endTime.defaultTime.split(":").join("");
    let oldMeetStart: any;
    let oldMeetEnd: any;
    if (newMeetEnd > newMeetStart) {
      this.meetingArray.length = 0

      console.log(this.parameter, startTime.defaultTime, endTime.defaultTime, this.commentFC.value);
      if (this.parameter.items.length > 0)
        this.parameter.items.forEach(element => {
          oldMeetStart = ("0" + (element.start_time.split(":").join(""))).slice(-4);
          oldMeetEnd = ("0" + (element.end_time.split(":").join(""))).slice(-4);


          if ((oldMeetStart <= newMeetStart && newMeetStart <= oldMeetEnd)) {
            this.meetingArray.push({
              createMeeting: 'Slot not available',
              startTime: startTime.defaultTime,
              endTime: endTime.defaultTime,
              scheduledMeeting: ` ${element.start_time} - ${element.end_time}`
            })

          } else if (oldMeetStart <= newMeetEnd && newMeetEnd <= oldMeetEnd) {
            this.meetingArray.push({
              createMeeting: 'Slot not available',
              startTime: startTime.defaultTime,
              endTime: endTime.defaultTime,
              scheduledMeeting: ` ${element.start_time} - ${element.end_time}`
            })
          } else {
            this.meetingArray.push({
              createMeeting: 'Meeting Scheduled',
              startTime: startTime.defaultTime,
              endTime: endTime.defaultTime
            })
          }
        });
      if (!this.meetingArray.some(item => item.createMeeting == 'Slot not available'))
        this.dialog.open(AddMeetingDialogComponent, {
          data: {
            startTime: startTime.defaultTime,
            endTime: endTime.defaultTime
          }
        })
      console.log(this.meetingArray)
    }
  }


}

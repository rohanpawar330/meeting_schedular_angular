import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // variables
  public date: any = new Date();
  responseData: any;
  public currentDate: any;

  constructor(private service: ServicesService, private router: Router) {
    this.currentDate = this.date
  }

  /**
   * service call for specific date
   */
  ngOnInit(): void {
    this.getDateData(this.date)
  }

  /**
   * passing the selected date 
   * @param date in format 12 Aug 2020
   */
  getDateData(date) {
    this.service.getData(`https://fathomless-shelf-5846.herokuapp.com/api/schedule?date="${date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()}"`).subscribe(rep => this.responseData = rep)

  }

  /**
   * function to get the date when clicked in back button
   */
  backDate() {
    let yesterDay = new Date(this.date)
    this.date = yesterDay.setDate(yesterDay.getDate() - 1);
    this.getDateData(yesterDay)
  }

  /**
   * function to get the date when clicked in forward button
   */
  forwardDate() {
    let tomorrow = new Date(this.date)
    this.date = tomorrow.setDate(tomorrow.getDate() + 1);
    this.getDateData(tomorrow)

  }

  /**
   * go to add meeting page
   * @param date sending selected date
   * @param items passing whole list of date of slected date meeting
   */
  goToAddMeeting(date: any, items) {
    console.log(date);

    let navigationExtras: NavigationExtras = {
      state: {
        params: {
          "date": date,
          "items": items
        }
      }
    };
    this.router.navigate(['/add-meeting'], navigationExtras)
  }

}

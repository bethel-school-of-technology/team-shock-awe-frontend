import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private myEmployeeService: EmployeeService) {}

  loginId = '';
  displayAlert: boolean = false;
  alertmessage: string = '';
  time = '';
  timeWorked = '';
  timeString = '';
  firstName = '';
  lastName = '';

  ngOnInit(): void {}
  clockIn() {
    this.timeString = '';
    this.myEmployeeService.clockIn(this.loginId).subscribe((res) => {
      console.log(res);

      if (res.status === 200) {
        this.alertmessage = res.message;
        this.firstName = res.firstName;
        this.lastName = res.lastName;
        this.time = res.time;
        this.displayAlert = true;
        // window.alert("You are clocked in!")
      } else {
        this.time = '';
        this.alertmessage = res.message;
        this.displayAlert = true;
        // window.alert("Error clocking in")
      }
    });
  }
  clockOut() {
    this.timeString = '';
    this.myEmployeeService.clockOut(this.loginId).subscribe((res) => {
      console.log(res);
      if (res.status === 200) {
        this.alertmessage = res.message;
        this.time = res.time;
        this.timeWorked = res.timeWorked;
        this.timeString = this.timeWorkedString(this.timeWorked);
        this.displayAlert = true;
        // window.alert("You are clocked out!")
      } else {
        this.time = '';
        this.firstName = '';
        this.lastName = '';
        this.alertmessage = res.message;
        this.displayAlert = true;
        // window.alert("Error clocking out")
      }
    });
  }
  toggleAlert() {
    this.displayAlert = !this.displayAlert;
  }

  timeWorkedString(millseconds) {
    var oneSecond = 1000;
    var oneMinute = oneSecond * 60;
    var oneHour = oneMinute * 60;
    var oneDay = oneHour * 24;

    var seconds = Math.floor((millseconds % oneMinute) / oneSecond);
    var minutes = Math.floor((millseconds % oneHour) / oneMinute);
    var hours = Math.floor((millseconds % oneDay) / oneHour);
    var days = Math.floor(millseconds / oneDay);

    var timeString = '';
    if (days !== 0) {
      timeString += days !== 1 ? days + ' days ' : days + ' day ';
    }
    if (hours !== 0) {
      timeString += hours !== 1 ? hours + ' hours ' : hours + ' hour ';
    }
    if (minutes !== 0) {
      timeString +=
        minutes !== 1 ? minutes + ' minutes ' : minutes + ' minute ';
    }
    if (seconds !== 0 || millseconds < 1000) {
      timeString +=
        seconds !== 1 ? seconds + ' seconds ' : seconds + ' second ';
    }

    return timeString;
  }
}

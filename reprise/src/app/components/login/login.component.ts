import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private myEmployeeService: EmployeeService) { }

  loginId = "";
  displayAlert: boolean = false;
  alertmessage: string = "";
  time = "";

  ngOnInit(): void { }
  clockIn() {
    this.myEmployeeService.clockIn(this.loginId).subscribe((res) => {
      console.log(res);
      if (res.status === 200) {
        this.alertmessage = res.message
        this.time = res.time
        this.displayAlert = true;
        // window.alert("You are clocked in!")
      } else {
        this.alertmessage = res.message
        this.displayAlert = true;
       // window.alert("Error clocking in")
      }
    });
  }
  clockOut() {
    this.myEmployeeService.clockOut(this.loginId).subscribe((res) => {
      console.log(res);
      if (res.status === 200) {
        this.alertmessage = res.message
        this.time = res.time
        this.displayAlert = true;
        // window.alert("You are clocked out!")
      } else {
        this.alertmessage = res.message
        this.displayAlert = true;
        // window.alert("Error clocking out")
      }
    });
  }
  toggleAlert() {
    this.displayAlert = !this.displayAlert;
  }
}

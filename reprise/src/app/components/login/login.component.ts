import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private myEmployeeService: EmployeeService) {}

  loginId = "";

  ngOnInit(): void {}
  clockIn() {
    this.myEmployeeService.clockIn(this.loginId).subscribe((res) => {
      console.log(res);
      if(res.status === 200){
        window.alert("You are clocked in!")
      } else {
        window.alert("Error clocking in")
      }
    });
  }
  clockOut() {
    this.myEmployeeService.clockOut(this.loginId).subscribe((res) => {
      console.log(res);
      if(res.status === 200){
        window.alert("You are clocked out!")
      } else {
        window.alert("Error clocking out")
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';



@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  constructor(private myAdminService: AdminService) { }

  userName = "";
  password = "";

  ngOnInit(): void {

  }

  login() {
    this.myAdminService.login(this.userName, this.password).subscribe((res) => {
      console.log(res);
      if (res.status === 200) {
        window.alert("You are logged in!")
      } else {
        window.alert("Error logging in!")
      }
    });

  }}

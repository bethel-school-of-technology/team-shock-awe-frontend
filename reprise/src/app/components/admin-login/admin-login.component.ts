import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  constructor(private myAdminService: AdminService, private myRouter: Router) { }

  userName = "";
  password = "";

  ngOnInit(): void {

  }

  login() {
    this.myAdminService.login(this.userName, this.password).subscribe((res) => {
      console.log(res);
      if (res.status === 200) {
        localStorage.setItem("kbtoken", res.token)
        window.alert("You are logged in!")
        this.myRouter.navigate(["/profile"])
      } else {
        window.alert("Error logging in!")
      }
    });

  }}

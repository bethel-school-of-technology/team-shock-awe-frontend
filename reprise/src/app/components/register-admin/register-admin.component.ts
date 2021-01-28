import { Component, OnInit } from '@angular/core';

import { Admin } from 'src/app/models/admin';
import { AdminService } from 'src/app/services/admin.service';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'

import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.scss']
})
export class RegisterAdminComponent implements OnInit {
  newAdmin: Admin = new Admin();
  constructor(
    private myAdminService: AdminService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

const Admin = new Admin()
constructor(private AdminService: AdminService, private Router: Router) { }

ngOnInit(): void {
}
// creating the response to add admin service function
registerAdmin(){
  console.log("testing")
  console.log(this.newAdmin)
  // created the adminService function and then subscribed to my response
  this.myAdminService.registerAdmin(this.newAdmin).subscribe(myResponse => {
    console.log(myResponse);
    this.router.navigate(["/profile"]);
  })
}
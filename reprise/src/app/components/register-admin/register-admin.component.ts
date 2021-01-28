import { Component, OnInit } from '@angular/core';

import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.scss']
})
export class RegisterAdminComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

import { Component, OnInit } from '@angular/core';


const Admin = new Admin()
constructor(private myAdminService: AdminService, private Router: Router) { }

ngOnInit(): void {
}
// creating the response to add admin service function
registerAdmin(){
  console.log("testing")
  console.log(this.newEmployee)
  // created the adminService function and then subscribed to my response
  this.myAdminService.registerAdmin(this.newAdmin).subscribe(myResponse => {
    console.log(myResponse);
    this.router.navigate(["/profile"]);
  })
}
}
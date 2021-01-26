import { Component, OnInit } from '@angular/core';

import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  newEmployee:Employee = new Employee()
  constructor(private myEmployeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }
  // creating the response to add employee service function
  registerEmployee(){
    console.log("testing")
console.log(this.newEmployee)
// created the employeeService function and then subscribed to my response
this.myEmployeeService.registerEmployee(this.newEmployee).subscribe(myResponse => {
  console.log(myResponse);
  this.router.navigate(["/profile"]);
})
  }
}

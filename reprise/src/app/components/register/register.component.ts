import { Component, OnInit } from '@angular/core';

import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  newEmployee: Employee = new Employee();
  constructor(
    private myEmployeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  // creating the response to add employee service function
  registerEmployee() {
    console.log('testing');
    console.log(this.newEmployee);

    let validated = this.validateForm(this.newEmployee);
    // created the employeeService function and then subscribed to my response
    if (validated) {
      this.myEmployeeService
        .registerEmployee(this.newEmployee)
        .subscribe((myResponse) => {
          console.log(myResponse);
          this.router.navigate(['/profile']);
        });
    }
  }
  validateForm(emp: Employee) { 
    if (emp.firstName.length === 0 || emp.firstName === null) {
      alert('First Name Cannot Be Empty');
      return false;
    }
    if (emp.lastName.length === 0 || emp.lastName === null) {
      alert('Last Name Cannot Be Empty');
      return false;
    }
    if (emp.streetAddress.length === 0 || emp.streetAddress === null) {
      alert('Street Address Cannot Be Empty');
      return false;
    }
    if (emp.state.length === 0 || emp.state === null) {
      alert('State Cannot Be Empty');
      return false;
    }
    if (emp.email.length === 0 || emp.email === null) {
      alert('Email Cannot Be Empty');
      return false;
    }
    if (emp.phoneNumber.length === 0 || emp.phoneNumber === null) {
      alert('Phone Number Cannot Be Empty');
      return false;
    }
    if (emp.department.length === 0 || emp.department === null) {
      alert('Department Cannot Be Empty');
      return false;
    }
    if (emp.position.length === 0 || emp.position === null) {
      alert('Position Cannot Be Empty');
      return false;
    }
    if (emp.wageRate.length === 0 || emp.wageRate === null) {
      alert('Wage Rate Cannot Be Empty');
      return false;
    }
    return true;
  }
}

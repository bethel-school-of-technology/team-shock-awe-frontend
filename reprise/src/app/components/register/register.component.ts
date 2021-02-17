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

  displayAlert: boolean = false;
  alertmessage: string = '';

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
        .subscribe((myResponse: any) => {
          console.log(myResponse);
          if(myResponse.status === 200){
            this.router.navigate(['/profile']);
          }
          else{
            alert("Need Unique Login ID or Email");
          }
        });
    }
  }
  

  // requiring the form to be filled out before submitting
  validateForm(emp: Employee) {
    if (emp.firstName.length === 0 || emp.firstName === null) {
      this.alertmessage = 'First Name Cannot Be Empty';
      this.displayAlert = true;
      return false;
    }
    if (emp.lastName.length === 0 || emp.lastName === null) {
      this.alertmessage = 'Last Name Cannot Be Empty';
      this.displayAlert = true;
      return false;
    }
    if (emp.streetAddress.length === 0 || emp.streetAddress === null) {
      this.alertmessage = 'Street Address Cannot Be Empty';
      this.displayAlert = true;
      return false;
    }
    if (emp.state.length === 0 || emp.state === null) {
      this.alertmessage = 'State Cannot Be Empty';
      this.displayAlert = true;
      return false;
    }
    if (emp.email.length === 0 || emp.email === null) {
      this.alertmessage = 'Email Cannot Be Empty';
      this.displayAlert = true;
      return false;
    }
    if (emp.phoneNumber.length === 0 || emp.phoneNumber === null) {
      this.alertmessage = 'Phone Number Cannot Be Empty';
      this.displayAlert = true;
      return false;
    }
    if (emp.department.length === 0 || emp.department === null) {
      this.alertmessage = 'Department Cannot Be Empty';
      this.displayAlert = true;
      return false;
    }
    if (emp.position.length === 0 || emp.position === null) {
      this.alertmessage = 'Position Cannot Be Empty';
      this.displayAlert = true;
      return false;
    }
    if (emp.wageRate.length === 0 || emp.wageRate === null) {
      this.alertmessage = 'Wage Rate Cannot Be Empty';
      this.displayAlert = true;
      return false;
    }
    return true;
  }

  toggleAlert() {
    this.displayAlert = !this.displayAlert;
  }
}

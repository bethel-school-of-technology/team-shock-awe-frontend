import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  newEmployee:Employee = new Employee()
  constructor(private myEmployeeService:EmployeeService) { }

  ngOnInit(): void {
  }
  // creating the response to add employee service function
  addEmployee(){
    console.log("testing")
console.log(this.newEmployee)
// created the employeeService function and then subscribed to my response
this.myEmployeeService.addEmployee(this.newEmployee).subscribe(myResponse => {
  console.log(myResponse)
})
  }
}

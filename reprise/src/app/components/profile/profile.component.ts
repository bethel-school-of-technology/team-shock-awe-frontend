import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  // property to store all employees from the method of pulling them
  listOfEmployees: Employee[] = [];

  constructor(private myEmployeeService: EmployeeService, private myAdminService: AdminService) { }

  ngOnInit(): void {
    this.myEmployeeService.getAllEmployees().subscribe(response => {
      console.log(response);
      this.listOfEmployees = response.employeeList;
    })
    this.myAdminService.getAdminProfile().subscribe(response => {
      console.log(response);
    })
  }

}
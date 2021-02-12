import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent implements OnInit {
 // Property to store list of employees
 listofemployees: Employee[] = [];
 
 constructor(private myEmployeeService: EmployeeService) { }

  ngOnInit(): void {
    this.myEmployeeService.getAllEmployees().subscribe(response => {
      console.log(response);
      this.listofemployees = response.employeeList;
    })
  }

}

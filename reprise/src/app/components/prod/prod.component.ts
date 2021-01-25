import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.scss']
})
export class ProdComponent implements OnInit {

  //Property to store all employees of the prod dept
  listofemployees: Employee[] = [];

  constructor(private myEmployeeService: EmployeeService) { }

  ngOnInit(): void {
    this.myEmployeeService.getAllEmployees().subscribe(response => {
      console.log(response);
      this.listofemployees = response;
    })
  }
}

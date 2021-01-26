import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  newEmployee: Employee = new Employee();

  constructor(private myEmployeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  registerNew(form: NgForm){
    this.myEmployeeService.registerEmployee(this.newEmployee).subscribe(response => {
      console.log(response);
      this.router.navigate(["home"]);
    })
  }
}

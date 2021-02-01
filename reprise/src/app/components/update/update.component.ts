import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

 editEmployee: Employee = new Employee();

 loginID: number;

  constructor(private actRoute: ActivatedRoute, private myEmployeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    // Extracted the ID from the URL
    this.loginID = parseInt(this.actRoute.snapshot.paramMap.get("loginId"));
    console.log(this.loginID);

    // Fetch the contact corresponding to the ID
    this.myEmployeeService.getOneEmployee(this.loginID).subscribe(response =>{
      console.log(response);
      this.editEmployee = response;
    })
  }

  // this calls so that the form will work on the update page
  updateEmployee(){
this.myEmployeeService.updateEmployee(this.loginID, this.editEmployee).subscribe(response =>{
  console.log(response);
this.router.navigate(["profile"]);
})
  }
}

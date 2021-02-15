import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  editEmployee: Employee = new Employee();

  id: string;

  constructor(
    private actRoute: ActivatedRoute,
    private myEmployeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Extracted the ID from the URL
    this.id = this.actRoute.snapshot.paramMap.get('id');
    console.log(this.id);

    // Fetch the contact corresponding to the ID
    this.myEmployeeService.getOneEmployee(this.id).subscribe((response) => {
      console.log(response);
      this.editEmployee = response;
    });
  }

  // this calls so that the form will work on the update page
  updateEmployee() {
    console.log(this.id)
    this.myEmployeeService
      .updateEmployee(this.editEmployee, this.id)
      .subscribe((response) => {
        console.log(response);
        this.router.navigate(['profile']);
      });
  }
}

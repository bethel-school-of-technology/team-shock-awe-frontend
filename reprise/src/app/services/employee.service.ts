import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// imported to get the employee information
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  myEmployeeURL: string = 'http://localhost:3000/employees';

  // add this http client in the brakets and creates an import
  constructor(private http: HttpClient) {}

  // what are the tasks that I need to complete

  //a way to list all employees (READ)
  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.myEmployeeURL);
  }

  //a way to list one employee (READ)
  // component needs to send an ID for the employee
  getOneEmployee(reqID: number): Observable<Employee> {
    return this.http.get<Employee>('${this.myEmployeeURL}/${regID}');
  }

  // a way to edit an employee (UPDATE)
  // component needs to provide the ID as well as the updated employee info
  updateEmployee(editID: number, edittedInfo: Employee): Observable<Employee> {
    return this.http.put<Employee>(
      '${this.myEmployeeURL}/${editID}',
      edittedInfo
    );
  }

  // a way to create a new employee (CREATE)
  // component needs to provide new contact information
  createContact(newEmployee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.myEmployeeURL, newEmployee);
  }

  // a way to delete employees (DELETE)
  // component needs to pull an ID
  deleteEmployee(deleteID: number): Observable<any> {
    return this.http.delete<any>('${this.myEmployeeURL}/${deleteID}');
  }
}

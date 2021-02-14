import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// imported to get the employee information
import { Employee } from '../models/employee';


@Injectable({
  providedIn: 'root',
})

//May change to match the backend
export class EmployeeService {
  myEmployeeURL: string = 'http://localhost:3000/employees';
  backendEmployeeURL: string = 'http://localhost:5000/api/employees';

  // add this http client in the brakets and creates an import
  constructor(private http: HttpClient) {}

  // now I lists all the tasks that I need to complete

  //a way to list all employees (READ)
  getAllEmployees(): Observable<any> {
    return this.http.get<Employee[]>(this.backendEmployeeURL + "/getallemployees");
  }

  //a way to list one employee (READ)
  // component needs to send an ID for the employee
  getOneEmployee(reqID: number): Observable<Employee> {
    return this.http.get<Employee>(this.myEmployeeURL + '/' + reqID);
  }

  // a way to edit an employee (UPDATE)
  // component needs to provide the ID as well as the updated employee info
  updateEmployee(edittedInfo: Employee): Observable<any> {
    // go get this token and save it
    let kbHeaders = {
      authorization: localStorage.getItem("kbtoken")
    }
    console.log(edittedInfo);
    return this.http.put<Employee>(this.backendEmployeeURL + '/' + edittedInfo.id, edittedInfo, {headers: kbHeaders});
  }

  // a way to create a new employee (CREATE)
  // component needs to provide new contact information

  registerEmployee(newEmployee: Employee): Observable<Employee> {
    // go get this token and save it
    let kbHeaders = {
      authorization: localStorage.getItem("kbtoken")
    }
    return this.http.post<Employee>(this.backendEmployeeURL + '/register', newEmployee, {headers: kbHeaders});
  }

  // a way to delete employees (DELETE)
  // component needs to pull an ID
  deleteEmployee(deleteID: number): Observable<any> {
    return this.http.delete<any>(`${this.myEmployeeURL}/${deleteID}`);
  }

  clockIn(loginId: string): Observable<any>{
    return this.http.post<any>(`${this.backendEmployeeURL}/clockin`, {loginId});
  }

  clockOut(loginId: string): Observable<any>{
    return this.http.post<any>(`${this.backendEmployeeURL}/clockout`, {loginId});

      }
}

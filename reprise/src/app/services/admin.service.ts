import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";

// imported to get the admin information
import { Admin } from '../models/admin';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

//May change to match the backend
export class AdminService {
  myAdminURL: string = 'http://localhost:3000/admin';
  backendAdminURL: string = 'http://localhost:5000/api/users';
  helper = new JwtHelperService();

  // add this http client in the brakets and creates an import
  constructor(private http: HttpClient, private myRouter: Router) {}

  // what are the tasks that I need to complete

  //a way to list all admin (READ)
  getAllAdmin(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.myAdminURL);
  }

  //a way to list one admin (READ)
  // component needs to send an ID for the admin
  getOneAdmin(reqID: number): Observable<Admin> {
    return this.http.get<Admin>('${this.myAdminURL}/${regID}');
  }

  // a way to edit an admin (UPDATE)
  // component needs to provide the ID as well as the updated admin info
  updateAdmin(editID: number, edittedInfo: Admin): Observable<Admin> {
    return this.http.put<Admin>('${this.myAdminURL}/${editID}', edittedInfo);
  }

  // a way to create a new Admin (CREATE)
  // component needs to provide new contact information

  registerAdmin(newAdmin: Admin): Observable<Admin> {
    return this.http.post<Admin>(this.backendAdminURL + '/register', newAdmin);
  }

  // a way to delete admin (DELETE)
  // component needs to pull an ID
  deleteAdmin(deleteID: number): Observable<any> {
    return this.http.delete<any>('${this.myAdminURL}/${deleteID}');
  }

  login(userName: string, password: string): Observable<any> {
    const user = { userName: userName, password: password };
    return this.http.post<any>(`${this.backendAdminURL}/login`, {
      userName,
      password,
    });
  }

  getAdminProfile(): Observable<any> {
    let kbHeaders = {
      authorization: localStorage.getItem('kbtoken'),
    };
    return this.http.get<any>(`${this.backendAdminURL}/profile`, {
      headers: kbHeaders,
    });
  }

  checkLogin(): boolean {
    console.log("testing");
    let token = localStorage.getItem('kbtoken');
    console.log(this.helper.getTokenExpirationDate(token));
    console.log(token);
    if (token === null){
      console.log('token is null')
      alert("You don't have access");
        this.myRouter.navigate(['/admin-login']);
      return false;
    }
    if(localStorage.getItem('kbtoken')){
      return this.helper.isTokenExpired(localStorage.getItem('kbtoken'));
    } else {
      return false;
    }
    
  }
}
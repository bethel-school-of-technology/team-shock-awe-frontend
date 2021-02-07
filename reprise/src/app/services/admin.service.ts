import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// imported to get the admin information
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})

//May change to match the backend
export class AdminService {
  myAdminURL: string = 'http://localhost:3000/admin';
  backendAdminURL: string = 'http://localhost:5000/api/users';
  
 // add this http client in the brakets and creates an import
 constructor(private http: HttpClient) {}

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
   return this.http.put<Admin>(
     '${this.myAdminURL}/${editID}',
     edittedInfo
   );
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

 login(userName: string, password: string): Observable<any>{
  const user = {userName: userName, password: password}
  return this.http.post<any>(`${this.myAdminURL}/login`, {userName, password});
    }

}


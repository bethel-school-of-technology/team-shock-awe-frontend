import { Component, OnInit } from '@angular/core';

import { Admin } from 'src/app/models/admin';
import { AdminService } from 'src/app/services/admin.service';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.scss'],
})
export class RegisterAdminComponent implements OnInit {
  newAdmin: Admin = new Admin();

  constructor(private myAdminService: AdminService, private router: Router) {}

  displayAlert: boolean = false;
  alertmessage: string = '';

  ngOnInit(): void {}

  // creating the response to add admin service function
  registerAdmin() {
    console.log('testing');
    console.log(this.newAdmin);

    // created the adminService function and then subscribed to my response
    //   this.myAdminService.registerAdmin(this.newAdmin).subscribe((myResponse) => {
    //   console.log(myResponse);
    //   this.router.navigate(['/profile']);
    // });

    let validated = this.validateForm(this.newAdmin);
    // created the adminservice function and then subscribed to my response
    if (validated) {
      this.myAdminService
        .registerAdmin(this.newAdmin)
        .subscribe((myResponse: any) => {
          console.log(myResponse);
          if (myResponse.status === 200) {
            this.router.navigate(['/profile']);
          } else {
            alert('Unique Username and Email Required');
          }
        });
    }
  }

  // toggleAlert() {
  //   this.displayAlert = !this.displayAlert;
  // }

  // requiring the form to be filled out before submitting
  validateForm(adm: Admin) {
    if (adm.firstName.length === 0 || adm.firstName === null) {
      this.alertmessage = 'First Name Cannot Be Empty';
      this.displayAlert = true;
      return false;
    }
    if (adm.lastName.length === 0 || adm.lastName === null) {
      this.alertmessage = 'Last Name Cannot Be Empty';
      this.displayAlert = true;
      return false;
    }
    if (adm.email.length === 0 || adm.email === null) {
      this.alertmessage = 'Email Cannot Be Empty';
      this.displayAlert = true;
      return false;
    }
    if (adm.userName.length === 0 || adm.userName === null) {
      this.alertmessage = 'Username Cannot Be Empty';
      this.displayAlert = true;
      return false;
    }
    if (adm.password.length === 0 || adm.password === null) {
      this.alertmessage = 'Password Cannot Be Empty';
      this.displayAlert = true;
      return false;
    }
    return true;
  }

  toggleAlert() {
    this.displayAlert = !this.displayAlert;
  }
}

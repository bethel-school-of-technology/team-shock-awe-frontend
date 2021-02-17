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

  constructor(
    private myAdminService: AdminService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  // creating the response to add admin service function
  registerAdmin() {
    console.log('testing');
    console.log(this.newAdmin);


    // created the adminService function and then subscribed to my response
    this.myAdminService.registerAdmin(this.newAdmin).subscribe((myResponse) => {
    console.log(myResponse);
    this.router.navigate(['/profile']);
  });
  }
}

//     let validated = this.validateForm(this.newAdmin);
//     // created the adminservice function and then subscribed to my response
//     if (validated) {
//       this.myAdminService
//         .registerAdmin(this.newAdmin)
//         .subscribe((myResponse: any) => {
//           console.log(myResponse);
//           if (myResponse.status === 200) {
//             this.router.navigate(['/profile']);
//           }
//           else {
//             alert("Unique Username and Email Required");
//           }
//         });
//     }
//   }

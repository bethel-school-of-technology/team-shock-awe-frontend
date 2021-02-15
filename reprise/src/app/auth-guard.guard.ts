import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  CanLoad,
  ActivatedRoute,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from './services/admin.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate {
  constructor(public myAdminService: AdminService, public myRouter: Router) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
      if (this.myAdminService.checkLogin()== true) {
        alert("You don't have access");
        this.myRouter.navigate(['/admin-login']);
        return false;
      }
      return true;
  }
}

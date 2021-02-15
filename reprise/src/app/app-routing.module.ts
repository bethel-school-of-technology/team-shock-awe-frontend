import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProdComponent } from './components/prod/prod.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { ShipComponent } from './components/ship/ship.component';
import { UpdateComponent } from './components/update/update.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { RegisterAdminComponent } from './components/register-admin/register-admin.component';
import { AuthGuardGuard } from './auth-guard.guard';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'prod', component: ProdComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardGuard]},
  { path: 'register', component: RegisterComponent},
  { path: 'ship', component: ShipComponent},
  { path: 'update/:id', component: UpdateComponent},
  { path: 'admin-login', component: AdminLoginComponent},
  { path: 'register-admin', component: RegisterAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// import for the service employee to test routes
import{HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ShipComponent } from './components/ship/ship.component';
import { ProdComponent } from './components/prod/prod.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { UpdateComponent } from './components/update/update.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { RegisterAdminComponent } from './components/register-admin/register-admin.component';
import { AlertComponent } from './components/alert/alert.component';
import { NoAccessComponent } from './components/no-access/no-access.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShipComponent,
    ProdComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    UpdateComponent,
    AdminLoginComponent,
    RegisterAdminComponent,
    AlertComponent,
    NoAccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    // added inport to test routes
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AlertComponent
  ]
})
export class AppModule { }

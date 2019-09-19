import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OperationComponent } from './operation/operation.component';
import { ListingserviceComponent } from './listingservice/listingservice.component';
import { HrComponent } from './hr/hr.component';

import { SignupComponent } from './signup/signup.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AccountComponent } from './account/account.component';
import { NiyuraComponent } from './niyura/niyura.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductdetailComponent,
    TopBarComponent,
    LoginComponent,
    OperationComponent,
    ListingserviceComponent,
    HrComponent,
    
    SignupComponent,
    AttendanceComponent,
    AccountComponent,
    NiyuraComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductdetailComponent },
      { path: 'signup',component:SignupComponent},
      { path :'login',component:LoginComponent},
      {path:'hr',component:HrComponent},
      {path:'account',component:AccountComponent},
      {path:'operation',component:OperationComponent},
      {path:'listingservice',component:ListingserviceComponent},
      {path:'niyura',component:NiyuraComponent},
      {path:'attendance',component:AttendanceComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

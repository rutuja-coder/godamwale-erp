import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RouterModule } from '@angular/router';

import { OperationComponent } from './operation/operation.component';
import { ListingserviceComponent } from './listingservice/listingservice.component';
import { HrComponent } from './hr/hr.component';
import{AuthenticationModule} from './authentication/authentication.module'

import { AttendanceComponent } from './attendance/attendance.component';
import { AccountComponent } from './account/account.component';
import { NiyuraComponent } from './niyura/niyura.component';
import { routing } from './app.routing';




@NgModule({
  declarations: [
    AppComponent,
    ProductdetailComponent,
    TopBarComponent,
    
    OperationComponent,
    ListingserviceComponent,
    HrComponent,
    
    AttendanceComponent,
    AccountComponent,
    NiyuraComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AuthenticationModule,
    routing,
    RouterModule.forRoot([
      { path: '', component: ProductdetailComponent },
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


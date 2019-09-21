import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

import { routing } from './authentication.routing';


@NgModule({
  imports:[CommonModule,routing],
  declarations: [
    
    LoginComponent,
    SignupComponent
  ],
  
 
  
})
export class AuthenticationModule { }

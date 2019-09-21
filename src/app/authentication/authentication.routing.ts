import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { ModuleWithProviders } from '@angular/core';



export const routes:Routes=[
    {path:'login',component:LoginComponent},
    {path:'sigup',component:SignupComponent},
]

export  const routing:ModuleWithProviders=
RouterModule.forChild(routes)
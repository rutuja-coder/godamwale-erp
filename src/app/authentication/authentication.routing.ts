import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { ModuleWithProviders } from '@angular/core';
import { ForgotpasComponent } from '../forgotpas/forgotpas.component';



export const routes:Routes=[
    {path:'login',component:LoginComponent},
    {path:'sigup',component:SignupComponent},
    {path :'forgotpa',component:ForgotpasComponent}
]

export  const routing:ModuleWithProviders=
RouterModule.forChild(routes)
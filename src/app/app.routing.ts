
import { Routes, RouterModule } from '@angular/router'
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
export const routes:Routes=[
    { path: '', pathMatch:'full',redirectTo: 'Productdetail' },
    { path: 'projectdetail', component: ProductdetailComponent },
   { path:'login',
    loadChildren:
    './authentication/authentication.module#AuthenticationModule',
   },
]
export const routing:ModuleWithProviders=
RouterModule.forRoot(routes)
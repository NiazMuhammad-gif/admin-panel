import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from 'src/app/core/guards/admin.guard';
import { AdsFormComponent } from './ads-form/ads-form.component';
import { PremiumPackFormComponent } from './premium-pack-form/premium-pack-form.component';
import { PremiumUserFormComponent } from './premium-user-form/premium-user-form.component';
import { TranstypeFormComponent } from './transtype-form/transtype-form.component';

import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [   
    {
        path:'userForm',
        component:UserFormComponent,
        canActivate:[AdminGuard]
    },
    {
        path:'AdsForm',
        component:AdsFormComponent,
        canActivate:[AdminGuard]
    },
    {
        path:'PremiumPackForm',
        component:PremiumPackFormComponent,
        canActivate:[AdminGuard]
    },
    {
        path:'PremiumUserForm',
        component:PremiumUserFormComponent,
        canActivate:[AdminGuard]
    },
    {
        path:'TransTypeForm',
        component:TranstypeFormComponent,
        canActivate:[AdminGuard]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from 'src/app/core/guards/admin.guard';
import { AdsStatusComponent } from './ads-status/ads-status.component';
import { AdsComponent } from './ads/ads.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { PremiumPackComponent } from './premium-pack/premium-pack.component';
import { PremiumUserComponent } from './premium-user/premium-user.component';
import { TransTypeComponent } from './trans-type/trans-type.component';

import { UserTableComponent } from './user-table/user-table.component';

const routes: Routes = [
    {
        path:'userTable',
        component:UserTableComponent,
        canActivate:[AdminGuard]
    },
    {
        path:'AdsSetup',
        component:AdsComponent,
        canActivate:[AdminGuard]
    },
    {
        path:'AdsStatusSetup',
        component:AdsStatusComponent,
        canActivate:[AdminGuard]
    },
    {
        path:'PremiumPackSetup',
        component:PremiumPackComponent,
        canActivate:[AdminGuard]
    },
    {
        path:'PremiumUserSetup',
        component:PremiumUserComponent,
        canActivate:[AdminGuard]
    },
    {
        path:'TransTypeSetup',
        component:TransTypeComponent,
        canActivate:[AdminGuard]
    }
    ,
    {
        path:'dashboard',
        component:Dashboard1Component,
        canActivate:[AdminGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TablesRoutingModule { }

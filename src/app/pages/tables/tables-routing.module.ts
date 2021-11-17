import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from 'src/app/core/guards/admin.guard';

import { UserTableComponent } from './user-table/user-table.component';

const routes: Routes = [
    {
        path:'userTable',
        component:UserTableComponent,
        canActivate:[AdminGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TablesRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from 'src/app/core/guards/admin.guard';

import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [

  
   
    {
        path:'userForm',
        component:UserFormComponent,
        canActivate:[AdminGuard]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoaderModule} from './../pages/loader/loader.module'
import { AccountRoutingModule } from './account-routing.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccountRoutingModule,
    AuthModule,
    LoaderModule
  ]
})
export class AccountModule { }

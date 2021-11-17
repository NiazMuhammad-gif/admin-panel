import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser'
import {CommonModule} from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '../../shared/ui/ui.module';
import { NgbPaginationModule, NgbTypeaheadModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { TablesRoutingModule } from './tables-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { UserTableComponent } from './user-table/user-table.component';
import { LoaderModule } from '../loader/loader.module';


@NgModule({
  declarations: [UserTableComponent],
  imports: [
    CommonModule,
    // BrowserModule,
    Ng2SearchPipeModule,
    TablesRoutingModule,
    UiModule,
    NgbDropdownModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    FormsModule,
    ReactiveFormsModule,
    LoaderModule
  ],
  exports: [CommonModule]
})
export class TablesModule { }

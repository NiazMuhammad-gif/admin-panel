import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser'
import {CommonModule} from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '../../shared/ui/ui.module';
import { WidgetModule } from '../../shared/widget/widget.module';
import { NgbPaginationModule, NgbTypeaheadModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { TablesRoutingModule } from './tables-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UiSwitchModule } from 'ngx-ui-switch';
import { UserTableComponent } from './user-table/user-table.component';
import { LoaderModule } from '../loader/loader.module';
import { AdsComponent } from './ads/ads.component';
import { PremiumUserComponent } from './premium-user/premium-user.component';
import { AdsStatusComponent } from './ads-status/ads-status.component';
import { PremiumPackComponent } from './premium-pack/premium-pack.component';
import { TransTypeComponent } from './trans-type/trans-type.component';
import { ApiCounterComponent } from './api-counter/api-counter.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DndModule } from 'ngx-drag-drop';
import { NgbNavModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [UserTableComponent, AdsComponent, PremiumUserComponent, AdsStatusComponent, PremiumPackComponent, TransTypeComponent, ApiCounterComponent, Dashboard1Component],
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
    LoaderModule,
    UiSwitchModule,
    NgApexchartsModule,
    DndModule,
    NgbNavModule,
    NgbTooltipModule,
    LeafletModule,
    WidgetModule
  ],
  exports: [CommonModule]
})
export class TablesModule { }

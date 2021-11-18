import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbDatepickerModule, NgbDropdownModule,NgbTypeaheadModule,NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ArchwizardModule } from 'angular-archwizard';
import { NgxMaskModule } from 'ngx-mask';
import { NgSelectModule } from '@ng-select/ng-select';
import { UiSwitchModule } from 'ngx-ui-switch';
import { ColorPickerModule } from 'ngx-color-picker';
import { DropzoneModule } from 'ngx-dropzone-wrapper';

import { UiModule } from '../../shared/ui/ui.module';
import { FormRoutingModule } from './form-routing.module';
// import { ValidationComponent } from './validation/validation.component';
// import { WizardComponent } from './wizard/wizard.component';
// import { AdvancedformComponent } from './advancedform/advancedform.component';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
// import { UploadsComponent } from './uploads/uploads.component';
import { UserFormComponent } from './user-form/user-form.component';

import { LoaderModule } from '../loader/loader.module';
import { AdsFormComponent } from './ads-form/ads-form.component';
import { PremiumUserFormComponent } from './premium-user-form/premium-user-form.component';
import { PremiumPackFormComponent } from './premium-pack-form/premium-pack-form.component';
import { TranstypeFormComponent } from './transtype-form/transtype-form.component';
import { ApiCounterFormComponent } from './api-counter-form/api-counter-form.component';
const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  maxFilesize: 50
};
@NgModule({
  // tslint:disable-next-line: max-line-length
  // declarations: [ ValidationComponent,  UploadsComponent, WizardComponent,  AdvancedformComponent,  UserFormComponent],
  declarations: [ UserFormComponent, AdsFormComponent, PremiumUserFormComponent, PremiumPackFormComponent, TranstypeFormComponent, ApiCounterFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormRoutingModule,
    UiModule,
    CKEditorModule,
    ArchwizardModule,
    NgxMaskModule.forRoot(),
    NgSelectModule,
    UiSwitchModule,
    ColorPickerModule,
    NgbDatepickerModule,
    DropzoneModule,
    NgbDropdownModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    LoaderModule
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }
  ]
})
export class FormModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationPageRouteModule } from './registration-page.router.module';
import { RegistrationPageComponent } from './registration-page.component';

@NgModule({
  declarations: [RegistrationPageComponent],
  imports: [
    CommonModule,
    RegistrationPageRouteModule
  ]
})
export class RegistrationPageModule { }

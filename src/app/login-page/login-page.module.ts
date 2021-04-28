import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageRouteModule } from './login-page.router.module';
import { LoginPageComponent } from './login-page.component';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    LoginPageRouteModule
  ]
})
export class LoginPageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { RegistrationPageRouteModule } from './registration-page.router.module';
import { RegistrationPageComponent } from './registration-page.component';

@NgModule({
  declarations: [RegistrationPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    RegistrationPageRouteModule
  ]
})
export class RegistrationPageModule { }

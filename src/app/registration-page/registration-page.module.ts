import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { RegistrationPageRouteModule } from './registration-page.router.module';
import { RegistrationPageComponent } from './registration-page.component';
import { HttpService } from '../services/http.service';
import { LoadingCirleRegisterComponent } from './loading-cirle-register/loading-cirle.component';

@NgModule({
  declarations: [RegistrationPageComponent, LoadingCirleRegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    RegistrationPageRouteModule
  ],
  providers:[HttpService]
})
export class RegistrationPageModule { }

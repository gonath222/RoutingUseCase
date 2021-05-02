import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { LoginPageRouteModule } from './login-page.router.module';
import { LoginPageComponent } from './login-page.component';
import { LoadingCirleLoginComponent } from './loading-cirle-login/loading-cirle.component';



@NgModule({
  declarations: [LoginPageComponent,LoadingCirleLoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    LoginPageRouteModule    
  ],
  providers: [],
})
export class LoginPageModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomePageComponent } from './home-page/home-page.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { DashboardEditComponent } from './dashboard-edit/dashboard-edit.component';
import { ErrorPageComponent } from './error-page/error-page.component';

import { RegistrationPageRouteModule } from './registration-page/registration-page.router.module'
import { LoginPageRouteModule } from './login-page/login-page.router.module';
import { LoginService } from './services/login.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HTTPInterceptorService } from './services/http.interceptor.service';
import { ConfirmDialogModule } from './confirm-pop/confirm-pop.module';
import { LoadingCirleComponent } from './loading-cirle/loading-cirle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderPageComponent,
    FooterPageComponent,
    DashboardPageComponent,
    DashboardEditComponent,
    ErrorPageComponent,
    LoadingCirleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RegistrationPageRouteModule,
    LoginPageRouteModule,
    HttpClientModule,
    ConfirmDialogModule
  ],
  providers: [LoginService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: HTTPInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

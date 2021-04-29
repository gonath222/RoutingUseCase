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

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderPageComponent,
    FooterPageComponent,
    DashboardPageComponent,
    DashboardEditComponent,
    ErrorPageComponent   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RegistrationPageRouteModule,
    LoginPageRouteModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

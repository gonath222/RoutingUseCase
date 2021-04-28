import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardEditComponent } from './dashboard-edit/dashboard-edit.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomePageModule } from './home-page/home-page.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { RouterAuthService } from './services/router_auth.service';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'home', component:HomePageComponent},
  {path: 'login', loadChildren: () => import('./login-page/login-page.module').then(m => m.LoginPageModule)},
  {path: 'register', loadChildren: () => import('./registration-page/registration-page.module').then(m => m.RegistrationPageModule)},
  {path: 'dashboard', component:DashboardPageComponent, canActivate : [RouterAuthService],
      children: [
      {  path: 'edit/:id', component: DashboardEditComponent, canActivate : [RouterAuthService]  }
      ] 
  },
  {path: '**', component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//export const routingcomponents = [HomePageComponent, LoginPageComponent, RegistrationPageComponent, DashboardPageComponent, DashboardEditComponent];

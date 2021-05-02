import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardEditComponent } from './dashboard-edit/dashboard-edit.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterAuthService } from './services/router_auth.service';

const routes: Routes = [
  {path: '', component: HomePageComponent, pathMatch: 'full'},
  {path: 'home', component:HomePageComponent},
  {path: 'login', loadChildren: () => import('./login-page/login-page.module').then(m => m.LoginPageModule)},
  {path: 'register', loadChildren: () => import('./registration-page/registration-page.module').then(m => m.RegistrationPageModule)},
  { path: 'dashboard', component: DashboardPageComponent, canActivate : [RouterAuthService] , canActivateChild : [RouterAuthService],
      children: [
        {  path: 'view', component: DashboardEditComponent  },
        {  path: 'delete', component: DashboardEditComponent  }
      ]  
  },
  {path: '**', component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[RouterAuthService]
})
export class AppRoutingModule { }

export const routingcomponents = [HomePageComponent, DashboardPageComponent, DashboardEditComponent];

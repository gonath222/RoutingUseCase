import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {  LoginPageComponent} from './login-page.component'


const routes: Routes = [
    { path: "", component: LoginPageComponent},

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class LoginPageRouteModule { }
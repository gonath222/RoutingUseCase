import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {  RegistrationPageComponent} from './registration-page.component'


const routes: Routes = [
    { path: "", component: RegistrationPageComponent},

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class RegistrationPageRouteModule { }
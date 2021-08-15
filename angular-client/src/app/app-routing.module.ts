import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LOGIN_PATH} from "./_helpers/paths";
import {LoginComponent} from "./components/login/login.component";



const routes: Routes = [
  {path: LOGIN_PATH.substr(1), component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

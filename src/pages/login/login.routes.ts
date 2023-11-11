import { Route, RouterModule } from '@angular/router';
import {LoginComponent} from "./login.component";
import {NgModule} from "@angular/core";


const loginRoutes: Route[] = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'password-reset', loadComponent:() => import('./password-reset/password-reset.component').then(value => value.PasswordResetComponent)
  },
  {
    path: 'register', loadComponent:() => import('./register/register.component').then(value => value.RegisterComponent)
  },
];

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule],
})
export class LoginRoutes {}

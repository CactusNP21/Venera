import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', pathMatch: "full", redirectTo: "/login"
  },
  {
    path: 'login', loadChildren: () => import('../pages/login/login.routes').then(m => m.LoginRoutes)
  }
];

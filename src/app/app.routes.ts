import { Routes } from '@angular/router';
import {homeResolver} from "../pages/home/resolvers/home.resolver";

export const routes: Routes = [
  {
    path: '', pathMatch: "full", redirectTo: "/home"
  },
  {
    path: 'login', loadChildren: () => import('../pages/login/login.routes').then(m => m.LoginRoutes)
  },
  {
    path: 'home', loadComponent: () => import('../pages/home/home.component').then(m => m.HomeComponent), resolve: {restaurants: homeResolver}
  }
];

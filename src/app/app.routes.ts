import {Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {authGuard} from "../libs/guards/auth-guard/auth.guard";
import {LoginComponent} from "./login/login.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {idLoadedResolver} from "../libs/resolvers/id-loaded/id-loaded.resolver";
import {loggedInGuard} from "../libs/guards/logged-in-guard/logged-in.guard";

export const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent, canActivate: [authGuard]},
  {path: 'dashboard/:id', component: DashboardComponent, canActivate: [authGuard], resolve: [idLoadedResolver]},
  {path: 'login', component: LoginComponent, canActivate: [loggedInGuard]},
  {path: '', component: LoginComponent, canActivate: [loggedInGuard]},
  {path: '**', component: PageNotFoundComponent}
];

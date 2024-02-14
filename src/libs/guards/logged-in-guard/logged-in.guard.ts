import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../../services/auth-service/auth.service";
import {take} from "rxjs";

export const loggedInGuard: CanActivateFn = (route, state) => {
  let loggedIn: boolean = false;

  inject(AuthService).authenticationStatus$.pipe(take(1))
    .subscribe(value => loggedIn = value);
  if (loggedIn) {
    inject(Router).navigateByUrl('/dashboard');
  }
  return true;
};

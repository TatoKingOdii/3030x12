import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {User} from "../../model/user";
import {Endpoint, ENDPOINT_BASE, EndpointPaths} from "../../model/endpoints";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticationStatus$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private router: Router, private http: HttpClient) {
    this.authenticationStatus$.next(sessionStorage.getItem('currentUser') != null);
  }

  authenticate(user: User, path: string, errHandler: (msg: string) => void) {
    // Validate user
    this.http.get<User[]>(ENDPOINT_BASE + EndpointPaths.get(Endpoint.USERS))
      .subscribe(resp => {
        // Eventually come up with a nicer looking auth solution
        let idx = resp.findIndex(rsp => user.user === rsp.user && user.pass === rsp.pass);
        if (idx !== -1) {
          sessionStorage.setItem('currentUser', JSON.stringify(user));
          this.authenticationStatus$.next(true);
          this.router.navigate([path]);
        } else {
          errHandler('Username / Password does not exist!');
        }
      });
  }

  deauthenticate() {
    sessionStorage.removeItem('currentUser');
    this.authenticationStatus$.next(false);
  }
}

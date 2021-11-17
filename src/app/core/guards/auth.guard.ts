import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

import { AuthenticationService } from '../services/auth.service';
import { AuthfakeauthenticationService } from '../services/authfake.service';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthenticationService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      const isAuth = this.authService.getIsAuth();
      console.log(isAuth);
      if (!isAuth) {
        this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url } });
      }
      return isAuth;
    }


    // constructor(
    //     private router: Router,
    //     private authenticationService: AuthenticationService,
    //     private authFackservice: AuthfakeauthenticationService
    // ) { }

    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //     if (environment.defaultauth === 'firebase') {
    //         const currentUser = this.authenticationService.currentUser();
    //         if (currentUser) {
    //             // logged in so return true
    //             return true;
    //         }
    //     } else {
    //         const currentUser = this.authFackservice.currentUserValue;
    //         if (currentUser) {
    //             // logged in so return true
    //             return true;
    //         }
    //     }
    //     // not logged in so redirect to login page with the return url
    //     this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url } });
    //     return false;
    // }
}

import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

import { AuthenticationService } from '../services/auth.service';
import { AuthfakeauthenticationService } from '../services/authfake.service';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {

    constructor(private authService: AuthenticationService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    //   const isAuth = this.authService.getIsAuth();
    const role = this.authService.getRole(); 
      const isAdmin =true;

      if (role === 'User' || role ==='user') {
        this.router.navigate([], { queryParams: { returnUrl: state.url } });
        // this.router.navigate(['/account/login']);
      }
      return isAdmin;
    }
}
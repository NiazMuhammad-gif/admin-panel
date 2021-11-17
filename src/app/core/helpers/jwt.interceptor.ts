
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

import { AuthenticationService } from '../services/auth.service';

import { environment } from '../../../environments/environment';
import { finalize } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
//copied code

constructor(private authService: AuthenticationService){}

  intercept(req: HttpRequest<any>, next: HttpHandler){
    const authToken = this.authService.getToken();
    const authRequest = req.clone({
      headers: req.headers.set("Authorization", "Bearer " + authToken)
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE,HEAD,OPTIONS')
    })
    return next.handle(authRequest)
  }




    // constructor(private authenticationService: AuthenticationService, private authfackservice: AuthfakeauthenticationService) { }

    // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //     if (environment.defaultauth === 'firebase') {
    //         const currentUser = this.authenticationService.currentUser();
    //         if (currentUser && currentUser.token) {
    //             request = request.clone({
    //                 setHeaders: {
    //                     Authorization: `Bearer ${currentUser.token}`
    //                 }
    //             });
    //         }
    //     } else {
    //         // add authorization header with jwt token if available
    //         const currentUser = this.authfackservice.currentUserValue;
    //         if (currentUser && currentUser.token) {
    //             request = request.clone({
    //                 setHeaders: {
    //                     Authorization: `Bearer ${currentUser.token}`
    //                 }
    //             });
    //         }
    //     }
    //     return next.handle(request);
    // }
}

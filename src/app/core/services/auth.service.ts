import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { getFirebaseBackend } from '../../authUtils';

import { AuthData } from '../models/auth.models';

@Injectable({ providedIn: 'root' })

export class AuthenticationService {
  private isAuthenticated = false;
  private token: string;
  private tokenTimer: any;
  private userId: string;
  private role: string;
  private authStatusListener = new Subject<boolean>();
    // user: User;




    constructor(private http: HttpClient, private router: Router) {}

  getToken() {
    if(localStorage.getItem('token')){
      return localStorage.getItem('token');
    }
    console.log(localStorage.getItem('token'));
    return "jkadfhjkdhfkhah";
  }

  getRole(){
    return this.role
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getUserId() {
    return this.userId;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  createUser(username:string,email: string, password: string) {
    const authData: AuthData = { username:username,email: email, password: password };

    this.http
      .post("https://voiashb.8mindsolutions.com/api/Authenticate/register", authData)
      .subscribe((response) => {
        console.log(response);
        this.router.navigate(["/"]);
      }, error => {

        this.authStatusListener.next(false);
      });
  }

  login(username: string, password: string) {
    const authData: AuthData = { username: username, password: password };
    this.http
      .post<{ token: string; expiration: number; id: string;role:string }>(
        "https://voiashb.8mindsolutions.com/api/Authenticate/login",
        authData
      )
      .subscribe(response => {
        const token = response.token;
        this.token = token;
        console.log(response);
        if (token) {
          this.role = response.role;
          if(this.role ==="Admin"){
            const expiresInDuration = response.expiration;
            const now = new Date();
            const fetchedDate = new Date(expiresInDuration);
            const expiresIn = fetchedDate.getTime() - now.getTime();
            this.setAuthTimer(expiresIn/1000);
            this.userId = response.id;
            this.isAuthenticated = true;
            this.authStatusListener.next(true);
            const expirationDate = new Date(now.getTime()+ fetchedDate.getTime());
            console.log(expirationDate);
            this.saveAuthData(token, expirationDate, this.userId);
            this.router.navigate(["/"]);
          }
          
        }
      }, error => {
        this.authStatusListener.next(false);
      });
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.userId = authInformation.userId;
      console.log(expiresIn);
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.userId = null;
    clearTimeout(this.tokenTimer);
 
    this.clearAuthData();
    this.router.navigate(["/"]);
  }

  private setAuthTimer(duration: number) {
    console.log("Setting timer: " + duration);
    this.tokenTimer = setTimeout(() => {
      console.log('check setAuthTimer function')
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(token: string, expirationDate: Date, userId: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
    localStorage.setItem('userId', userId);
  }

  private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("userId");
    localStorage.removeItem('companyId')
    localStorage.removeItem('branchId')
    console.log('check that this function is working or not')
  }

  private getAuthData() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    const userId = localStorage.getItem("userId");
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
      userId: userId
    };
  }
    // constructor() {
    // }

    // /**
    //  * Returns the current user
    //  */
    // public currentUser(): User {
    //     return getFirebaseBackend().getAuthenticatedUser();
    // }

    // /**
    //  * Performs the auth
    //  * @param email email of user
    //  * @param password password of user
    //  */
    // login(email: string, password: string) {
    //     return getFirebaseBackend().loginUser(email, password).then((response: any) => {
    //         const user = response;
    //         return user;
    //     });
    // }

    // /**
    //  * Performs the register
    //  * @param email email
    //  * @param password password
    //  */
    // register(email: string, password: string) {
    //     return getFirebaseBackend().registerUser(email, password).then((response: any) => {
    //         const user = response;
    //         return user;
    //     });
    // }

    // /**
    //  * Reset password
    //  * @param email email
    //  */
    // resetPassword(email: string) {
    //     return getFirebaseBackend().forgetPassword(email).then((response: any) => {
    //         const message = response.data;
    //         return message;
    //     });
    // }

    // /**
    //  * Logout the user
    //  */
    // logout() {
    //     // logout the user
    //     getFirebaseBackend().logout();
    // }
}


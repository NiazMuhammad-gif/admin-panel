import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { AuthenticationService } from '../../../core/services/auth.service';
import { AuthfakeauthenticationService } from '../../../core/services/authfake.service';

import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  error = '';
  returnUrl: string;

  // set the currenr year
  year: number = new Date().getFullYear();

  // tslint:disable-next-line: max-line-length
  
  
  
  
  // Copied Code 
  
  isLoading = false;
  private authStatusSub: Subscription;

  constructor(private formBuilder: FormBuilder, public authService: AuthenticationService, private route: ActivatedRoute, ) { }
  @ViewChild("ff",{static:false}) form:NgForm ;
  onLogin(){
    if (this.f.invalid){
      return;
    }
    this.isLoading = true;
    this.authService.login(this.f.username.value, this.f.password.value);
  }

  ngOnInit(): void {
    document.body.removeAttribute('data-layout');
      document.body.classList.add('auth-body-bg');
  
      this.loginForm = this.formBuilder.group({
        username: ['ali310', [Validators.required]],
        password: ['admin123123!@!', [Validators.required]],
      });
  
      // reset login status
      // this.authenticationService.logout();
      // get return url from route parameters or default to '/'
      // tslint:disable-next-line: no-string-literal
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatus =>{
        this.isLoading = false;
      }
    );
   
}
get f() { return this.loginForm.controls; }

   ngOnDestroy() {
     this.authStatusSub.unsubscribe();
   }
  


}

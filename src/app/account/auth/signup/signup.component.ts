import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../../core/services/auth.service';
import { environment } from '../../../../environments/environment';
import { first } from 'rxjs/operators';
import { UserProfileService } from '../../../core/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
@ViewChild('ff',{static:false}) form: NgForm;
  signupForm: FormGroup;
  submitted = false;
  error = '';
  successmsg = false;

  // set the currenr year
  year: number = new Date().getFullYear();



  isLoading = false;
  private authStatusSub: Subscription;
  constructor( private formBuilder: FormBuilder,private authService: AuthenticationService) { }
  onSignup(){
    if (this.f.invalid){
      return;
    }
    this.isLoading = true;
    this.authService.createUser(this.f.username.value, this.f.email.value, this.f.password.value);
  }
  ngOnInit(): void {
    document.body.removeAttribute('data-layout');
    document.body.classList.add('auth-body-bg');

    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
   this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
     authStatus =>{
       this.isLoading = false;
     }
   );
  }
  get f() { return this.signupForm.controls; }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }




  // tslint:disable-next-line: max-line-length
  // constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService,
  //             private userService: UserProfileService) { }

  // ngOnInit() {
  //   document.body.removeAttribute('data-layout');
  //   document.body.classList.add('auth-body-bg');

  //   this.signupForm = this.formBuilder.group({
  //     username: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', Validators.required],
  //   });
  // }

  // ngAfterViewInit() {
  // }

  // // convenience getter for easy access to form fields
  // get f() { return this.signupForm.controls; }

  // /**
  //  * On submit form
  //  */
  // onSubmit() {
  //   // this.submitted = true;

  //   // // stop here if form is invalid
  //   // if (this.signupForm.invalid) {
  //   //   return;
  //   // } else {
  //   //   if (environment.defaultauth === 'firebase') {
  //   //     this.authenticationService.register(this.f.email.value, this.f.password.value).then((res: any) => {
  //   //       this.successmsg = true;
  //   //       if (this.successmsg) {
  //   //         this.router.navigate(['/']);
  //   //       }
  //   //     })
  //   //       .catch(error => {
  //   //         this.error = error ? error : '';
  //   //       });
  //   //   } else {
  //   //     this.userService.register(this.signupForm.value)
  //   //       .pipe(first())
  //   //       .subscribe(
  //   //         data => {
  //   //           this.successmsg = true;
  //   //           if (this.successmsg) {
  //   //             this.router.navigate(['/account/login']);
  //   //           }
  //   //         },
  //   //         error => {
  //   //           this.error = error ? error : '';
  //   //         });
  //   //   }
  //   // }
  // }
}

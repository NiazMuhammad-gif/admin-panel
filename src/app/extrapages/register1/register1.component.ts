import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register1',
  templateUrl: './register1.component.html',
  styleUrls: ['./register1.component.scss']
})

/**
 * Register-1 component
 */
export class Register1Component implements OnInit {

  // set the currenr year
  year: number = new Date().getFullYear();

  @ViewChild('f',{static:false}) form: NgForm;
  signupForm: FormGroup;
  submitted = false;
  error = '';
  successmsg = false;


role= 'user';
  isLoading = false;
  private authStatusSub: Subscription;

  constructor(private formBuilder: FormBuilder,public authService: AuthenticationService,private http: HttpClient) {}

  ngOnInit() {
      document.body.removeAttribute('data-layout');
    document.body.classList.add('auth-body-bg');
    this.role = this.authService.getRole();
    this.signupForm = this.formBuilder.group({
      username: ['ahmed', Validators.required],
      email: ['ahmed@gmail.com', [Validators.required, Validators.email]],
      password: ['12345', Validators.required],
    });
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatus => {
        this.isLoading = false;
      }
    );
  }
  onSignup() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.createUser(this.form.value.username,this.form.value.email, this.form.value.password);
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }

}

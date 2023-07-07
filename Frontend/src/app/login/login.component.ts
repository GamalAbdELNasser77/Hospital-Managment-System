import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route } from '@angular/router';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(12),
    ]),
  });

  errors: any = '';

  constructor(public _AuthService: AuthService, private Router: Router) {}
  ngOnInit(): void {}

  get email(): any {
    return this.loginForm.get('email');
  }
  get password(): any {
    return this.loginForm.get('password');
  }
  submit(loginForm: FormGroup) {
    this.loginForm.markAllAsTouched();
    console.log(loginForm.value);
    if (loginForm.valid) {
      this._AuthService.register(loginForm.value).subscribe((Response) => {
        if (Response.message == 'success') {
          localStorage.setItem('usertoken', Response.token);
          this._AuthService.saveuserdata();
          this.Router.navigate(['home']);
        } else {
          this.errors = Response.email.error.message;
        }
      });
    }
  }
}

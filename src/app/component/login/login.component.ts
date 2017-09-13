import { Component, OnInit } from '@angular/core';
import { AuthService, ValidatorService } from '../../services/master';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  error = '';
  loginForm: FormGroup;
  constructor( private router: Router, private authService: AuthService, private fb: FormBuilder) {
    this.loginForm = fb.group({
      'email' : ['', [Validators.required,  ValidatorService.emailValidator]],
      'password' : ['', Validators.required],
    });
  }

  ngOnInit() {
    this.authService.logout();
  }

  login() {
    this.error = null;
    if (this.loginForm.dirty && this.loginForm.valid) {
      this.loading = true;
      this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
        .subscribe(result => {
          if (result === true) {
            this.router.navigate(['/']);
          } else {
            this.error = 'Username or password is incorrect';
            this.loading = false;
          }
        });
    } else {
        this.error = 'Invalid entry';
    }
  }
}

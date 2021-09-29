import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit(loginForm: NgForm) {
    console.log('UserLogin = ', loginForm.value.email);
    this.authService.login({
      email: loginForm.value.email,
      password: loginForm.value.password,
    });
  }
}

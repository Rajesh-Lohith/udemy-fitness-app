import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmitForm(signupForm: NgForm) {
    console.log('Registering User', signupForm.value);
    this.authService.registerUser({
      email: signupForm.value.email,
      password: signupForm.value.password,
    });
  }
}

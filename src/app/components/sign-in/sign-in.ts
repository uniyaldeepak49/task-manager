import { Component } from '@angular/core';
import {
  AbstractControl,
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'code-for-beginners-sign-in',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignIn {
  loginForm: UntypedFormGroup = new UntypedFormGroup({
    email: new UntypedFormControl('', [Validators.required, Validators.email]),
    password: new UntypedFormControl('', [Validators.required]),
  });

  get lForm() {
    return this.loginForm.controls;
  }
}

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignInForm } from '../models';

@Component({
  selector: 'mm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export class LoginComponent implements OnInit {
  form: FormGroup<SignInForm> = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    console.log(
      '🚀 ~ file: login.component.ts:14 ~ LoginComponent ~ ngOnInit ~ ngOnInit:'
    );
  }

  onSubmit() {
    console.log(this.form.value);
  }
}

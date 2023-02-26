import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegistrationForm } from '../models';

@Component({
  selector: 'mm-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  form: FormGroup<RegistrationForm> = this.fb.group({
    username: '',
    email: '',
    password: '',
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log(this.form.value);
  }
}

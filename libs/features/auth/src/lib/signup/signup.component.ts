import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { register } from '../+state/action';
import { CreateUserPayload, RegistrationForm } from '../models';

@Component({
  selector: 'mm-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  httpClient = inject(HttpClient);
  fb = inject(FormBuilder);
  store = inject(Store);

  form!: FormGroup<RegistrationForm>;

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      username: '',
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.store.dispatch(
        register({
          user: this.form.value as CreateUserPayload,
        })
      );
    }
    // this.httpClient
    //   .post('http://localhost:3000/api/users', {
    //     user: this.form.value,
    //   })
    //   .subscribe({
    //     next: (res) => {
    //       console.log(res);
    //     },
    //   });
  }
}

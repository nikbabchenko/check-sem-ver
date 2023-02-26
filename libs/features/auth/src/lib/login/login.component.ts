import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
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
  fb = inject(FormBuilder);

  form!: FormGroup<SignInForm>;

  ngOnInit() {
    console.log(
      '🚀 ~ file: login.component.ts:14 ~ LoginComponent ~ ngOnInit ~ ngOnInit:'
    );
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}

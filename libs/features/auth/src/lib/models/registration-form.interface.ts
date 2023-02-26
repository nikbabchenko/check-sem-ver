import { FormControl } from '@angular/forms';

export interface RegistrationForm {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  username: FormControl<string | null>;
}

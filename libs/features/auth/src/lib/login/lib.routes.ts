import { Route } from '@angular/router';
import { LoginComponent } from './login.component';

export const featuresLoginContainerRoutes: Route[] = [
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
  },
];

import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadChildren: () =>
      import('@medium-features/auth').then((m) => m.FeaturesAuthModule),
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

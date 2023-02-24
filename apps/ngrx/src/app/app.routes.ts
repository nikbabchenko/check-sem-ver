import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'login',
        loadChildren: () => import('@medium-features/login-container').then(m => m.FeaturesLoginContainerModule),
    },
    {
        path: '**',
        redirectTo: 'login',
    }
];

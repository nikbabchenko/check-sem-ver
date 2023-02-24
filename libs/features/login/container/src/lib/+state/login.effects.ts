import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as LoginActions from './login.actions';
import * as LoginFeature from './login.reducer';

import { switchMap, catchError, of } from 'rxjs';

@Injectable()
export class LoginEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.initLogin),
      switchMap(() => of(LoginActions.loadLoginSuccess({ login: [] }))),
      catchError((error) => {
        console.error('Error', error);
        return of(LoginActions.loadLoginFailure({ error }));
      })
    )
  );
}

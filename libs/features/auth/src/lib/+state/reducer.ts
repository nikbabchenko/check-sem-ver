import { Action, createReducer, on } from '@ngrx/store';
import { registerAction } from './action';
import { AuthState } from './auth-state.interface';

const initialState: AuthState = {
  isSubmitted: false,
};

const reducer = createReducer(
  initialState,
  on(
    registerAction,
    (state: AuthState): AuthState => ({
      ...state,
      isSubmitted: true,
    })
  )
);

export function authReducer(state: AuthState, action: Action) {
  return reducer(state, action);
}

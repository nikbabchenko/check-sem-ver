import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth-state.interface';
import { STATE_KEY } from './state-key.constant';

export const authFeatureSelector = createFeatureSelector<AuthState>(STATE_KEY);

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (state: AuthState) => state.isSubmitted
);

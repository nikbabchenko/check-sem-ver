import { createAction, props } from '@ngrx/store';
import { RegisteRequest } from './register-request.interface';
import { ActionTypes } from './action-types.enum';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<RegisteRequest>()
);

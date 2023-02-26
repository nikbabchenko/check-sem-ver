import { createAction, props } from '@ngrx/store';
import { RegisteRequest } from '../models/register-request.interface';
import { ActionTypes } from './action-types.enum';

export const register = createAction(
  ActionTypes.REGISTER,
  props<RegisteRequest>()
);

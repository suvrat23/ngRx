import { createAction, props } from '@ngrx/store';
import {Parts} from '../../components/lazy-page/lazy-page';

export const updatePart = createAction(
  '[Parts] Update Part',
  props<{ part: Parts }>()
);

export const updatePartSuccess = createAction(
  '[Parts] Update Part Success',
  props<{ response: Parts }>()
);

export const updatePartFailure = createAction(
  '[Parts] Update Part Failure',
  props<{ error: string }>()
);

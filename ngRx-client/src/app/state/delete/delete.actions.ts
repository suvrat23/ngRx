import { createAction, props } from '@ngrx/store';

export const deletePart = createAction('[Part] Delete Part', props<{ id: number }>());

export const deletePartSuccess = createAction('[Part] Delete Part Success');

export const deletePartFailure = createAction('[Part] Delete Part Failure', props<{ error: any }>());

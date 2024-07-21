import { createAction, props } from '@ngrx/store';
import {Parts} from '../../components/lazy-page/lazy-page';

export const addPart = createAction('[addPart] Add Part', props<{parts: Parts}>());
export const addPartSuccess = createAction('[addPart] Add Part Success');
export const addPartFailure = createAction('[addPart] Add Part Failure', props<{ error: string }>());
export const isButton = createAction('[addPart] Add Part On', props<{isComponent: boolean}>());

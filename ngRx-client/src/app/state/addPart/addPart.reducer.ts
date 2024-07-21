import { createReducer, on } from '@ngrx/store';
import {Parts} from '../../components/lazy-page/lazy-page';
import * as addPartActions from '../addPart/addPart.actions';
export interface AddState {
  isComponent: boolean;
  error: string | null;
  parts: Parts[];
}

export const initialState: AddState = {
  isComponent: false,
  error: null,
  parts: []
};

export const addPartReducer = createReducer(
  initialState,
  on(addPartActions.addPart, (state, { parts }) => ({
    ...state,
    parts: [...state.parts, parts],
    error: null,
  })),
  on(addPartActions.addPartSuccess, (state) => ({
    ...state,
    error: null,
  })),
  on(addPartActions.addPartFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(addPartActions.isButton, (state, { isComponent }) => ({
    ...state,
    isComponent
  }))
);

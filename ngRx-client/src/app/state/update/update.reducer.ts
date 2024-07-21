import { createReducer, on } from '@ngrx/store';
import { updatePart, updatePartSuccess, updatePartFailure } from './update.actions';

export interface PartsState {
  loading: boolean;
  error: string | null;
}

export const initialState: PartsState = {
  loading: false,
  error: null
};

export const partsReducer = createReducer(
  initialState,
  on(updatePart, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(updatePartSuccess, (state) => ({
    ...state,
    loading: false,
    error: null
  })),
  on(updatePartFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);

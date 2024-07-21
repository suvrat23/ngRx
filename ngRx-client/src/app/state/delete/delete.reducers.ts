import { createReducer, on } from '@ngrx/store';
import { deletePart, deletePartSuccess, deletePartFailure } from './delete.actions';

export interface DeleteState {
  deleting: boolean; // Indicates if a part is currently being deleted
  error: any; // Holds the error object if there is an error during deletion
}

export const initialState: DeleteState = {
  deleting: false,
  error: null
};

export const deleteReducer = createReducer(
  initialState,
  on(deletePart, (state) => ({ ...state, deleting: true, error: null })),
  on(deletePartSuccess, (state) => ({ ...state, deleting: true })),
  on(deletePartFailure, (state, { error }) => ({ ...state, deleting: false, error }))
);

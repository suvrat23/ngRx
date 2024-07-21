import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AddState } from './addPart.reducer';

export const selectPartState = createFeatureSelector<AddState>('parts');
export const selectParts = createSelector(selectPartState, (state: AddState) => state.parts);
export const selectIsComponent = createSelector(selectPartState, (state: AddState) => state.isComponent);
export const selectError = createSelector(selectPartState, (state: AddState) => state.error);

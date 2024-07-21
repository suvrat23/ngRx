import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PartsState } from './update.reducer';

// Select the parts feature state
export const selectPartsState = createFeatureSelector<PartsState>('parts');

// Select the loading state
export const selectPartsLoading = createSelector(
  selectPartsState,
  (state: PartsState) => state.loading
);

// Select the error state
export const selectPartsError = createSelector(
  selectPartsState,
  (state: PartsState) => state.error
);

import { createSelector, createFeatureSelector } from '@ngrx/store';
import {authReducer, AuthState} from './login.reducer';
import {Injectable} from '@angular/core';

// Get the feature state (AuthState)
const selectAuthState = createFeatureSelector<AuthState>('auth');

// Select the loggedIn state
export const selectLoggedIn = createSelector(
  selectAuthState,
  (state: AuthState) => state.loggedIn
);

export const selectError = createSelector(
  selectAuthState,
  (state: AuthState) => state.error
);

import { createReducer, on } from '@ngrx/store';
import { login, loginSuccess, loginFailure } from '../login/login.actions';
import {Injectable} from '@angular/core';
export interface AuthState {
  loggedIn: boolean;
  error: string | null;
}

export const initialState: AuthState = {
  loggedIn: false,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(login, (state) => ({ ...state, error: null })),
  on(loginSuccess, (state) => ({ ...state, loggedIn: true })),
  on(loginFailure, (state, { error }) => ({ ...state, loggedIn: false, error })),
);

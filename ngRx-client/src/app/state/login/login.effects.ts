import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {UserService} from '../../components/home/home.service';
import * as LoginActions from '../login/login.actions';

import { Action } from '@ngrx/store';
@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.login),
      mergeMap(({ username, password }): Observable<Action> =>
        this.userService.getLogin(username, password).pipe(
          map(() => LoginActions.loginSuccess() as Action),
          catchError((error) => of(LoginActions.loginFailure({ error: error.message }) as Action))
        )
      )
    )
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}

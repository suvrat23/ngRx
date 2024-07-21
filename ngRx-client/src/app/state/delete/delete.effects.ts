import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { PartService } from '../../components/lazy-page/lazy-page.service';
import { deletePart, deletePartFailure, deletePartSuccess } from './delete.actions';
import {Action} from '@ngrx/store';

@Injectable()
export class DeleteEffects {
  deletePart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deletePart),
      mergeMap(({ id }): Observable<Action> =>
        this.partService.deleteParts(id).pipe(
          map(() => deletePartSuccess()),
          catchError((error) => of(deletePartFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private partService: PartService
  ) {}
}

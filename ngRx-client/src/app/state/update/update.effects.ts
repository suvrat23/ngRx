import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import { PartService } from '../../components/lazy-page/lazy-page.service';
import { updatePart, updatePartFailure, updatePartSuccess } from './update.actions';
import {Action} from '@ngrx/store';

@Injectable()
export class UpdateEffects {
  updatePart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updatePart),
      switchMap(({ part }): Observable<Action> =>
        this.partService.updateParts(part.id, part).pipe(
          map((response) => updatePartSuccess({ response })),
          catchError((error) => of(updatePartFailure({ error: error.message })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private partService: PartService
  ) {}
}

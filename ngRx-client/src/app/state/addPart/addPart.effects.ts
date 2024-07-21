import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { PartService } from '../../components/lazy-page/lazy-page.service';

import * as PartActions from '../addPart/addPart.actions';
import {Action} from '@ngrx/store';

@Injectable()
export class PartEffects {
  addPart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PartActions.addPart),
      mergeMap(({ parts }): Observable<Action> =>
        this.partService.addParts(parts).pipe(
          map(() => PartActions.addPartSuccess()),
          catchError((error: string) => of(PartActions.addPartFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private partService: PartService) {}
}

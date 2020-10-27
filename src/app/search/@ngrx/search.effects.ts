import { Injectable } from '@angular/core';
import * as AppActions from './search.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppService } from '../../app.service';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class SearchEffects {
  load$ = createEffect(() =>
  this.actions$.pipe(
    ofType(AppActions.loadNotes),
    switchMap(() => this.service.getData().pipe(
      map((notes) => AppActions.loadNotesSuccessful({ notes }))
    ))
  ));
  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.updateFilter),
      switchMap(action => this.service.getData(action.filter).pipe(
        map((notes) => AppActions.loadNotesSuccessful({notes }))
      ))
    ));
  delete$ = createEffect(() =>
  this.actions$.pipe(
    ofType(AppActions.deleteNote),
    switchMap(action =>
    this.service.delete(action.id).pipe(
      map(res => AppActions.loadNotes())
    ))
  ));

  constructor(private actions$: Actions<any>, private service: AppService) {}
}

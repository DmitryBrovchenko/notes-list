import { createAction, props } from '@ngrx/store';
import { Note } from '../../interfaces/note.interface';

export const updateFilter = createAction('[note] Update Filter', props<{ filter: string }>());
export const loadNotes = createAction('[note] Load Notes');
export const loadNotesSuccessful = createAction('[note] Load Notes - Successful', props<{notes: Note[]}>());
export const deleteNote = createAction('[note] Delete Note', props< {id: number}>());


// const all = union({updateFilter, loadNotes, loadNotesSuccessful, deleteNote });
//
// export const ActionsUnion = typeof all;


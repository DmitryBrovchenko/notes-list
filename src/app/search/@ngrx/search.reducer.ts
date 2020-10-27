import { Note } from '../../interfaces/note.interface';
import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { loadNotesSuccessful, updateFilter } from './search.actions';

export interface SearchState {
  filter: string;
  notes: Note[];
}

const initialState: SearchState = {
  filter: '',
  notes: null
};

const reducer = createReducer(initialState,
  on(updateFilter, (state, { filter }) => ({...state, filter})),
  on(loadNotesSuccessful, (state, { notes }) => ({...state, notes})),
);

export function searchReducer(state: SearchState | undefined, action: Action ) {
  return reducer(state, action);
}

export const searchFeatureKey = 'search';

export const getSearchState = createFeatureSelector<SearchState>(searchFeatureKey);
export const getNotes = createSelector(getSearchState, (state) => state.notes);

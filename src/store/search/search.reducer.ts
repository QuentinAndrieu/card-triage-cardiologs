import { createReducer, on } from '@ngrx/store';
import { searchPatient } from './search.actions';

export const initialState: string = '';

export const searchReducer = createReducer(
  initialState,
  on(searchPatient, (state, { search }) => search)
);

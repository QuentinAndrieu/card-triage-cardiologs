import { createAction, props } from '@ngrx/store';

export const searchPatient = createAction(
  '[App] Search patient',
  props<{ search: string }>()
);

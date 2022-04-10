import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { searchPatient } from 'src/store/search/search.actions';

@Component({
  selector: 'ct-app-toolbar',
  templateUrl: './app-toolbar.component.html',
  styleUrls: ['./app-toolbar.component.scss'],
})
export class AppToolbarComponent {
  constructor(private store: Store<{ search: string }>) {}

  onSearch(search: string): void {
    this.store.dispatch(searchPatient({ search }));
  }
}

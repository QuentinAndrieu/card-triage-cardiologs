import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ct-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  @Input() placeholder: string = '';
  @Output() onSearch = new EventEmitter<string>();
  search: string | undefined;

  onChange(search: string): void {
    this.onSearch.emit(search);
  }
}

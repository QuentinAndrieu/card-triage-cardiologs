import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { CardComponent } from 'src/shared/card/card.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { CardPatientComponent } from './card-patient/card-patient.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CardComponent, SearchInputComponent, CardPatientComponent],
  imports: [
    MatCardModule,
    MatInputModule,
    MatIconModule,
    BrowserModule,
    MatChipsModule,
    FormsModule,
  ],
  exports: [CardComponent, SearchInputComponent, CardPatientComponent],
  providers: [],
  bootstrap: [],
})
export class SharedModule {}

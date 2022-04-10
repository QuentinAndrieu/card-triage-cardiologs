import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from 'src/shared/shared.module';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import { PagesModule } from '../pages/pages.module';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { searchReducer } from 'src/store/search/search.reducer';

@NgModule({
  declarations: [AppComponent, AppToolbarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    MatToolbarModule,
    AppRoutingModule,
    PagesModule,
    StoreModule.forRoot({ search: searchReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

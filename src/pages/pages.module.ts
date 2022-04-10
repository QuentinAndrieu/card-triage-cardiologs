import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [DragDropModule, BrowserModule, HttpClientModule, SharedModule],
  exports: [HomeComponent],
  providers: [],
  bootstrap: [],
})
export class PagesModule {}

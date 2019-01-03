import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule } from '@angular/common/http';
import { ComicsComponent } from './components/comics/comics.component';
import { ComicService } from './comic.service';
import { AppRoutesModule } from './app-routes.module';
import { ArchiveComponent } from './components/archive/archive.component';
import { ComicDetailsComponent } from './components/comics/comic-details/comic-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ComicsComponent,
    ArchiveComponent,
    ComicDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutesModule
  ],
  providers: [
    ComicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

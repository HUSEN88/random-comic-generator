import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import { ComicComponent } from './components/comic/comic.component';
import { ComicService } from './comic.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ComicComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ComicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
